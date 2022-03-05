import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles, Checkbox } from '@material-ui/core'
import $ from 'jquery';
import { Link } from 'react-router-dom';

//const initialList = [];
const listValue = [6];
function Pattern() {
  const [row, setRow] = useState(listValue);
  
  return (
    <div className="App">
      <div className="number-inputs">
        {/* <input
          type="number"
          value={row}
          onChange={(e) => setRow(e.target.value)}
        /> */}
      </div>
      <table>
        <tbody>
          <thead>
            {new Array(Number(row)).fill().map((rowValue, rowIndex) => {
              return (
                <tr>
                  {new Array(2 * row - 1).fill().map((colValue, colIndex) => {
                    // debugger;
                    var lowerLimit = Number(row) - rowIndex - 1;
                    var upperLimit = Number(row) + rowIndex - 1;
                    var centerLimit = Number(row)-0-1;
                    return  upperLimit === colIndex  || ((rowIndex === Number(row) - 1))
                      ? <td>*</td>
                      : <td></td>
                  })}
                  <td> <td> <td> <td> <td><td><td><td></td></td></td></td></td></td></td></td>
                   {new Array(2 * row - 1).fill().map((colValue, colIndex) => {
                    // debugger;
                    var lowerLimit = Number(row) - rowIndex - 1;
                    var upperLimit = Number(row) + rowIndex - 1;
                    var centerLimit = Number(row)-0-1;
                    return  lowerLimit === colIndex  || ((rowIndex === Number(row) - 1))
                      ? <td>*</td>
                      : <td></td>
                  })}
                </tr>
              )
            })
            }
         
            {new Array(Number(row-1)).fill().map((rowValue, rowIndex) => {
              return (
                <tr>
                  {new Array(2 * row - 1).fill().map((colValue, colIndex) => {
                    // debugger;
                    var lowerLimit = Number(row) - rowIndex - 1;
                    var upperLimit = Number(row) + rowIndex - 1;
                    var centerLimit = Number(row)-0-1;

                    var lowerLimit1 = Number(row) -lowerLimit;
                    var upperLimit1 = Number(row-1) + lowerLimit -1;
                    return  upperLimit1 === colIndex ||  ((rowIndex === Number(row) ))
                      ? <td>*</td>
                      : <td></td>
                  })}
                   <td> <td> <td> <td> <td><td><td><td></td></td></td></td></td></td></td></td>
                  {new Array(2 * row - 1).fill().map((colValue, colIndex) => {
                    // debugger;
                    var lowerLimit = Number(row) - rowIndex - 1;
                    var upperLimit = Number(row) + rowIndex - 1;
                    var centerLimit = Number(row)-0-1;

                    var lowerLimit1 = Number(row) -lowerLimit;
                    var upperLimit1 = Number(row-1) + lowerLimit -1;
                    return  lowerLimit1 === colIndex ||  ((rowIndex === Number(row) ))
                      ? <td>*</td>
                      : <td></td>
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
