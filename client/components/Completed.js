import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import Main from "../Main"
import Main2 from "../Main2"
import Header from "./Header"
import App from '../App'
import { StyledLink, completedTasks } from '../App';

function Completed(props) {
  return (
    <div>
      {/* <BrowserRouter> */}
      <h2>Completed tasks listed here!</h2>
      {console.log('Completed completed index ', props)}

      {/* {console.log('this is props', props)} */}
      <p>{props.test.map((el) => el.name + ", ")}</p>

      <StyledLink to="/">back to app</StyledLink>
      {/* <Main2 /> */}
      {/* <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  )
}


export default Completed
