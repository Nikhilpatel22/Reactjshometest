import React from 'react'
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom';
const Example = () => {
    return (
        <div>
       <Button color="primary" variant="contained" style={{marginleft:10}} component={Link} to={"/example1"}>Example1</Button>
       <Button color="primary" variant="contained" style={{marginleft:10}} component={Link} to={"/example2"}>Example2</Button>
       <Button color="primary" variant="contained" style={{marginleft:10}} component={Link} to={"/example3"}>Example3</Button>
       <Button color="primary" variant="contained" style={{marginleft:10}} component={Link} to={"/example4"}>Example4</Button>
       <Button color="primary" variant="contained" style={{marginleft:10}} component={Link} to={"/example5"}>Example5</Button>

        </div>
    )
}

export default Example