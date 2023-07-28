import React from "react";
import { useSelector } from "react-redux";
import MovieCards from "./MovieCards";
import Spinner from './Spinner';

const Movies = () => {
  const movies = useSelector((state) => state.movies.movies);

  // console.log(movies);
  return (
    <div className="container mx-auto px-4 mt-6">
      {movies.length > 0 ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
          {movies.map((movie) => (
            <MovieCards key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="d-flex justify-content-center vh-100 align-items-center">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Movies;
