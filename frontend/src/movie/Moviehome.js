import React, { useEffect, useState } from 'react'
import DisplayMovie from './DisplayMovie'
import { Link, } from 'react-router-dom'
import Post from './Post';
import { Button, Container, Nav, NavDropdown, Navbar, Form, FormControl, Pagination } from 'react-bootstrap';

const Moviehome = () => {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState("")
  const [Moviename, setMoviename] = useState("thor")



  const [currentPage, setCurrentPage] = useState(1);

  const api_key = "c45a857c193f6302f2b5061c3b85e743";

  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=${currentPage}`
  const Up_coming_movie = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=${currentPage}`
  const search_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${Moviename}&page=${currentPage}`
  const Top_rated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=${currentPage}`

  const PreviousButton = () => {
    setCurrentPage(currentPage - 1)
  }

  const NextButton = () => {
    setCurrentPage(currentPage + 1)
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }



  useEffect(() => {
    GetAllMovie(currentPage)
    TopRated(currentPage)
    UpComingMovie(currentPage)
    console.log(Moviename)
  }, [currentPage])

  const GetAllMovie = (currentPage,Moviename) => {
    fetch(url)
      .then((res) => res.json())
      .then(data => {
        console.log("movie data", data);
        setMovie(data.results)
        setPage(data.total_pages)
      })
  }




  const SearchMovie = async (e, currentPage,Moviename) => {
   
    e.preventDefault();
    try {
      const res = await fetch(search_url)
      const data = await res.json()
      console.log("hello",currentPage,Moviename)
      console.log(data)
      setMovie(data.results)
      setPage(data.total_pages)
    }
    catch (e) {
      console.log(e)
    }
  }


  const TopRated = async (e, currentPage) => {
    e.preventDefault();
    try {
      const res = await fetch(Top_rated)
      const data = await res.json()
      console.log(data)
      setMovie(data.results)
      setPage(data.total_pages)
    }
    catch (e) {
      console.log(e)
    }
  }

  const UpComingMovie = async (e, currentPage) => {
    e.preventDefault();
    try {
      const res = await fetch(Up_coming_movie)
      const data = await res.json()
      console.log(data)
      setMovie(data.results)
      setPage(data.total_pages)
    }
    catch (e) {
      console.log(e)
    }
  }

  const handlechange = (e) => {
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
              <Nav.Link onClick={GetAllMovie}>Popular</Nav.Link>
              <Nav.Link onClick={UpComingMovie}>Up Coming</Nav.Link>
              <Nav.Link onClick={TopRated}>Top Rated</Nav.Link>
            </Nav>

            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={Moviename}
                onChange={(e) => handlechange(e)}
              />
              <Button variant="outline-success" onClick={(e) => SearchMovie(e)}>Search</Button>
            </Form>

          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='container'>
        <Post data={movie} paginate={paginate} setCurrentPage={setCurrentPage} setMovie={setMovie} setPage={setPage} GetAllMovie={GetAllMovie} currentPage={currentPage} page={page} PreviousButton={PreviousButton} NextButton={NextButton} />
      </div>
    </div>
  )
}

export default Moviehome