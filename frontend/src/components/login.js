import React, { useEffect, useState } from 'react'
import {Navigate} from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  var auth = JSON.parse(localStorage.getItem("user"))
// useEffect(()=>{

// },[])

  const Login = async () => {     
    let item = {email,password};
    const result = await fetch("http://localhost:8080/login",{
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
   const result1 = await result.json();
   console.log(result1)
    localStorage.setItem('user',JSON.stringify(result1.token));
    console.log("main",result1.token)
    // navigate("/home");
  }


  return (
    <>
    {
      auth ? <Navigate to="/home" /> : null
    }
      <div>login</div>
      <div>
        <input type="text" name='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} />
        <input type="text" name='email' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => Login()}>Login</button>
      </div>
    </>
  )
}

export default Login