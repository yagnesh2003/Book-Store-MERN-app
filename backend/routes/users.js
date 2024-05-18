const Token = require("../models/token")
const {User,validate} = require("../models/user")
const crypto = require("crypto")
const express = require('express')
const router = express.Router()
const sendEmail = require('../utils/email')


router.post("/",async (req,res) => {
    try {
        // const {error} = validate(req.body)
        // if (error) {return res.status(400).send(error.details[0].message)}
        console.log("email request received...")
        let user = await User.findOne({email:req.body.email})
        if (user) { return res.status(400).send("Email already exist!")}

        user = await new User({
            name : req.body.name,
            email:req.body.email
        }).save()

        let token = await new Token({
            userId:user._id,
            token:crypto.randomBytes(32).toString("hex")
        }).save()


        const message = `${process.env.BASE_URL}/users/verify/${user._id}/${token.token}`
        await sendEmail(user.email,"verify email",message)

        res.send("Email sent to your account")



    } catch (error) {
        res.status(400).send("Error "+error)
    }
})


router.get("/verify/:id/:token", async (req, res) => {
    try {
        console.log("Verification request received");

        const user = await User.findOne({ _id: req.params.id });
        if (!user) {
            return res.status(400).send("Invalid link: User not found");
        }

        const token = await Token.findOne({ userId: user._id, token: req.params.token });
        if (!token) {
            return res.status(400).send("Invalid link: Token not found");
        }

        await User.updateOne({ _id: user._id }, { verified: true });

        res.send("Email verified successfully");
    } catch (error) {
        console.error("Error occurred during verification:", error);
        res.status(500).send("Error occurred during verification");
    }
});

router.get("/test", async (req,res) => {
    res.json({message:"received"})
})
module.exports = router