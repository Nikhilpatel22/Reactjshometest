import React, { useState } from 'react'

let data = [
    {
        name: "nikhil",
        lastname: "patel",
        address: [{
            city: "navsari",
            country: "india"
        }]
    }]
const Example1 = () => {
    const [user, setUser] = useState(data);
    return (
        <div>
            <h1></h1>
            {user.map(userss => (
                //   <h1>{userss.name}</h1>
                userss.address.map(add => (
                    <h1>{add.country}</h1>
                ))
            ))}
            {/* <button variant="primary" onClick={()=>setUser("nik")}>
                            Submit
                        </button>         
                        <button variant="primary" onClick={()=>setUser("nikhil")}>
                            Update
                        </button> */}
        </div>
    )
}
export default Example1
