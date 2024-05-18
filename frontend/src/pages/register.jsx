// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// export default function Register() {
//   // State to manage form inputs
//   // const [formData, setFormData] = useState({
//   //   name: '',
//   //   number: '',
//   //   email: '',
//   //   password: '',
//   //   cpassword: ''
//   // });

//   const navigate = useNavigate()
//   const [name,setname] = useState("")
//   const [number,setnumber] = useState("")
//   const [email,setemail] = useState("")
//   const [password,setpassword] = useState("")
//   const [cpassword,setcpassword] = useState("")

//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const [showPassword1, setShowPassword1] = useState(false);

//   const togglePasswordVisibility1 = () => {
//     setShowPassword1(!showPassword1);
//   };

//   // Function to handle input changes
//   // const handleInputChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData({
//   //     ...formData,
//   //     [name]: value
//   //   });

//   //   alert(`${name}: ${formData[name]}`);
//   // };

//   // Function to handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
      
//       const responce = await fetch("http://localhost:8080/registeruser",{
//         method:"POST",
//         headers:{
//           "Content-Type":"application/json"
//         },
//         body:JSON.stringify({
//           name:name,
//           number:number,
//           email:email,
//           password:password,
//           cpassword:cpassword
//         })
//       })

//       let jsondata = await responce.json()
//       alert("message : "+jsondata.message)
//       if(jsondata.executed)
//       {
//         navigate("/signin")
//       }
//     } catch (error) {
//       alert("Error :"+error )
//     }
//   };

//   return (
//     <div className="rounded-4" style={{ border: "3px solid blue", padding: "40px", margin: "30px", backgroundImage: "linear-gradient(90deg, rgba(62,176,191,1) 0%, rgba(196,210,255,1) 14%, rgba(0,237,255,1) 46%, rgba(55,180,198,1) 100%)" }} >
//       <div className='fs-1 text-center fw-bold text-primary mb-4'>Register</div>
//       <div className='container'>

//         <form onSubmit={handleSubmit}>
//           <div className="form-floating mb-3">
//             <input type="text" className="form-control" id="name" name="name" value={name} onChange={(e) => {setname(e.target.value)}} placeholder="Name" />
//             <label htmlFor="name">Name</label>
//           </div>
//           <div className="form-floating mb-3">
//             <input type="text" className="form-control" id="number" name="number" value={number} onChange={(e) => {setnumber(e.target.value)}} placeholder="Contact Number" />
//             <label htmlFor="number">Contact Number</label>
//           </div>
//           <div className="form-floating mb-3">
//             <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => {setemail(e.target.value)}} placeholder="Email address" />
//             <label htmlFor="email">Email address</label>
//           </div>
//           <div className="form-floating mb-3 ">
//       <input
//         type={showPassword ? 'text' : 'password'}
//         className="form-control"
//         id="floatingPassword"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setpassword(e.target.value)}
//       />
//       <label htmlFor="floatingPassword">Password</label>
//       <span
//         className="password-toggle"
//         onClick={togglePasswordVisibility}
//         style={{ cursor: 'pointer', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
//       >
//         {showPassword ? <FaEyeSlash /> : <FaEye />}
//       </span>
//     </div>

//     <div className="form-floating mb-3 ">
//       <input
//         type={showPassword1 ? 'text' : 'password'}
//         className="form-control"
//         id="floatingPassword"
//         placeholder="Password"
//         value={cpassword}
//         onChange={(e) => setcpassword(e.target.value)}
//       />
//       <label htmlFor="floatingPassword">Confirm Password</label>
//       <span
//         className="password-toggle"
//         onClick={togglePasswordVisibility1}
//         style={{ cursor: 'pointer', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
//       >
//         {showPassword ? <FaEyeSlash /> : <FaEye />}
//       </span>
//     </div>
 
//           <div className='' style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
//             <button type="submit" className="btn btn-primary m-5 fs-5 fw-bold">Submit</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [address, setAddress] = useState("");
  const [userType, setUserType] = useState(""); // New state for user type

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:8080/registeruser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          number: number,
          email: email,
          password: password,
          cpassword: cpassword,
          address: address,
          userType: userType // Include user type in the request body
        })
      });

      const jsonData = await response.json();
      alert("message : " + jsonData.message);
      if (jsonData.executed) {
        navigate("/signin");
      }
    } catch (error) {
      alert("Error: " + error);
    }
  };

  return (
    <div className="rounded-4" style={{ border: "3px solid blue", padding: "40px", margin: "30px", backgroundImage: "linear-gradient(90deg, rgba(62,176,191,1) 0%, rgba(196,210,255,1) 14%, rgba(0,237,255,1) 46%, rgba(55,180,198,1) 100%)" }}>
      <div className='fs-1 text-center fw-bold text-primary mb-4'>Register</div>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="name" name="name" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="number" name="number" value={number} onChange={(e) => { setNumber(e.target.value) }} placeholder="Contact Number" />
            <label htmlFor="number">Contact Number</label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email address" />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating mb-3 ">
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          <div className="form-floating mb-3 ">
            <input
              type={showPassword1 ? 'text' : 'password'}
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={cpassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <span
              className="password-toggle"
              onClick={togglePasswordVisibility1}
              style={{ cursor: 'pointer', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
            >
              {showPassword1 ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
            <label htmlFor="address">Address</label>
          </div>

          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="userType" id="buyer" value="buyer" checked={userType === "buyer"} onChange={() => setUserType("buyer")} />
            <label className="form-check-label" htmlFor="buyer">Buyer</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="userType" id="seller" value="seller" checked={userType === "seller"} onChange={() => setUserType("seller")} />
            <label className="form-check-label" htmlFor="seller">Seller</label>
          </div>

          <div className='' style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
            <button type="submit" className="btn btn-primary m-5 fs-5 fw-bold">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}


