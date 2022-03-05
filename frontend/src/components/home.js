import React, { useState, useEffect } from "react";
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getUsers, deleteUser } from "./getAlluser";
import { Link } from 'react-router-dom';

//import axios from "axios";



const Allusers = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    getAllusers();
  }, [])
  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllusers();
  }
  const getAllusers = async() => {
    const response = await getUsers();
    console.log(response);
    setUsers(response.data);
  }
  return (
    <div className="cointainer">
      <div className="py-4">
        <Button color="primary" variant="contained" style={{marginleft:10}} component={Link} to={"/adduser"}>Add New User</Button> 
       <Button color="primary" variant="contained" style={{marginleft:10}} component={Link} to={"/about"}>About</Button> 
       <Button color="primary" variant="contained" style={{marginleft:10}} component={Link} to={"/sendmail"}>Send Mail</Button> 
       <Button color="primary" variant="contained" style={{marginleft:10}} component={Link} to={"/calculation"}>calculation</Button> 
       <Button color="primary" variant="contained" style={{marginleft:10}} component={Link} to={"/colordropdown"}>Color DropDown</Button> 
       <Button color="primary" variant="contained" style={{marginleft:10}} component={Link} to={"/formarraytask"}>Form Array</Button> 
       <Button color="primary" variant="contained" style={{marginleft:10}} component={Link} to={"/formlist"}>Form List</Button> 
       <Button color="primary" variant="contained" style={{marginleft:10}} component={Link} to={"/insurancepolicy"}>Insurance policy</Button>
       <Button color="primary" variant="contained" style={{marginleft:10}} component={Link} to={"/example"}>Examples</Button>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">First</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
            </thead>
          <tbody>
            {users.map((user,index) => (
                <tr>
                  <th scope="row">{index+1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                  <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edituser/${user._id}`}>Edit</Button> 
                  <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button>
                  </td>
                </tr>
              )) 
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Allusers;