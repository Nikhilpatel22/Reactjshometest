import React, { useState } from 'react'
import Ex1 from './Ex1'

const Ex = () => {

    const [users,setUsers] = useState("")

    // const data = (data1) =>{
    //     // setState(data1)
    //      console.log(data1)

    // }

    return (
        <div>
            Ex
  {/* {console.log(state)} */}
            <Ex1 user={setUsers}/>
            {users.name}
            {/* <button onClick={setS}>button</button> */}
        </div>
    )
}

export default Ex