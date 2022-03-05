import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addUser } from '../components/getAlluser';
import { useHistory } from 'react-router-dom';

const initialValue = {
    name: '',
    email: '',
    phone: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, email, phone } = user;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        history.push('/');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddUser;



//forgetpassword

import React, { useState } from 'react';
import axios from "axios";
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography,RadioGroup,FormControlLabel,Radio } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
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
        history.push("/resetpassword");
    }
}

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Forget Password</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => setEmail(e.target.value)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={loginUserdetails}>Send Otp</Button>
            </FormControl>
            <Button color="primary" variant="contained" style={{marginleft:10}} component={Link} to={"/loginuser"}>back</Button> 
        </FormGroup>
        
    )
}
export default LoginUser;

//reset pwd

import React, { useState } from 'react';
import axios from "axios";
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography,RadioGroup,FormControlLabel,Radio } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
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


const resetpassword = async(e)=>{
    e.preventDefault();
    
    const res = await fetch(`http://localhost:8080/users/resetpassword`,{
        method : "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            code,
            password
        })
    });

    const data = res.json();
    console.log(data);

    if(res.status === 400 || !data){
        window.alert("inavalid credentials");
    }else{
        window.alert("successfully");
        history.push("/loginuser");
    }

}

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Reset Password</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">OTP Code</InputLabel>
                <Input onChange={(e) => setCode(e.target.value)} name='code' value={code} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">password</InputLabel>
                <Input onChange={(e) => setPassword(e.target.value)} name='password' value={password} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">confirm password</InputLabel>
                <Input onChange={(e) => setcPassword(e.target.value)} name='cpassword' value={cpassword} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={resetpassword}>Reset Password</Button>
            </FormControl>
        </FormGroup>
        
    )
}
export default ResetPassword;






//run resetpassword

import React, { useState } from 'react';
import axios from "axios";
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography,RadioGroup,FormControlLabel,Radio } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify';
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

const ResetPassword = (props) =>{
const [inputField,setInputField] = useState({
    code:'',
    password:'',
    cpassword:'',
})
const classes = useStyles();
const history = useHistory();
const [errField,setErrField] = useState(
    {
        codeErr:'',
        passwordErr:'',
        cpasswordErr:'',
    }
)

const validForm = () =>{
    let formIsValid = true;
    setErrField({
        codeErr:'',
        passwordErr:'',
        cpasswordErr:'',
    })
    if(inputField.code ==''){
        formIsValid = false
        setErrField(prevState=>({
            ...prevState,codeErr:'plz enter valid code'
        }))
    }
    if(inputField.password ==''){
        formIsValid = false
        setErrField(prevState=>({
            ...prevState,passwordErr:'plz enter valid code'
        }))
    }
    if(inputField.cpassword !='' && inputField.password != inputField.cpassword){
        formIsValid = false
        setErrField(prevState=>({
            ...prevState,cpasswordErr:'password dont match'
        }))
    }
    return formIsValid
}
const inputHandler = (e)=>{
    setInputField({...inputField,[e.target.name]:e.target.value})
}

const submitButton = async()=>{
    if(validForm()){
        Object.assign(inputField,props)
        console.log(inputField,props)
        let url ='http://localhost:8080/users/resetpassword'
        let options ={
            method :'POST',
            url:url,
            headers:{
                "Content-Type" : "application/json"
            },
            data :inputField
        }
        try{
            let response = await axios(options)
            console.log(response)
            if(response.data.statusText == 'Success'){
                toast.success(response.data.message);
                history.push('/loginuser')
            }else{
                toast.error(response.data.message);
            }
        }catch(e){
            toast.error("something went wrong");
        }
    }else{
        toast.error("from invalid");
    }
}
const changePassword =async()=>{
    history.push('/resetpassword')
}
    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Reset Password</Typography>
            <from method="POST">
            <FormControl>
                <InputLabel htmlFor="my-input">OTP Code</InputLabel>
                <Input  name='code' value={inputField.code}  onChange={inputHandler} id="my-input"/>
                {
                    errField.codeErr.length > 0 && <span className="error">{errField.codeErr}</span>
                }
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">password</InputLabel>
                <Input  name='password' value={inputField.password}  onChange={inputHandler} id="my-input" />
                {
                    errField.passwordErr.length > 0 && <span className="error">{errField.passwordErr}</span>
                }
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">confirm password</InputLabel>
                <Input name='cpassword' value={inputField.cpassword}  onChange={inputHandler} id="my-input" />
                {
                    errField.cpasswordErr.length > 0 && <span className="error">{errField.cpasswordErr}</span>
                }
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={submitButton}>Reset Password</Button>
            </FormControl>
            </from>
        </FormGroup>
        
    )
}
export default ResetPassword;




//verify otp
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
        password:'',
        cpassword:''
    };
    this.onchange = this.onchange.bind(this);
  }
  onchange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  performVerify = async event => {
    event.preventDefault();

    var data = {
      email: this.props.email,
      password:this.state.password,
      cpassword:this.state.cpassword,
      code: this.state.code,
      };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    };
    const url = "http://localhost:8080/users/resetpassword";
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      if (result.data === "verified") {
        return <Redirect to="/loginuser" />;
      }
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="code"
          placeholder="emnter otp"
          onChange={this.onchange}
        />
        <input
          type="text"
          name="password"
          placeholder="emnter password"
          onChange={this.onchange}
        />
        <input
          type="text"
          name="cpassword"
          placeholder="emnter confirm password"
          onChange={this.onchange}
        />
        <br />
        <button type="submit" onClick={event => this.performVerify(event)}>
          Submit
        </button>
        <hr />
      </div>
    );
  }
}
export default ResetPassword;



