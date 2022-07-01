import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import Main from "../Main"
import Main2 from "../Main2"
import Header from "./Header"
import App from '../App'


function Completed(props) {
  return (
    <div>
      {/* <BrowserRouter> */}
      <Link to="/">back to app</Link>
      <Main2 />

      {/* <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  )
}


export default Completed
