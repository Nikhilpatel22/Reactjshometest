import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles, Checkbox } from '@material-ui/core'
import $ from 'jquery';
import { Link } from 'react-router-dom';

//const initialList = [];
//const listValue = [5];
function Pattern() {
  const [row, setRow] = useState(0);
 // var n = 5;
  // const [list,setlist] = useState(listValue);
  //const [list, setList] = useState(initialList);
  // useEffect(() => {
  //   console.log(row, 'row')
  // }, [row])
  // const onValueChange = (rindex, e) => {
  //   e.preventDefault();
  //   console.log(e.target.value);
  //   console.log(rindex);
  //   //list.push(e.target.value)
  // }
  // console.log(global);
  return (
    <div className="App">
      <div className="number-inputs">
        <input
          type="number"
          value={row}
          onChange={(e) => setRow(e.target.value)}
        />
      </div>
      <table>
        <tbody>
          <thead>
            {new Array(Number(row)).fill().map((rowValue, rowIndex) => {
              var number = 2;
              //debugger;
              return (
                <tr>
                  {new Array(Number(2 * row - 1)).fill().map((colValue, colIndex) => {
                    // debugger;
                    //var lowerLimit = Number(row) - rowIndex - 1;
                    var lowerLimit = Number(row) - rowIndex - 1;
                    //var upperLimit = rowIndex+3;
                    var Llimit = Number(row) - rowIndex - lowerLimit;
                    var upperLimit = Number(row) + rowIndex - 1;
                    
                    //console.log(lowerLimit);
                   // console.log(Llimit);
                   // console.log(upperLimit);
                   // var Llimit = ((colIndex)-(lowerLimit)+1);
                   // var Ulimit =  ((colIndex)-(upperLimit)&& (rowIndex));
                    if(lowerLimit===colIndex){
                    return <td>{(Llimit)}</td>    
                  }
                  else if(upperLimit === colIndex){
                         // console.log(rowIndex);
                         //console.log("else if rowIndex")
                         return <td>{((rowIndex+1))}</td>           
                           //? <td>{(lowerLimit||(upperLimit))}</td>}</td>
                   }
                   else{
                    return (rowIndex === (row-1) && (colIndex % 2)=== 0)
                    //? <td>{(lowerLimit||(upperLimit))}</td>
                    // ? <td>{((colIndex)-(lowerLimit) && (rowIndex))}</td>
                     //? <td>{((colIndex)-(lowerLimit) && (rowIndex)&&(colIndex-5))}</td>
                     //? <td>{((colIndex+1)-(lowerLimit))}</td>
                      // ? <td>{(lowerLimit) + (upperLimit) }</td>
                     //? <td>{(Llimit)||(upperLimit)}</td>
                     //? <td>{(colIndex) - (lowerLimit+1)}</td>     
                     ?<td>{number++}</td>
                     :<td></td>  
                  }                                   
                   })}     
                </tr>                
              )
            })
            }
          </thead>
        </tbody>
      </table>
    </div>
  );
}
export default Pattern;
                