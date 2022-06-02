import React from "react"
import { useState, useEffect } from "react"
import { Form, Button, Dropdown, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Multiselect from 'multiselect-react-dropdown';
import ExamplePost from "./ExamplePost";


// var list = [];
var select;
const getLocalStoragelist = () => {
    let locallist = localStorage.getItem("list");
    console.log(locallist);

    if (locallist) {
        return JSON.parse(localStorage.getItem('list'));
    } else {
        return [];
    }
}

const Example4 = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [color, setColor] = useState("");
    const [hobbie, setHobbie] = useState("");
    const [gender, setGender] = useState("");
    const [iseditUser, setIsEditUser] = useState(null);
    const [list, setList] = useState(getLocalStoragelist());
    const [toggleSubmit, setToggleSubmit] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [postperPage, setPostPerPage] = useState(3);
    const [search, setSearch] = useState("");


    const indexOfLastPage = currentPage * postperPage;
    console.log("indexOfLastPage", indexOfLastPage)
    console.log("currentpage",currentPage)
    const indexOfFirstPage = indexOfLastPage - postperPage;
    console.log("indexOfFirstPage", indexOfFirstPage)

    const searchdata1 = list.filter((val) => Object.keys(val).some(k =>
        String(val[k]).toLowerCase().includes(search.toLowerCase())))

    const currentPost = searchdata1.slice(indexOfFirstPage, indexOfLastPage);
    console.log("currentPost", currentPost)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const totalPosts = searchdata1.length;

    console.log("totalpagepost", totalPosts)

    const PreviousButton = () => {
        setCurrentPage(currentPage - 1)
    }

    const NextButton = () => {
        setCurrentPage(currentPage + 1)
    }


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
                Gender: gender,
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

        select = newEditUser.Hobbie
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
                Hobbies
                <br />
                <br />
                <Multiselect
                    isObject={false}
                    onRemove={(event) => {
                        console.log(event);
                    }}
                    onSelect={(event) => {
                        console.log(event)
                        setHobbie(event);
                    }}
                    options={["Cricket", "Travel"]}
                    //selectedValues={hobbie.filter(r => r === "cricket" || r === "Travel")}
                    // selectedValues={hobbie.filter(r => r === "cricket" || r === "Travel")}
                    //selectedValues={hobbie.includes('Travel')}
                    selectedValues={select}
                    //checked={hobbie.includes("Cricket")}
                    showCheckbox
                />
                <br />
                <br />
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
                <input
                    type="text"
                    placeholder="Search"
                    onChange={(event) => {
                        setSearch(event.target.value);
                    }}
                />
                <ExamplePost data={currentPost} postperPage={postperPage} totalPosts={totalPosts} paginate={paginate} currentPage={currentPage} PreviousButton={PreviousButton} NextButton={NextButton} />
            </div>

            <Button onClick={removeAll}>Remove All User</Button>

        </div>
    )
}

export default Example4