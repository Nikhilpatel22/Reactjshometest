import React, { useState } from 'react'

const Login = () => {
    const [logginIN,setLogginIN] = useState(false)
    const [data,setData] = useState({
        username : '',
        password : '',
        logginIN
    })
  return (
    <div>login</div>
  )
}

export default Login