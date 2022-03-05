import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx'
//import { loginUsers } from '../components/getAlluser';
import {
    Card,
    Checkbox,
    FormControlLabel,
    Grid,
    Button,
    CircularProgress,
} from '@material-ui/core'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'

import {makeStyles} from '@material-ui/styles'
//import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(({ palette, ...theme }) => ({
    cardHolder: {
        background: '#1A2038',
    },
    card: {
        maxWidth: 1000,
        borderRadius: 10,
        margin: '1rem',
    },
    buttonProgress: {
        position: 'absolute',
        top: '100%',
        left: '100%',
        marginTop: -12,
        marginLeft: -12,
    },
}))

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
        
        <div
            className={clsx(
                'flex justify-center items-center  min-h-full-screen',
                classes.cardHolder
            )}
        >
            <Card className={classes.card}>
                <Grid container>
                    <Grid item lg={8} md={5} sm={5} xs={12}>
                        <div className="p-8 flex justify-center items-center h-full">
                            <img
                                className="w-200"
                                src="/logo.svg"
                                alt=""
                            />
                        </div>
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12}>
                        <div className="p-8 h-full bg-light-gray relative">
                            <ValidatorForm onSubmit={loginUserdetails}>
                                <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    size="small"
                                    label="Email"
                                    onChange={setEmail}
                                    type="email"
                                    name="email"
                                    value={email}
                                    validators={['required', 'isEmail']}
                                    errorMessages={[
                                        'this field is required',
                                        'email is not valid',
                                    ]}
                                />
                                <TextValidator
                                    className="mb-3 w-full"
                                    label="Password"
                                    variant="outlined"
                                    size="small"
                                    onChange={setPassword}
                                    name="password"
                                    type="password"
                                    value={password}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />

                                <div className="flex flex-wrap items-center mb-4">
                                    <div className="relative">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            //disabled={loading}
                                            type="submit"
                                        >
                                            Sign in
                                        </Button>
                                        {
                                            <CircularProgress
                                                size={24}
                                                className={
                                                    classes.buttonProgress
                                                }
                                            />
                                        }
                                    </div>
                                    <span className="mr-2 ml-5">or</span>
                                    <Button
                                        className="capitalize"
                                        onClick={() =>
                                            history.push('/')
                                        }
                                    >
                                        Sign up
                                    </Button>
                                </div>
                                <Button
                                    className="text-primary"
                                    onClick={() =>
                                        history.push('/forgetpassword')
                                    }
                                >
                                    Forgot password?
                                </Button>
                            </ValidatorForm>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </div>
        // <FormGroup className={classes.container}>
        //     <Typography variant="h4">login User</Typography>
        //     <FormControl>
        //         <InputLabel htmlFor="my-input">Email</InputLabel>
        //         <Input onChange={(e) => setEmail(e.target.value)} name='email' value={email} id="my-input"/>
        //     </FormControl>
        //     <FormControl>
        //         <InputLabel htmlFor="my-input">password</InputLabel>
        //         <Input onChange={(e) => setPassword(e.target.value)} name='password' value={password} id="my-input" />
        //     </FormControl>
        //     <FormControl>
        //         <Button variant="contained" color="primary" onClick={loginUserdetails}>Login</Button>
        //     </FormControl>
            
        //     <Button color="primary" variant="contained" style={{marginleft:10}} component={Link} to={"/forgetpassword"}>Forget Password</Button> 
        // </FormGroup>
        
    )
}
export default LoginUser;