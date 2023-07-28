import React, { useEffect } from "react";
import { useParams } from "react-router";
import { api, api_key } from "./api/api";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedMovie, selectedMovie } from "../redux/action/movie";
import Spinner from "./Spinner";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const getMovieDetail = async () => {
    try {
      const res = await api.get(`/movie/${id}?api_key=${api_key}`);
      // console.log(res);
      dispatch(selectedMovie(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if(id) {
      getMovieDetail();
    }
    return ()=>dispatch(removeSelectedMovie({}));   //call back 
  }, []);

  const movie = useSelector((state) => state.movies.movie);
  // console.log(movie);

  if (JSON.stringify(movie) !== "{}") {
    return (
      <div className="container w-50 mt-3">
        <Link to={'/Home'} className="btn btn-dark">
          <i className="fa-solid fa-arrow-left"></i> Back
        </Link>
        <Card
          imgAlt={movie.title}
          imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          className="mb-4 mt-3"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>{movie.title}</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {movie.overview}
          </p>

          <div>
            <button className="bg-black hover:bg-slate-900 text-white font-bold py-2 px-3 rounded mr-3">
              <i className="fa-solid fa-star text-warning"></i>{" "}
              {movie.vote_average}
            </button>
            <button className="bg-black hover:bg-slate-900 text-white font-bold py-2 px-3 rounded mr-3">
              <i className="fa-solid fa-calendar-days text-primary mr-1"></i>{" "}
              {movie.release_date}
            </button>
            <button className="bg-black hover:bg-slate-900 text-white font-bold py-2 px-3 rounded mr-3">
              <i className="fa-solid fa-users text-danger"></i>{" "}
              {movie.vote_count}
            </button>
            <button className="bg-black hover:bg-slate-900 text-white font-bold py-2 px-3 rounded mr-3">
              <i className="fa-solid fa-globe text-success"></i>{" "}
              {movie.production_countries[0].name}
            </button>{" "}
          </div>
        </Card>
      </div>
    );
  } else {
    return (
      <div className="d-flex justify-content-center vh-100 align-items-center">
        <Spinner />
      </div>
    );
  }
};

export default Detail;
