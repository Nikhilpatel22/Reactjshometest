import React, { useState } from 'react'

const Example = () => {
    const [number,setNumber] = useState(11)


    const divisible = (e) =>{
        // e.preventdefault()
        setNumber(e.target.value)

        console.log("this",this)

         if(number % 3 === 0){
             console.log("disision by 3")
         }
         else if(number % 2 === 0){
            console.log("disision by 2")
         }
         else
         {
             console.log(number)
         }
       
    }
  return (
    <div>
        <button onClick={()=>setNumber(number+1)}>+</button>
        <h2>{number}</h2>
        <button onClick={()=>setNumber(number-1)}>-</button>
        <button onClick={divisible}>division</button>
        {/* <input type="text" value={number} onChange={(e)=>divisible(e)} /> */}
    
    
    </div>
  )
}

export default Example