//route reset

let data = await Otp.find({email:req.body.email,code:req.body.code})
//var err;
const response ={}
console.log(data);
if(data){
    let currentTime =new Date().getTime();
    let diff = data.expireIn - currentTime;
    //console.log(diff);
    if(diff < 0){
        //res.json({message:'otp expired'});
        res.status(400).json({error:'otp expired'})
    }
   else{
        let user = await User.findOne({email:req.body.email});
        user.password =  req.body.password;
        res.status(200).json({message:'successfullyy'})
    }
}else{
    res.status(400).json({error:'invalid otp'})
}





///////////////////////////
const login = async (email, password) => {
    const response = await fetch('http://localhost:8080/users/loginuser', {
        method : "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            email,
            password
        })
    })
    const data = response.json();
    console.log(data);
    const { accessToken, user } = data

    setSession(accessToken)

    dispatch({
        type: 'LOGIN',
        payload: {
            user,
        },
    })
}



/////////////////////
import React, { useState } from 'react';
import axios from "axios";
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography,RadioGroup,FormControlLabel,Radio } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
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
const [email,setEmail]=useState('');
const [password,setPassword] = useState('');
const classes = useStyles();


const loginUserdetails = async(e)=>{
    e.preventDefault();

    const res = await fetch(`http://localhost:8080/users/loginuser`,{
        method : "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            email,
            password
        })
    });
    const data = res.json();
    console.log(data);

    if(res.status === 400 || !data){
        window.alert("inavalid credentials");
    }else{
        window.alert("login successfully");
        history.push("/");
    }
}

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">login User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => setEmail(e.target.value)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">password</InputLabel>
                <Input onChange={(e) => setPassword(e.target.value)} name='password' value={password} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={loginUserdetails}>Login</Button>
            </FormControl>
            
            <Button color="primary" variant="contained" style={{marginleft:10}} component={Link} to={"/forgetpassword"}>Forget Password</Button> 
        </FormGroup>
        
    )
}
export default LoginUser;


//////table code///////////////////////////////////////////
import React from 'react';
import AppStore from '../../stores/AppStore';

export default class Table extends React.Component {
    state = {rows: [], isEditing: false};

    render() {

        let {rows, isEditing} = this.state;

        let headerArray = AppStore.getTable().columns;

        const handleEdit = (row) => {
            this.setState({isEditing: true});
        };

        const handleAddRowClickEvent = () => {
            let rows = this.state.rows;
            rows.push({isNew: true, isEditing: false});
            this.setState({rows: rows});
        };

        return (
            <div>
                <div className="row" id="table-row">
                    <table className="table table-striped">
                        <thead>
                            <tr>{headerArray.map((element, index) => {
                                return (
                                    <th key={index} id={element.id} className="text-center">{element.name}</th>
                                );})}
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => row.isEditing ?
                                <RowForm formKey={index} key={index} /> :
                                <tr key={index}>
                                    {headerArray.map((element, index) => {
                                        return (
                                            <td key={index} id={element.id}></td>
                                        );
                                    })}
                                    <td>
                                        <button onClick={handleEdit(row)}>Edit</button>
                                    </td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <div className="col-xs-12 de-button">
                        <button type="button" className="btn btn-success" onClick={handleAddRowClickEvent}>Add Row</button>
                    </div>
                </div>
            </div>
        );
    }
} 
////////////////////////////////////////////////////////////
////////////calculator///////////////
import { makeStyles } from '@material-ui/styles';
import React,{useState} from 'react'
import "./Calculator.css"


function Calculator() {
    const [result,setResult] = useState("0");
    

    const handleClick = (e) =>{
        setResult(result.concat(e.target.name));
    }

    const clear = () =>{
        setResult("");
    }
    const backspace = () =>{
            setResult(result.slice(0,-1));
    }

    const minuseplus = () =>{
        if(result.charAt(0)==="-"){
            setResult(result.substring(1));

        }else{
            setResult("-" + result);
        }
    };
    const calculate = () =>{
        try{
            setResult(eval(result).toString());
        }catch(err){
            setResult("error")
        }       
}
    return (
        <div className="container">
        <form>
            <input type="text" value={result} />
        </form>
        <div className="keypad">
                <button className="highlight" onClick={clear} id="clear">AC</button>
                <button className="highlight" onClick={backspace} id="backspace">C</button>
                <button className="highlight" name="%" onClick={minuseplus} >+/-</button>
                <button className="highlight" name="%" onClick={handleClick}>%</button>
                
                <button name="7" onClick={handleClick}>7</button>
                <button name="8" onClick={handleClick}>8</button>
                <button name="9" onClick={handleClick}>9</button>
                <button className="highlight" name="/" onClick={handleClick}>&divide;</button>

                <button name="4" onClick={handleClick}>4</button>
                <button name="5" onClick={handleClick}>5</button>
                <button name="6" onClick={handleClick}>6</button>

                <button className="highlight" name="*" onClick={handleClick}>&times;</button>
                
                <button name="1" onClick={handleClick}>1</button>
                <button name="2" onClick={handleClick}>2</button>
                <button name="3" onClick={handleClick}>3</button>
                <button className="highlight" name="-" onClick={handleClick}>&ndash;</button>
                
                <button name="0" onClick={handleClick}>0</button>
                <button name="." onClick={handleClick}>.</button>
                <button  className="highlight" onClick={calculate} id="result">=</button>
                <button className="highlight" name="+" onClick={handleClick}>+</button>
                
        </div>
        </div>
    )
}

export default Calculator
