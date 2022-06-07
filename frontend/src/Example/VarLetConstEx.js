import React, { useState } from 'react'

const VarLetConstEx = () => {
  
////////////////////////// var const let

//   var name = "nikhil";


//   if(name){
//       let name = "suko"
//       console.log(name)
//   }
//   console.log("name",name)
  

//////////////// arry distructuring



// let name1 = ['js','java','react','node'];

// let [t1,t2,t3,t4] = name1;

// console.log(name1)



const [data,setdata] = useState({
    name : "nikhil",
    lname : "patel"
})



const {name,lname} = data


console.log({...data})

    return (
    <div>
            {name}
    </div>
  )
}

export default VarLetConstEx