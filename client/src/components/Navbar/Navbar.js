import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => 
    <ul className="nav nav-tabs">
        <li className={window.location.pathname === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
        </li>
        <li className={window.location.pathname === "/submit" ? "active" : ""}>
            <Link to="/submit">Submit</Link>
        </li>
    </ul>;


export default Navbar;