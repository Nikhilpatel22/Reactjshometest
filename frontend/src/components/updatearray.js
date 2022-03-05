import { speedDialIconClasses } from "@material-ui/core";
import { event } from "jquery";
import React from "react"
import { useState, useEffect } from "react"
import { Form, Button, Dropdown, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

var list = [];

const getLocalStoragelist = () => {
    let locallist = localStorage.getItem("list");
    console.log(locallist);

    if (locallist) {
        return JSON.parse(localStorage.getItem('list'));
    } else {
        return [];
    }
}

const Formarraytask = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [color, setColor] = useState("");
    const [hobbie, setHobbie] = useState([]);
    const [gender, setGender] = useState("");

    const [list, setList] = useState(getLocalStoragelist());

    // const [checked, setChecked] = useState(true)

    const [toggleSubmit, setToggleSubmit] = useState(true);

    const [hoobieUpdate, setHobbieUpdate] = useState(true)

    const [iseditUser, setIsEditUser] = useState(null);
    // const [ishobbie, setIsHobbie] = useState(null);

    const Submit = () => {
        if (!firstname || !lastname || !email || !password || !color || !gender) {
            //alert("fill all data")
        } else {
            let user = {
                Id: new Date().getTime().toString(),
                Firstname: firstname,
                Lastname: lastname,
                Email: email,
                Password: password,
                Color: color,
                Hobbie: hobbie,
                Gender: gender
            }
            list.push(user)

            setList([...list])

            console.log(list)
            
            setFirstname('');
            setLastname('');
            setEmail('');
            setPassword('');
            setColor('');
            setHobbie('');
            setGender('');
        }
    }

    const getHobbie = (e) => {
        //debugger;

        // let data = hobbie;
        //   data.push(e.target.value)
        //     setHobbie([...data])

        //setHobbie([...data, e.target.value]);

        // let data = hobbie;

        //var currentIndex = -1;

        // if(hobbie != undefined){

        // }

        // if (e.target.checked === true) {
        //     setHobbie([...hobbie, Number(e.target.value)]);
        //   } else {
        //     const selectedAcc = hobbie.filter(a => {
        //       if (a === Number(e.target.value)) return false;
        //       return true;
        //     });
        //     setHobbie([...selectedAcc]);
        // }





        const currentIndex = hobbie.indexOf(e.target.value);
        if (currentIndex === -1) {
            hobbie.push(e.target.value)
        } else {
            hobbie.splice(currentIndex, 1)
        }

        setHobbie(hobbie);
        console.log(hobbie)

        // var updatedlist = [...hobbie];
        //  const currentIndex = updatedlist.indexOf(e.target.value);

        //  if(currentIndex === -1){
        //      updatedlist.push(e.target.value)
        //  }else{
        //     updatedlist.splice(currentIndex, 1)
        //  }
        //  setHobbie(updatedlist)

    }


    const handleData = (e) => {
        e.preventDefault()
    }

    const Update = () => {
        setList(
            list.map((users) => {
                if (users.Id === iseditUser) {
                    return {
                        ...users,
                        Firstname: firstname,
                        Lastname: lastname,
                        Email: email,
                        Password: password,
                        Color: color,
                        Hobbie: hobbie,
                        Gender: gender
                    }
                }
                return users;
            })
        )
        setToggleSubmit(true);

        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
        setColor('');
        setHobbie('');
        setGender('');

        setIsEditUser(null);
    }

    const updateUser = (id) => {
        let newEditUser = list.find((users) => {
            return users.Id === id
        });
        console.log(newEditUser);

        setToggleSubmit(false)

        setFirstname(newEditUser.Firstname);
        setLastname(newEditUser.Lastname);
        setEmail(newEditUser.Email);
        setPassword(newEditUser.Password);
        setColor(newEditUser.Color);
        setGender(newEditUser.Gender);

        // console.log(newEditUser.Gender)

        setHobbie(newEditUser.Hobbie);

        // console.log(newEditUser.Hobbie)
        setIsEditUser(id)

    }



    const deleteUser = (index) => {
        console.log(index)
        const updateuser = list.filter((users) => {
            return index !== users.Id;
        })
        setList(updateuser)
    }



    const removeAll = () => {
        setList([]);
    }


    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list))
    }, [list]);
    return (
        <div>
            <h1>User List</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="First Name" name="fitstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Last Name" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Select aria-label="Default select example" onChange={(e) => {
                    setColor(e.target.value);
                }}>
                    <option>Favorite Color</option>
                    <option value="Red">Red</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Pink">Pink</option>
                    <option value="Black">Black</option>
                </Form.Select>
                <br />
                <Form.Check type="radio" inline
                    label="Male"
                    name="male"
                    value="male"
                    checked={gender === "male"}
                    onChange={(e) =>
                        setGender(e.target.value)}
                />
                <Form.Check type="radio" inline
                    label="Female"
                    name="female"
                    value="female"
                    checked={gender === "female"}
                    onChange={(e) =>
                        setGender(e.target.value)}
                />
                <br />
                <br />
                {/*                  
                 Hobbies
                <br />
                    <input type="checkbox" name="cricket" onChange={(e) => getHobbie(e)} value="cricket" />cricket
                    <input type="checkbox" name="travel" onChange={(e) => getHobbie(e)} value="travel" />travel
                    <input type="checkbox" name="movie" onChange={(e) => getHobbie(e)} value="movie" />movie
                    <input type="checkbox" name="sport" onChange={(e) => getHobbie(e)} value="sport" />sport
                    <input type="checkbox" name="singing" onChange={(e) => getHobbie(e)} value="singing" />singing
                    <input type="checkbox" name="dancing" onChange={(e) => getHobbie(e)} value="dancing" />dancing */}

                {/* <Form.Check inline
                    label="Cricket"
                     name="cricket"
                    value="cricket"
                    onChange={(e) =>
                        getHobbie(e)} />
                <Form.Check inline
                    label="Travel"
                     name="travel"
                    value="travel"
                    onChange={(e) =>
                        getHobbie(e)} /> */}
                <br />
                <br />
                {/* Hobbies
                <br />
                <input type="checkbox" name="cricket" onChange={(e) => getHobbie(e)} checked={hobbie.includes("cricket")} value="cricket" />cricket
                <input type="checkbox" name="travel" onChange={(e) => getHobbie(e)} checked={hobbie.includes("travel")} value="travel" />travel
                <input type="checkbox" name="movie" onChange={(e) => getHobbie(e)} checked={hobbie.includes("movie")} value="movie" />movie
                <input type="checkbox" name="sport" onChange={(e) => getHobbie(e)} checked={hobbie.includes("sport")} value="sport" />sport
                <input type="checkbox" name="singing" onChange={(e) => getHobbie(e)} checked={hobbie.includes("singing")} value="singing" />singing
                <input type="checkbox" name="dancing" onChange={(e) => getHobbie(e)} checked={hobbie.includes("dancing")} value="dancing" />dancing */}

                Hobbies
                <br />
                {
                    toggleSubmit ?
                        <>
                            <input type="checkbox" name="cricket" onChange={(e) => getHobbie(e)} value="cricket" />cricket
                            <input type="checkbox" name="travel" onChange={(e) => getHobbie(e)} value="travel" />travel
                            <input type="checkbox" name="movie" onChange={(e) => getHobbie(e)} value="movie" />movie
                            <input type="checkbox" name="sport" onChange={(e) => getHobbie(e)} value="sport" />sport
                            <input type="checkbox" name="singing" onChange={(e) => getHobbie(e)} value="singing" />singing
                            <input type="checkbox" name="dancing" onChange={(e) => getHobbie(e)} value="dancing" />dancing
                        </>
                        :
                        <>
                            {
                                hobbie.map((value1) => (
                                    <div key={value1.id}>
                                        {/* <input type="checkbox" name="cricket" onChange={(e) => getHobbie(e)} checked={hobbie.map(value1 => (value1 === "cricket" ? "checked" : "unchecked"))} value="cricket" />cricket
                                    <input type="checkbox" name="travel" onChange={(e) => getHobbie(e)} checked={hobbie.map(value1 => (value1 === "travel"))} value="travel" />travel
                                    <input type="checkbox" name="movie" onChange={(e) => getHobbie(e)} checked={hobbie.map(value1 => (value1 === "movie"))} value="movie" />movie
                                    <input type="checkbox" name="sport" onChange={(e) => getHobbie(e)} checked={hobbie.map(value1 => (value1 === "sport"))} value="sport" />sport
                                    <input type="checkbox" name="singing" onChange={(e) => getHobbie(e)} checked={hobbie.map(value1 => (value1 === "singing"))} value="singing" />singing
                                    <input type="checkbox" name="dancing" onChange={(e) => getHobbie(e)} checked={hobbie.map(value1 => (value1 === "dancing"))} value="dancing" />dancing */}

                                        {/* <input type="checkbox" name="cricket" onChange={(e) => getHobbie(e)} checked={value1 === "cricket" || value1 === "travel" || value1 === "movie" || value1 === "sport" || value1 === "singing" || value1 === "dancing"} value={value1}  />{value1} */}

                                        <input type="checkbox" name="cricket" onChange={(e) => getHobbie(e)} checked={value1 === "cricket"} value="cricket" />cricket
                                        <input type="checkbox" name="travel" onChange={(e) => getHobbie(e)} checked={value1 === "travel"} value="travel" />travel
                                        <input type="checkbox" name="movie" onChange={(e) => getHobbie(e)} checked={value1 === "movie"} value="movie" />movie
                                        <input type="checkbox" name="sport" onChange={(e) => getHobbie(e)} checked={value1 === "sport"} value="sport" />sport
                                        <input type="checkbox" name="singing" onChange={(e) => getHobbie(e)} checked={value1 === "singing"} value="singing" />singing
                                        <input type="checkbox" name="dancing" onChange={(e) => getHobbie(e)} checked={value1 === "dancing"} value="dancing" />dancing
                                    </div>
                                ))
                            }
                        </>

                }

                {
                    toggleSubmit ?
                        <Button variant="primary" onClick={Submit}>
                            Submit
                        </Button>
                        :
                        <Button variant="primary" onClick={Update}>
                            Update
                        </Button>
                }




            </Form>
            <h1>Show Users</h1>

            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                            <th scope="col">Color</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Hobbies</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((users, index) => {
                                return (
                                    <tr key={index}>
                                        <th>{index}</th>
                                        <td>{users.Firstname}</td>
                                        <td>{users.Lastname}</td>
                                        <td>{users.Email}</td>
                                        <td>{users.Password}</td>
                                        <td>{users.Color}</td>
                                        <td>{users.Gender}</td>
                                        <td>{users.Hobbie.join(",")}</td>
                                        <td>
                                            <button onClick={() => updateUser(users.Id)}>Update</button>
                                            {/* <Link to={`/updatearray/${users.Id}`}> <button>update</button></Link> */}
                                            <button onClick={() => deleteUser(users.Id)}>delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }  </tbody>
                </table>
            </div>

            <Button onClick={removeAll}>Remove All User</Button>

        </div>
    )
}

export default Formarraytask