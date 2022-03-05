import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import $ from 'jquery';
import { Link } from 'react-router-dom';
//import "./styles.css";

function BindTable() {
  const [row, setRow] = useState();
  const [collumn, setCollumn] = useState();
  const [table, setTable] = useState();
  // function bind(){
  //   //
  // }
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
        {/* <button onClick={() => bind}>bind</button> */}
      </div>
      <table>
        <tbody>
          {new Array(Number(row)).fill().map((row, j) => {
            return (
              <tr>
                {new Array(Number(collumn)).fill().map((x, i) => {

                  return <td><input type="text" value="" /></td>
                  // {j.toString()-{i.toString()}}
                })}
              </tr>

            )
          })
          }
          {/* {new Array(2).fill(0).map((row,index) => new Array(3).fill(1))
            //return(<tr key={index+1}>
            //   new Array(collumn).fill().map((s,is) => {
            //     return(<td key={`column${is}`}></td>)
            //   }
            // </tr>)
            } */}
          {/* {new Array(row).fill().map((r,ir) => {
            return(<tr key={`row${ir}`}>
              {new Array(collumn).fill().map((s,is) => {
                return(<td key={`column${is}`}></td>)
              })}
            </tr>)
          })} */}
        </tbody>
      </table>
      {/* <div>
        <label>Row 1</label>
        <input type="number" />
        <label>Col 1</label>
        <input type="number" />
        <label>Row 2</label>
        <input type="number" />
        <label>Col 2</label>
        <input type="number" />
        <input type="hidden" id="val1" />
        <input type="hidden" id="val2" />
        <select>
          <option value="select">Select</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>

      </div> */}
    </div>
  );
}


export default BindTable



///////////////////////////////////

// let board = Array(2).fill(0).map(row => new Array(3).fill(1))



///////////////////////////////////////////
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import $ from 'jquery';
import { Link } from 'react-router-dom';
//import "./styles.css";

function BindTable() {
  const [row, setRow] = useState(0);
  const [collumn, setCollumn] = useState(0);
  const [table, setTable] = useState();
  useEffect(() => {
    console.log(row, 'row')
    console.log(collumn, 'collumn')
  }, [row, collumn])


  const Autofill = () => {
    //
  }
  //   const onValueChange = (e) => {
  //     //console.log(e.target.value);
  //     setTable({...table, [e.target.name]: e.target.value})
  // }
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
          {new Array(Number(row)).fill().map((row, j) => {
            return (
              <tr>
                {new Array(Number(collumn)).fill().map((x, i) => {
                  return <td><input type="number" /></td>
                  //{j.toString()}-{i.toString()}
                })}
              </tr>
            )
          })
          }
        </tbody>
        <button onClick={() => Autofill()}>Autofill</button>
      </table>
      <div>
        <label>Row 1</label>
        <input type="number" autofill={true} />
        <label>Col 1</label>
        <input type="number" />
        <label>Row 2</label>
        <input type="number" />
        <label>Col 2</label>
        <input type="number" />
        <input type="hidden" id="val1" />
        <input type="hidden" id="val2" />
        <select>
          <option value="select">Select</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>

      </div>
    </div>
  );
}


export default BindTable



///////////////////////////////////

// let board = Array(2).fill(0).map(row => new Array(3).fill(1))



import React, { Component } from "react";

