import React, { useInsertionEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "./styles/main.css"


function Main(props) {
    return (
        <div>
            <h2>Completed tasks listed here!</h2>
            {console.log('this is props', props)}
            <p>{props.example.tasks.map((el) => el.name + ", ")}</p>
          </div>
    )
}

export default Main
