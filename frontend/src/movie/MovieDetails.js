import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const MovieDetails = () => {
    const { movieId } = useParams()

    const Api_key = "c45a857c193f6302f2b5061c3b85e743"
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Api_key}`
    const url1 = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${Api_key}&language=en-US`
    const img_url = "https://image.tmdb.org/t/p/w500"

    const [movie, setMovie] = useState("")
    const [cast, setCast] = useState([])

    useEffect(() => {
        GetAllMovie()
        Getcast()
    }, [])

    const GetAllMovie = (movieId) => {
        fetch(url)
            .then((res) => res.json())
            .then(data => {
                console.log("movie Details", data);
                setMovie(data)
            })
    }
    const Getcast = (movieId) => {
        fetch(url1)
            .then((res) => res.json())
            .then(data => {
                console.log("cast", data.cast);
                setCast(data.cast)
            })
    }

    return (
        <div className='container'>

            <div className='movie-detail'>
                <div className='col-6 p-3'>
                    <div className='movie-detail-left font-color'>
                        <div>
                            <img src={img_url + movie.poster_path} />
                        </div>
                        <div className='p-3'>
                            <h3>{movie.original_title}</h3>
                            <h5>Rating : {movie.vote_average}</h5>
                            <span>{movie.runtime} min </span>
                            <div>
                                <span>Release Date : {movie.release_date}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className='font-color'>Overview</h4>
                        <span className='font-color'>{movie.overview}</span>
                    </div>
                </div>
                <div className='bg-colors'>
                    <img className="img-fluid" src={img_url + movie.backdrop_path} />
                </div>
            </div>
            <h1>cast</h1>
            <div className='grid-1'>
                {
                    cast.map((mn) => (
                        <div className='card text-center mb-3 bg-secendary border-0'>
                            <div className='card-body'>
                                <img className='card-img-top' src={img_url + mn.profile_path} />
                                <p style={{ textAlign: "left" }}>{mn.name}</p>
                                <p style={{ textAlign: "left" }}>character : {mn.character}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default MovieDetails