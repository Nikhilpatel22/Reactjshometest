import React, { useEffect, useState } from 'react';
import { Button, Container, Nav, NavDropdown, Navbar, Form, FormControl } from 'react-bootstrap';
import { Link, } from 'react-router-dom'

const MovieNavbar = () => {

    const [Moviename,setMoviename] = useState("")
    const [page,setPage] = useState(1)

    const search_url = `https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${Moviename}&page=${page}`


    useEffect(()=>{
        SearchMovie()
    },[])

    const SearchMovie = (e) =>{
        // e.preventDefault()
        fetch(search_url)
        .then((res)=>res.json())
        .then(data=>{
            console.log(data)
        })
    }

    const handlechange = (e) =>{
        setMoviename(e.target.value)
    }


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">MOVIEDB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Popular</Nav.Link>
                            <Nav.Link as={Link} to="/about">Up Coming</Nav.Link>
                            <Nav.Link as={Link} to="/contactus">Top Rated</Nav.Link>
                        </Nav>

                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                value={Moviename}
                                onChange={(e)=>handlechange(e)}
                            />
                            <Button variant="outline-success" onClick={SearchMovie}>Search</Button>
                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default MovieNavbar