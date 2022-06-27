import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import Main from "../Main"
import Main2 from "../Main2"
import Header from "./Header"


function Completed(props) {
  return (
    <div>
      <BrowserRouter>
      <Link to="/completed">Completed Tasks</Link>
        <Routes>
        <Route path="/completed" element={<Main example={props}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

      
export default Completed
