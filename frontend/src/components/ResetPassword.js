import React, { useState } from 'react';
import axios from "axios";
import { FormGroup, FormControl, InputLabel, Input, Button, Typography,RadioGroup,FormControlLabel,Radio } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify';
import {makeStyles} from '@material-ui/styles'
//import { loginUsers } from '../components/getAlluser';

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const ResetPassword = () =>{
  const history = useHistory();    
  const [code,setCode]=useState('');
  const [password,setPassword] = useState('');
  const [cpassword,setcPassword] = useState('');
  const classes = useStyles();

  const submitButton = async(e)=>{
    e.preventDefault();

    const res = await fetch(`http://localhost:8080/users/resetpassword`,{
        method : "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            code,
            password,
            cpassword
        })
    });
    const data = res.json();
    console.log(data);

    if(res.status === 400 || !data){
        window.alert("inavalid otp");
    }else{
        window.alert("successfully");
        history.push("/resetpassword");
    }
}
// const submitButton = async()=>{
//     if(validForm()){
//         Object.assign(inputField,props)
//         console.log(inputField,props)
//         let url ='http://localhost:8080/users/resetpassword'
//         let options ={
//             method :'POST',
//             url:url,
//             headers:{
                
//             }, 
//             data :inputField
//         }
//         try{
//             let response = await axios(options)
//             console.log(response)
//             if(response.data.statusText == 'Success'){
//                 toast.success(response.data.message);
//                 history.push('/loginuser')
//             }else{
//                 toast.error(response.data.message);
//             }
//         }catch(e){
//             toast.error("something went wrong");
//         }
//     }else{
//         toast.error("from invalid");
//     }
// }
const changePassword =async()=>{
    history.push('/resetpassword')
}
    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Reset Password</Typography>
            <from method="POST">
              {/* <ToastContainer/> */}
            <FormControl>
                <InputLabel htmlFor="my-input">OTP Code</InputLabel>
                <Input  onChange={(e) => setCode(e.target.value)} name='code' value={code} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">password</InputLabel>
                <Input  onChange={(e) => setPassword(e.target.value)} name='password' value={password} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">confirm password</InputLabel>
                <Input onChange={(e) => setcPassword(e.target.value)} name='cpassword' value={cpassword} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={submitButton}>Reset Password</Button>
            </FormControl>
            </from>
        </FormGroup>
        
    )
}
export default ResetPassword;