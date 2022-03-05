import React, { useState } from "react";
import { Button,Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {

const [data,setData] = useState("")
const [list,setList] = useState([])

const handleChange = (e) =>{
    setData({...data,[e.target.name]:e.target.value})
}


const Submit = () =>{

    list.push(data)
    setList([...list])
    console.log(list)

    setData(data)
    console.log(data)
}
    return (
        <div>
            <h5>User form</h5>
            <Form.Control type="text" placeholder="First Name" name="fname" onChange={(e)=>handleChange(e)}/>
            <Form.Control type="text" placeholder="Last Name" name="lname" onChange={(e)=>handleChange(e)}/>
            <Button onClick={Submit}>Submit</Button>
        </div>
    )
}
export default Home