import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/mindhub_logo.png'
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className="nav_logo">
           <img src={Logo} alt="Nav logo"/>
        </Link>
        <ul className="nav_menu">
          <li>
            <Link to="/profile">John Doe</Link>
          </li>
          <li>
            <Link to="/create">Create Post</Link>
          </li>
          <li>
            <Link to="/authors">Authors</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
        <button className="nav_toggle-btn">
          {/* <FaBars /> */}
          <AiOutlineClose />
        </button>
      </div>
    </nav>
  )
}

export default Header
