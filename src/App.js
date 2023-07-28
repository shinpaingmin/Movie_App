"use client";
import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/movie/detail/:id" element={<Detail/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
