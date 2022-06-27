import React from "react";
import { Outlet, Link } from "react-router-dom";

const Header = (props) => {
    const onClick = (e) => {
        console.log('clicked ', e.target)
    }

    return (
        <header className="headerTitle">
            <p id="firstp" style={{ color: 'white' }}>
                Hello, User!
            </p>
            <h1 id='h1'>CODESMITH CHECKLIST</h1>
        </header>
    )
}

export default Header
