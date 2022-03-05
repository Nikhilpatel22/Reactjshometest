import React,{ useState } from "react";
import ReactDOM from "react-dom";
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'

import { Link } from 'react-router-dom';
//import "./styles.css";

function Calculation() {

 const [row, setRow] = useState();
 const [collumn, setCollumn] = useState();  
 const [table,setTable] = useState();
//   const [number1, setNumber1] = useState();
//   const [number2, setNumber2] = useState();

//   const [total, setTotal] = useState();

//   function add() {
//     setTotal(number1 + number2);
//   }
//   function sub() {
//     setTotal(number1 - number2);
//   }
//   function mul() {
//     setTotal(number1 * number2);
//   }
//   function div() {
//     setTotal(number1 / number2);
//   }
function bind(){
    setTable(row + collumn);
}


  return (
    <div className="App">
      <h1>Bind Table</h1><Button style={{marginleft:10}} component={Link} to={"/table"}>Table</Button> 
      <Button style={{marginleft:10}} component={Link} to={"/cell"}>cell</Button> 
      <Button style={{marginleft:10}} component={Link} to={"/pattern"}>pattern</Button> 
      <Button style={{marginleft:10}} component={Link} to={"/calculator"}>calculator</Button> 
      <div className="number-inputs">
        <input
          type="number"
          value={row}
          onChange={(e) => setRow(+e.target.value)}
         
        />
        <input
          type="number"
          value={collumn}
          onChange={(e) => setCollumn(+e.target.value)}
         
        />
      </div>
      <button onClick={bind}>Bind </button>
      {/* <div className="number-inputs">
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(+e.target.value)}
         
        />
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(+e.target.value)}
         
        />
      </div>

      <button onClick={add}>Add </button>
      <button onClick={sub}>minues </button>
      <button onClick={mul}>multiplication </button>
      <button onClick={div}>division </button>

      <h2>{total}</h2> */}
    </div>
  );
}


 export default Calculation