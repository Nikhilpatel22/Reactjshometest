import React, { useEffect, useState } from 'react'
import DisplayMovie from './DisplayMovie'
import { Link, } from 'react-router-dom'
import { Button, Container, Nav, NavDropdown, Navbar, Form, FormControl, Pagination } from 'react-bootstrap';




const url2 = "https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=2"
const img_url = "https://image.tmdb.org/t/p/w500"


const Moviehome = () => {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState("")
  const [Moviename, setMoviename] = useState("")
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&page=${page}`
  const search_url = `https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${Moviename}&page=${page}`


  useEffect(() => {
    GetAllMovie(page)
    // SearchMovie(page)
  }, [page])

  const GetAllMovie = (page) => {
    fetch(url)
      .then((res) => res.json())
      .then(data => {
        console.log("movie data", data);
        setMovie(data.results)
        setPages(data.total_pages)
      })
  }

  // const SearchMovie = async (e,page) => {
  //   e.preventDefault()
  //   try{
  //     const res = await fetch(search_url)
  //     const data = await res.json()
  //     console.log(data)
  //     setMovie(data.results)
  //     setPages(data.total_pages)
  //   }
  //   catch(e){
  //     console.log(e)
  //   }
   
  // }

  const handlechange = (e) => {
    setMoviename(e.target.value)
  }


  return (

    <div className='container'>
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

            {/* <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={Moviename}
                onChange={(e) => handlechange(e)}
              />
              <Button variant="outline-success" onClick={SearchMovie}>Search</Button>
            </Form> */}

          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='grid'>
        {
          movie.map((mov) => <DisplayMovie key={mov.id} {...mov} />)
          // movie.map((mov) =>
          // (
          //   <div key={mov.id}>
          //     <h1>{mov.title}</h1>
          //     <img src={img_url + mov.poster_path} />
          //     <p>{mov.overview}</p>
          //   </div>
          // ))
        }
      </div>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev onClick={() => { if (page > 1) { setPage(page - 1) } }} />
        <Pagination.Item active>{page}</Pagination.Item>
        {/* <Pagination.Ellipsis /> */}

        <Pagination.Item>{pages}</Pagination.Item>

        {/* <Pagination.Ellipsis /> */}
        <Pagination.Next onClick={() => { if (page < 20) { setPage(page + 1) } }} />
        <Pagination.Last />
      </Pagination>
    </div>
  )
}

export default Moviehome