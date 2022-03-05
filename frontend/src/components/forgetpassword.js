import React, { useState } from 'react';
import axios from "axios";
import { FormGroup, FormControl, InputLabel, Input, Button, Typography,RadioGroup,FormControlLabel,Radio } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import ResetPassword from './ResetPassword';
import {makeStyles} from '@material-ui/styles'
//import { ResetPassword } from './resetpassword';
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

const LoginUser = () =>{
const history = useHistory();    
const [forgetpassword,showPassword] = useState(true)
const [email,setEmail]=useState('');
const [password,setPassword] = useState('');
const classes = useStyles();


const loginUserdetails = async(e)=>{
    e.preventDefault();

    const res = await fetch(`http://localhost:8080/users/send-mail`,{
        method : "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            email
        })
    });
    const data = res.json();
    console.log(data);

    if(res.status === 400 || !data){
        window.alert("inavalid email");
    }else{
        window.alert("successfully");
        showPassword(false);
        //history.push("/resetpassword");
    }
}

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Forget Password</Typography>
          { forgetpassword ? <form method="POST">
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => setEmail(e.target.value)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={loginUserdetails}>Send Otp</Button>
            </FormControl>
            <Button color="primary" variant="contained" style={{marginleft:10}} component={Link} to={"/loginuser"}>back</Button> 
        </form>
        :<ResetPassword email={email}/>
        }
        </FormGroup>
        
    )
}
export default LoginUser;