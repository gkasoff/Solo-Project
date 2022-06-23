import React from "react";
import Button from "./Button.js"

const Header = (props) => {
    const onClick = (e) => {
        console.log('clicked ', e.target)
    }

    return (
        <header>
            <h1>{props.title}</h1>
            <h2 style={{ color: 'blue' }}>In line Styling</h2>
        </header>
    )
}

export default Header
