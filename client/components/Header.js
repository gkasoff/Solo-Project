import React from "react";
import Button from "./Button.js"

const Header = (props) => {
    const onClick = (e) => {
        console.log('clicked ', e.target)
    }

    return (
        <header class="headerTitle">
            <p id="firstp" style={{ color: 'white' }}>{props.title}</p>
            <h1 id='h1'>CODESMITH CHECKLIST</h1>
        </header>
    )
}

export default Header
