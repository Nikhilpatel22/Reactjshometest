import React from 'react'
import {Navigate} from "react-router-dom";

const Protected = (props) => {
    
    const CMP = props.Cmp
    var auth = JSON.parse(localStorage.getItem("user"))
    console.log("auth",auth)
    return (
    <div>{auth ? <CMP/> : <Navigate to="/login"></Navigate> }</div>
  )
}

export default Protected