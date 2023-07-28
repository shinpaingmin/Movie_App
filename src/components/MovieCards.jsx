import React from 'react';
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const MovieCards = ({movie}) => {
  return (
    <div className="max-w-sm">
        <Link to={`/movie/detail/${movie.id}`}>
            <Card
              imgAlt={movie.title}
              imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              style={{'height':'862px'}}
              className='mb-4'
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>{movie.title}</p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                
                  {movie.overview.slice(0,180)+" ..."} 
               
              </p>

              <div>
                <button className='bg-black hover:bg-slate-900 text-white font-bold py-2 px-3 rounded mr-3'><i className="fa-solid fa-star text-warning"></i> {movie.vote_average}</button>
                <button className='bg-black hover:bg-slate-900 text-white font-bold py-2 px-3 rounded'><i className="fa-solid fa-calendar-days text-primary mr-1"></i> {movie.release_date}</button>
              </div>
            </Card>
          </Link>
    </div>
  )
}

export default MovieCards