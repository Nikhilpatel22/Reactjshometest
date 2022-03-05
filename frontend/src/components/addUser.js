import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, Typography,RadioGroup,FormControlLabel,Radio } from '@material-ui/core';
import { addUser } from '../components/getAlluser';
import { useHistory } from 'react-router-dom';

const initialValue = {
    name: '',
    email: '',
    phone: '',
    password:'',
    cpassword:'',
    file:''
}

// const useStyles = makeStyles({
//     container: {
//         width: '50%',
//         margin: '5% 0 0 25%',
//         '& > *': {
//             marginTop: 20
//         }
//     }
// })

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, email, phone,password,cpassword,file} = user;
   // const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const imageUpload =(event)=>{
        console.log(event.target.files[0]);  
    }
    const addUserDetails = async() => {
        await addUser(user);
        history.push('/');  
    }

    return (
        <FormGroup >
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
                <InputLabel htmlFor="my-input">password</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='password' value={password} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">confirm password</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='cpassword' value={cpassword} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Choice photo</InputLabel>
                <Input type="file" onChange={imageUpload} name='file' value={file} id="my-input" />
            </FormControl>
            <InputLabel htmlFor="my-input">Gender</InputLabel>
  <RadioGroup aria-label="gender" defaultValue="male" name="radio-buttons-group">
    <FormControlLabel value="male" name='gender' control={<Radio />} label="Male" />
    <FormControlLabel value="female" name='gender' control={<Radio />} label="Female" />
  </RadioGroup>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddUser;