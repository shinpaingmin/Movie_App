import React, { useRef } from "react";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { GiPopcorn } from "react-icons/gi";
import { useNavigate } from "react-router";
import { api, api_key } from "./api/api";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/action/movie";

const Header = () => {
  const navigate = useNavigate();
  const movie = useRef("");
  const dispatch = useDispatch();

  const searchMovie = async (movie) => {
    // console.log(movie.current.value);
    const movieTitle = movie.current.value;
    if (movieTitle !== "") {
      try {
        const res = await api.get(
          `search/movie?query=${movieTitle}&api_key=${api_key}`
        );
        // console.log(res.data.results);
        dispatch(fetchMovies(res.data.results));
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await api.get(`/movie/popular?api_key=${api_key}`);
        dispatch(fetchMovies(res.data.results));
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand
          onClick={() => navigate("/Home")}
          style={{ cursor: "pointer" }}
        >
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <GiPopcorn />
            Theatre
          </span>
        </Navbar.Brand>
        <form className="d-flex">
          <input
            type="text"
            placeholder="Search Movies ..."
            className="form-control mx-3 w-100"
            ref={movie}
          />
          <button
            type="button"
            className="rounded-circle btn btn-outline-info "
            onClick={() => searchMovie(movie)}
          >
            <i className="fa-solid fa-magnifying-glass "></i>
          </button>
        </form>
        <div className="flex md:order-2">
          <Dropdown
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://pbs.twimg.com/media/FO9x0QwWUAECZ0U?format=jpg&name=large"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Lego</span>
              <span className="block truncate text-sm font-medium">
                shinpaing@gmail.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        {/* <Navbar.Collapse>
        <Navbar.Link
          active
          onClick={()=>navigate('/Home')}
          style={{'cursor':'pointer'}}
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link onClick={()=>navigate('/Home')}
          style={{'cursor':'pointer'}}>
          About
        </Navbar.Link>
        <Navbar.Link onClick={()=>navigate('/Home')}
          style={{'cursor':'pointer'}}>
          Services
        </Navbar.Link>
        <Navbar.Link onClick={()=>navigate('/Home')}
          style={{'cursor':'pointer'}}>
          Pricing
        </Navbar.Link>
        <Navbar.Link onClick={()=>navigate('/Home')}
          style={{'cursor':'pointer'}}>
          Contact
        </Navbar.Link>
      </Navbar.Collapse> */}
      </Navbar>
    </div>
  );
};

export default Header;
