import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Navigate } from "react-router-dom";
import FormData from 'form-data';


const Register = () => {

  const [user, setUser] = useState("");
  const [file, setFile] = useState("");

  const handleSubmit = (e) => {
    // const file = e.target.files[0]

    setUser({ ...user, [e.target.name]: e.target.value })
    console.log("user", user)
  }

  const Signup = async() => {
    setUser({ ...user, file })
    console.log(file)

    var data = new FormData();
    data.append('name', user.name);
    data.append('email', user.email);
    data.append('password', user.password);
    data.append('file', file);

    for (const key of Object.keys(file)) {
      data.append('file', file[key])
  }
  console.log("filllle",file)
    // let item = {email,password};
    const result = await fetch("http://localhost:8080/add", {
      method: 'POST',
      body: data
    })
    const result1 = await result.json();
    console.log(result1)
    localStorage.setItem('user', JSON.stringify(result1.token));
    console.log("main", result1.token)

    console.log("user1", user)
    // navigate("/home");
  }

  var auth = JSON.parse(localStorage.getItem("user"))
  return (
    <div>
      {
        auth ? <Navigate to="/home" /> : null
      }
      <input type="text" name="name" placeholder='Name' onChange={(e) => handleSubmit(e)} />
      <br />
      <input type="text" name="email" placeholder='Email' onChange={(e) => handleSubmit(e)} />
      <br />
      <input type="text" name="password" placeholder='Passwrod' onChange={(e) => handleSubmit(e)} />
      <br />
      <input type="file" name="file" onChange={(e) => setFile(e.target.files)} multiple />
      <Button onClick={Signup}>submit</Button>
    </div>
  )
}

export default Register