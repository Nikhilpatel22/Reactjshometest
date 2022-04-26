import React, { useState } from 'react'
import {Button} from 'react-bootstrap';
import {Navigate} from "react-router-dom";


const Register = () => {

    const [user,setUser] = useState("")


    const handleSubmit = (e) =>{
        setUser({...user,[e.target.name]:e.target.value})
    }


    const Signup = async () => {     
      // let item = {email,password};
      const result = await fetch("http://localhost:8080/add",{
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
     const result1 = await result.json();
     console.log(result1)
       localStorage.setItem('user',JSON.stringify(result1.token));
       console.log("main",result1.token)
      // navigate("/home");
    }

    var auth = JSON.parse(localStorage.getItem("user"))
  return (
    <div>
      {
      auth ? <Navigate to="/home" /> : null
    }
        <input type="text" name="name" placeholder='Name' onChange={(e)=>handleSubmit(e)}/>
        <br/>
        <input type="text" name="email" placeholder='Email' onChange={(e)=>handleSubmit(e)}/>
        <br/>
        <input type="text" name="password" placeholder='Passwrod'onChange={(e)=>handleSubmit(e)}/>
        <br/>
        <Button onClick={Signup}>submit</Button>
    </div>
  )
}

export default Register