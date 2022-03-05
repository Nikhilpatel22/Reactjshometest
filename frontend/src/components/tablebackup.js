import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles, Checkbox } from '@material-ui/core'
import $ from 'jquery';
import { Link } from 'react-router-dom';

const initialList = [];

function BindTable({ }) {
  const [row, setRow] = useState(0);
  const [collumn, setCollumn] = useState(0);
  const [row1, setRow1] = useState();
  const [coll1, setColl1] = useState();
  const [row2, setRow2] = useState();
  const [coll2, setColl2] = useState();
  const [list, setList] = useState(initialList);
  const [value, setValue] = useState({
    rowIndex: '',
    colIndec:'',
    value: ''
  });
  

  useEffect(() => {
    console.log(row, 'row')
    console.log(collumn, 'collumn')
  }, [row, collumn])

  const Autofill = () => {
       //
  }
  
  const onValueChange = (rindex, cindex, e) => {
    //debugger
     e.preventDefault();
    console.log(e.target.value);
    console.log(rindex, cindex);
    
    setValue(rindex,cindex,e.target.value);

    if (value) {
      setList(list.concat(value));
    }
    //setValue('');
    setValue({...value,[e.target.name]:e.target.value});
    e.preventDefault();

    
    //list.push(e.target.value)
   // console.log(listvalue);
  //  for (let i=1; i<=list.length; i++) {    
  //        for (let j=1; j<=i; j++) {
  //         setRow1(rindex+1)
  //         setColl1(cindex)
  //        }
  //    }  


    if(list.length == 0) {
      setRow1(rindex)
      setColl1(cindex)
    }
    else{
      setRow2(rindex)
      setColl2(cindex)
    }  
   }
  return (
    <div className="App">
      <div className="number-inputs">
        <input
          type="number"
          value={row}
          onChange={(e) => setRow(e.target.value)}
        />
        <input
          type="number"
          value={collumn}
          onChange={(e) => setCollumn(e.target.value)}
        />
      </div>
      <table>
        <tbody>
          <thead>
            {new Array(Number(row)).fill().map((row, rindex) => {
              return (
                <tr key={rindex}>
                  {new Array(Number(collumn,(rindex-1))).fill().map((col, cindex) => {
                    return <td key={cindex}>r{rindex.toString()}-c{cindex.toString()}
                      <input
                        type="number"
                        //value ={}
                        onChange={(e) => onValueChange(rindex, cindex, e)}
                      />
                    </td>
                  })}
                </tr>          
              )
            })
            }<button onClick={(e) => Autofill(e)}>Autofill</button>
          </thead>
          <div>
            <tbody>
              <label>Row 1</label>
              <input type="number" value={row1} />
              <label>Col 1</label>
              <input type="number" value={coll1} />
              <label>Row 2</label>
              <input type="number" value={row2} />
              <label>Col 2</label>
              <input type="number" value={coll2} />
              <select>
                <option value="select">Select</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
              </select>
            </tbody>
            {/* <h2>{table}</h2> */}
          </div>
        </tbody>
      </table>
    </div>
  );
}
export default BindTable
