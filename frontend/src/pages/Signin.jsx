import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
export default function SignIn() {
  // State to manage form inputs
  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

const navigate = useNavigate()
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const navigate = useNavigate()
    try {
      
      const responce = await fetch("http://localhost:8080/loginuser",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
         
          email:email,
          password:password
        })
      })

      let jsondata = await responce.json()
      alert("message : "+jsondata.message)
      if(jsondata.executed)
      {
        navigate("/")
      }
    } catch (error) {
      alert("Error :"+error )
    }
  };


  return (
    <div className="rounded-4" style={{border:"3px solid purple",padding:"60px",margin:"80px",backgroundImage:"linear-gradient(90deg, rgba(42,193,161,1) 0%, rgba(196,255,246,1) 31%, rgba(42,188,154,1) 47%, rgba(147,255,234,1) 80%, rgba(0,252,186,1) 99%)"}} >
      <div className='fs-1 text-center fw-bold  mb-4' style={{color:"#BF40BF"}}>SIGN IN</div>
      <div className='container'>

      <form onSubmit={handleSubmit} >
     

      <div class="form-floating m-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => {setemail(e.target.value)}}/>
  <label for="floatingInput">Email address</label>
</div>
<div className="form-floating m-3 mt-5 position-relative">
      <input
        type={showPassword ? 'text' : 'password'}
        className="form-control"
        id="floatingPassword"
        placeholder="Password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <label htmlFor="floatingPassword">Password</label>
      <span
        className="password-toggle"
        onClick={togglePasswordVisibility}
        style={{ cursor: 'pointer', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </span>
    </div>

<div className='' style={{display:'flex',justifyContent:"center",alignItems:"center"}}>

  <button type="submit" class="btn text-white m-3 fs-5 fw-bold" style={{backgroundColor:"#BF40BF"}} >Submit</button>
</div>
</form>
      </div>
    </div>
  );
}