class Cell extends Component {
  constructor() {
    super();

    this.state = {
      row: '',
      collumn: '',
      total: []
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    let total = [...this.state.total];
    total.push({ row: this.state.row, collumn: this.state.collumn });
    this.setState({
      total,
      row: '',
      collumn: ''
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  render() {
    return (
      <div className="App">
        <Form handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} newrow={this.state.row} newcollumn={this.state.collumn} />
        <Table total={this.state.total} />
      </div>
    );
  }
}
class Table extends Component {
  render() {
    const total = this.props.total;
    return (
      <div id="Table">
        <table>
          <tbody>
            <tr>
              <th>row</th>
              <th>collumn</th>
            </tr>
            {total.map(item => {
              return (
                <tr>
                  <td>{item.row}</td>
                  <td>{item.collumn}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

class Form extends Component {
  render() {
    return (
      <div id="Form">
        <h3>Add a new table:</h3>
        <form onSubmit={this.props.handleFormSubmit}>
          <label htmlFor="row">
            row:
            <input id="row" value={this.props.newrow} type="text" name="row" onChange={this.props.handleInputChange} />
          </label>
          <label for="collumn">
            collumn:
            <input id="collumn" value={this.props.newcollumn} type="collumn" name="collumn" onChange={this.props.handleInputChange} />
          </label>
          <button type="submit" value="Submit">Autofill</button>
        </form>
      </div>
    );
  }
}
export default Cell
/////////////////////////////////
let row = 5;
export default function cell() {
  let list = [];
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= i; j++) {
      console.log(list);
      list.push()
    }
  }
  return (
    <div>
      <h1>
        {list.row}</h1>
    </div>
  )
}


///////////////////////////////////////////////////////////////
//////1
//////1 2
//////1 2 3
//////1 2 3 4

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles, Checkbox } from '@material-ui/core'
import $ from 'jquery';
import { Link } from 'react-router-dom';

//const initialList = [];

const listValue = [5];

function Pattern() {
  const [row, setRow] = useState(listValue);
  var global = 5;
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
  console.log(global);
  return (
    <div className="App">
      {/* <div className="number-inputs">
        <input
          type="number"
          value={row}
          onChange={(e) => setRow(e.target.value)}
        />
      </div> */}
      <table>
        <tbody>
          <thead>
            {new Array(Number(row)).fill().map((row, index) => {
              return (
                <tr>
                  {/* {(index+1)}  */}
                  {new Array(Number(index + 1)).fill().map((row1, index1) => {
                    return (
                      <td>
                        {(index1 + 1).toString()}
                        {/* {(index1+1).toString()} */}

                      </td>
                    )
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
export default Pattern

///////////////////////////////////////////////////////////////
//////1
//////2 3
//////4 5 6
//////7 8 9 10



import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles, Checkbox } from '@material-ui/core'
import $ from 'jquery';
import { Link } from 'react-router-dom';

//const initialList = [];

//const listValue = [5];
function Pattern() {
  const [row, setRow] = useState(0);
  var global = 1;
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
            {new Array(Number(row)).fill().map((row, index) => {
              return (
                <tr>
                  {/* {(index+1)}  */}
                  {new Array(Number(index)).fill().map((row1, index1) => {
                    return (
                      <td>
                        {(global++)}
                        {/* {(index1+1).toString()} */}
                      </td>
                    )
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

////////////////	
//1
//1	2
//1	2	3
//1	2	3	4
//1	2	3	4	5
//1	2	3	4	5	6


import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles, Checkbox } from '@material-ui/core'
import $ from 'jquery';
import { Link } from 'react-router-dom';

//const initialList = [];

//const listValue = [5];
function Pattern() {
  const [row, setRow] = useState(0);
  var global = 1;
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
            {new Array(Number(row)).fill().map((row, index) => {
              return (
                <tr>
                  {/* {(index)}  */}
                  {new Array(Number(5 - index)).fill().map((row1, index1) => {
                    return (
                      <td>
                        {/* {(global++)} */}
                        {/* {(index1)} */}
                        {/* {(index1+1)} */}
                        {/* {(global*(index-index1+1)).toString()} */}
                      </td>
                    )
                  })}
                  {new Array(Number(index + 1)).fill().map((row2, index2) => {
                    return (
                      <td>
                        {/* {(global*(index-index2+1)).toString()} */}
                        {/* {((++index2))} */}
                        {/* {(2*global-1+index2)} */}
                        {(++index2)}
                      </td> 
                    )
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


///////////////////////////////////////////////
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles, Checkbox } from '@material-ui/core'
import $ from 'jquery';
import { Link } from 'react-router-dom';

//const initialList = [];
//const listValue = [5];
function Pattern() {
  const [row, setRow] = useState(0);
  var n = 5;
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
              return (
                <tr>
                  {new Array(2 * row - 1).fill().map((colValue, colIndex) => {
                    // debugger;
                    var lowerLimit = Number(row) - rowIndex - 1;
                    var upperLimit = Number(row) + rowIndex - 1;
                    return lowerLimit === colIndex || upperLimit === colIndex || ((rowIndex === Number(row) - 1) && colIndex % 2 === 0)
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


//////////////////////////////////////////////////
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles, Checkbox } from '@material-ui/core'
import $ from 'jquery';
import { Link } from 'react-router-dom';

//const initialList = [];
//const listValue = [5];
function Pattern() {
  const [row, setRow] = useState(0);
  var n = 5;
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
                    if (lowerLimit === colIndex) {
                      return <td>1</td>

                    }
                    // else if((rowIndex === Number(row)-1) && (colIndex) % 2 == 1){
                    //  // console.log(rowIndex);
                    //   //console.log("else if rowIndex")
                    //       return <td>{((colIndex)+1)}</td>
                    //         //? <td>{(lowerLimit||(upperLimit))}</td>}</td>
                    // }
                    else if ((rowIndex === (row) - 1)) {
                      // console.log(rowIndex);
                      //console.log("else if rowIndex")
                      return <td>{((colIndex) + 1)}</td>
                      //? <td>{(lowerLimit||(upperLimit))}</td>}</td>
                    }
                    else {
                      return lowerLimit === colIndex || (upperLimit === colIndex)
                        //? <td>{(lowerLimit||(upperLimit))}</td>
                        //? <td>{((colIndex)-(lowerLimit) && (rowIndex))}</td>
                        //? <td>{((colIndex)-(lowerLimit) && (rowIndex)&&(colIndex-5))}</td>
                        //? <td>{((colIndex+1)-(lowerLimit))}</td>
                        ? <td>{(colIndex) - (lowerLimit) && (rowIndex + 1)}</td>
                        // ? <td>{(lowerLimit) + (upperLimit) }</td>
                        //? <td>{(Llimit)||(upperLimit)}</td>
                        //? <td>{(colIndex-3)}</td>
                        : <td></td>
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


/////////////////////////////////////////////////////////
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles, Checkbox } from '@material-ui/core'
import $ from 'jquery';
import { Link } from 'react-router-dom';

//const initialList = [];
//const listValue = [5];
function Pattern() {
  const [row, setRow] = useState(0);
  var n = 5;
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
                    if (lowerLimit === colIndex) {
                      return <td>1</td>

                    }
                    else if ((rowIndex === Number(row) - 1) && (lowerLimit) % 2 == 0) {
                      // console.log(rowIndex);
                      //console.log("else if rowIndex")
                      return <td>{((number++))}</td>
                    }
                    // else if((rowIndex === (row)-1)){
                    //   // console.log(rowIndex);
                    //    //console.log("else if rowIndex")
                    //        return <td>{((colIndex+1))}</td>
                    //          //? <td>{(lowerLimit||(upperLimit))}</td>}</td>
                    //  }
                    else {
                      return lowerLimit === colIndex || upperLimit === colIndex || (rowIndex === (row - 1) && (colIndex % 2) === 0)
                        //? <td>{(lowerLimit||(upperLimit))}</td>
                        // ? <td>{((colIndex)-(lowerLimit) && (rowIndex))}</td>
                        //? <td>{((colIndex)-(lowerLimit) && (rowIndex)&&(colIndex-5))}</td>
                        //? <td>{((colIndex+1)-(lowerLimit))}</td>

                        // ? <td>{(lowerLimit) + (upperLimit) }</td>
                        //? <td>{(Llimit)||(upperLimit)}</td>
                        //? <td>{(colIndex) - (lowerLimit+1)}</td>
                        ? <td>1</td>
                        : <td></td>

                          ? <td>{((number++))}</td>
                          : <td></td>

                            //? <td>{(colIndex) - (lowerLimit) && (rowIndex+1)}</td>
                            ? <td>{(colIndex) - (lowerLimit) && (rowIndex + 1)}</td>
                            : <td></td>
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



/////////////////////////////////////////////////////////////////////////////
//////////1				
////////1		2			
//////1				3		
////1						4	
//1		2		3		4		5

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
            {new Array(Number(row)) .fill().map((rowValue, rowIndex) => {
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

//////////////////////////////////
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles, Checkbox } from '@material-ui/core'
import $ from 'jquery';
import { Link } from 'react-router-dom';

//const initialList = [];
//const listValue = [5];
function Pattern() {
  const [row, setRow] = useState(0);
  var n = 5;
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
              return (
                <tr>
                  {new Array(2 * row - 1).fill().map((colValue, colIndex) => {
                    // debugger;
                    var lowerLimit = Number(row) - rowIndex - 1;
                    var upperLimit = Number(row) + rowIndex - 1;
                    var centerLimit = Number(row) - 0 - 1;

                    var lowerLimit1 = Number(row) + rowIndex - 1;
                    var upperLimit1 = Number(row) - rowIndex - 1;


                    return lowerLimit1 === colIndex || upperLimit1 === colIndex || centerLimit === colIndex ||  ((rowIndex === Number(row) - 1))
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
export default Pattern

/////////////////////////////////////////
//////////////*				
////////////*	*	*			
/////////*		*		*		
///////*			*			*	
//// *	*	*	*	*	*	*	*	*
/////*				*				*
///////*			*			*	
/////////*		*		*		
///////////*	*	*			
//////////////*	

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles, Checkbox } from '@material-ui/core'
import $ from 'jquery';
import { Link } from 'react-router-dom';

//const initialList = [];
//const listValue = [5];
function Pattern() {
  const [row, setRow] = useState(0);
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
            {new Array(Number(row)) .fill().map((rowValue, rowIndex) => {
              //var number = 2;
              return (
                <tr>
                  {new Array(Number(2 * row - 1)).fill().map((colValue, colIndex) => {
                    var lowerLimit = Number(row) - rowIndex - 1;
                    var Llimit = Number(row) - rowIndex - lowerLimit;
                    var upperLimit = Number(row) + rowIndex - 1;
                    var centerLimit = Number(row)-0-1;

                    var lowerLimit1 = Number(row) + rowIndex - 1;
                    var upperLimit1 = Number(row) - rowIndex - 1;
                   if(lowerLimit===colIndex){
                    return <td>*</td>
                  }
                  else if(upperLimit === colIndex){
                         return <td>*</td>
                   }
                   else if(centerLimit === colIndex){
                         return <td>*</td>                          
                   }
                   else{
                    return (rowIndex === (row-1))
                     ?<td>*</td>
                     :<td></td>  
                  }                                   
                   })}     
                </tr>                
              )
            })
            }
             {new Array(Number(row)) .fill().map((rowValue, rowIndex) => {
              //var number = 2;
              return (
                <tr>
                  {new Array(Number(2 * row - 1)).fill().map((colValue, colIndex) => {
                    var lowerLimit = Number(row) - rowIndex - 1;
                    var Llimit = Number(row) - rowIndex - lowerLimit;
                    var upperLimit = Number(row) + rowIndex - 1;
                    var centerLimit = Number(row)-0-1;

                    var lowerLimit1 = Number(row) -lowerLimit -1;
                    var upperLimit1 = Number(row) + lowerLimit -1;
                   if(lowerLimit1===colIndex){
                    return <td>*</td>
                  }
                  else if(upperLimit1 === colIndex){
                         return <td>*</td>
                   }
                   else if(centerLimit === colIndex){
                         return <td>*</td>                          
                   }
                   else{
                    return (rowIndex === (row-1))
                     ?<td></td>
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
export default Pattern


////////////////////////////////////////////2///////////////////////////////
//////////////*				
////////////*	*	*			
/////////*		*		*		
///////*			*			*	
//// *	*	*	*	*	*	*	*	*
/////*				*				*
///////*			*			*	
/////////*		*		*		
///////////*	*	*			
//////////////*	



import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles, Checkbox } from '@material-ui/core'
import $ from 'jquery';
import { Link } from 'react-router-dom';

//const initialList = [];
//const listValue = [5];
function Pattern() {
  const [row, setRow] = useState(0);
  var n = 5;
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
              return (
                <tr>
                  {new Array(2 * row - 1).fill().map((colValue, colIndex) => {
                    // debugger;
                    var lowerLimit = Number(row) - rowIndex - 1;
                    var upperLimit = Number(row) + rowIndex - 1;
                    var centerLimit = Number(row)-0-1;
                    return lowerLimit === colIndex || upperLimit === colIndex || centerLimit === colIndex || ((rowIndex === Number(row) - 1))
                      ? <td>*</td>
                      : <td></td>
                  })}
                </tr>
              )
            })
            }
            {new Array(Number(row)).fill().map((rowValue, rowIndex) => {
              return (
                <tr>
                  {new Array(2 * row - 1).fill().map((colValue, colIndex) => {
                    // debugger;
                    var lowerLimit = Number(row) - rowIndex - 1;
                    var upperLimit = Number(row) + rowIndex - 1;
                    var centerLimit = Number(row)-0-1;

                    var lowerLimit1 = Number(row) -lowerLimit -1;
                    var upperLimit1 = Number(row) + lowerLimit -1;
                    return lowerLimit1 === colIndex || upperLimit1 === colIndex || centerLimit === colIndex 
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

////////////////////////////////////////////3///////////////////////////////
//////////////*				
////////////*	*	*			
/////////*		*		*		
///////*			*			*	
//// *	*	*	*	*	*	*	*	*
/////*				*				*
///////*			*			*	
/////////*		*		*		
///////////*	*	*			
//////////////*	

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles, Checkbox } from '@material-ui/core'
import $ from 'jquery';
import { Link } from 'react-router-dom';

//const initialList = [];
const listValue = [8];
function Pattern() {
  const [row, setRow] = useState(listValue);
  var n = 5;
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
                    return lowerLimit === colIndex || upperLimit === colIndex || centerLimit === colIndex || ((rowIndex === Number(row) - 1))
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
                    return lowerLimit1 === colIndex || upperLimit1 === colIndex || centerLimit === colIndex || ((rowIndex === Number(row) ))
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




////////////////////////////////////////////////////////////////
//////////////////////////////*												*					
////////////////////////////////*										*						
//////////////////////////////////*								*							
////////////////////////////////////*						*								
//////////////////////////////////////*				*									
///////////////////*	*	*	*	*	*	*	*	*	*	*		*	*	*	*	*	*	*	*	*	*	*
//////////////////////////////////////*				*									
////////////////////////////////////*						*								
//////////////////////////////////*								*							
////////////////////////////////*										*						
//////////////////////////////*												*					


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
