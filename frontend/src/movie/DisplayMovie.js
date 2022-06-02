import React from 'react'
import { Link, useParams } from 'react-router-dom'

const DisplayMovie = ({ title, poster_path, id,overview, vote_average }) => {
    const img_url = "https://image.tmdb.org/t/p/w500"
   
    return (
        <Link to={`/moviedetails/${id}`} style={{textDecoration:"none"}}>
        <div className='card text-center mb-3 bg-secendary border-0'>
            <div className='card-body'>
                {/* <h1>{title}</h1> */}
                <img className='card-img-top' src={img_url + poster_path} />
                <div className='card-body'>
                    <h5>{title}</h5>
                    <h5>Rating : {vote_average}</h5>
                </div>
                {/* <p>{overview}</p> */}
            </div>

        </div>
        </Link>
    )
}

export default DisplayMovie