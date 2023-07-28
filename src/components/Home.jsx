import React, { useEffect } from "react";
import Movies from "./Movies";
import { api, api_key } from "./api/api";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/action/movie";
// import Spinner from "./Spinner.jsx";

const Home = () => {
  //declaration for dispatching data to state
  const dispatch = useDispatch();

  //spinner animation  const [animation, setAnimation] = useState(true);


  //api call
  const getMovies = async () => {
    try {
      const res = await api.get(`/movie/popular?api_key=${api_key}`);
      dispatch(fetchMovies(res.data.results));  //dispatch here
    } catch (error) {
      console.log(error);
    }
    
    // console.log(res.data.results);
   
  }
  //maintain
  useEffect(()=>{
    getMovies();  //cannot be the same name with fetchMovies from action
  },[]);
  
  return (
    <div>
      <Movies /> 
    </div>
  );
};

export default Home;
