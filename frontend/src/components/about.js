import React,{useEffect} from "react";
import { useHistory } from "react-router-dom";

 const About = () =>{
     
const history = useHistory(); 
  const callAboutPage = async () =>{
      try{  
        const res = await fetch('http://localhost:8080/users/about',{
            method : "GET",
            headers : {
                Accept : "application/json",
                'Content-Type':"application/json"
            },
            credentials : "include"
        })
        const data =await res.json();
        console.log(data);
        
        if(!res.status === 200){
            const error = new Error(res.error);
            throw error;
        }

      }catch(err){
          console.log(err);
          history.push('/loginuser');
      }
  }

    useEffect(() => {
       callAboutPage();
    },[])
    return(
        <div className="cointainer">
            <form method="GET"><div className="py-4">
                <h1>about page</h1>
            </div>
            </form>
        </div>
    )
}

export default About;