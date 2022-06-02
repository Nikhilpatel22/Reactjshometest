import React, { useState } from 'react'

const Ex1 = (props) => {
    
    const [name,setName] = useState("nikhil")
    const [password,setPassword] = useState("nikhil@123")

    let data = {name : "nikhil" , password : "nikhil@123"}

    const Button = (e) =>{
        e.preventDefault();
        props.user({name,password})
        // props.user(data)
    }

    return (
        <div>
            
            <button onClick={(e)=>Button(e)}>submit</button>
        </div>
    )
}

export default Ex1