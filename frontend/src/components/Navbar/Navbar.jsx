import React from 'react'
import "./Navbar.css";
import menuicon from '../../assets/icon/menu_icon.png'
import darkmodeicon from '../../assets/icon/dark_mode.png'
import lightmodeicon from '../../assets/icon/light_mode.png'

import { Link } from 'react-router-dom'



export default function Navbar(props) {
  return (
    <nav className={`navbar   bg-${props.Mode}  text-${props.Mode==='light'?'black':'white'} `} >
      <div className="container-fluid">
        <a className={`navbar-title text-${props.Mode==='light'?'black':'white'}`} href="/">{props.title}</a>
        <div className={`collapse   `} id="navbarSupportedContent">
          <ul className="navbar-menu ">
            <li className="nav-item">
              <Link className={`nav-link  text-${props.Mode==='light'?'dark':'light'}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <a className={`nav-link text-${props.Mode==='light'?'dark':'light'}`} href="/">Link</a>
            </li>
            <li className="category-dropdown">
              <li className={`nav-link  text-${props.Mode==='light'?'dark':'light'}`}  role="button" >
                Category
              </li>
              <ul className={`dropdown-menu bg-${props.Mode}`} >
                <li><Link className={`dropdown-item bg-${props.Mode} text-${props.Mode==='light'?'black':'white'}`} to="/general">General</Link></li>
                <li><Link className={`dropdown-item bg-${props.Mode} text-${props.Mode==='light'?'black':'white'}`} to="/entertainment">Entertainment</Link></li>
                <li><Link className={`dropdown-item bg-${props.Mode} text-${props.Mode==='light'?'black':'white'}`} to="/health">Health</Link></li>
                <li><Link className={`dropdown-item bg-${props.Mode} text-${props.Mode==='light'?'black':'white'}`} to="/science">Science</Link></li>
                <li><Link className={`dropdown-item bg-${props.Mode} text-${props.Mode==='light'?'black':'white'}`} to="/sports">Sports</Link></li>
                <li><Link className={`dropdown-item bg-${props.Mode} text-${props.Mode==='light'?'black':'white'}`} to="/technology">Technology</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className={`nav-link  text-${props.Mode==='light'?'dark':'light'}`}   to="/about">About Us</Link>
            </li>
          </ul> 
        </div>
        <form className="form-for-search" role="search">
          <input className="form-for-search-input" type="search"  placeholder="Search" aria-label="Search"/>
          <button className="form-for-search-button" type="search">Search</button>
        </form>
        <button type='submit'>Sign-in</button>
        <div className={`form-for-darkmode-lightmode text-${props.Mode==='light'?'dark':'light'}`} >
          <img className={`mode-${props.Mode==='light'?'valid':'invalid'}`} onClick={props.toggleMode} src={darkmodeicon} alt="" />
          <img className={`mode-${props.Mode!='light'?'valid':'invalid'}`} onClick={props.toggleMode} src={lightmodeicon} alt="" />
        </div>
        <button className={`navbar-toggler bg-${props.Mode==='light'?'':'white'}`} type="button" >
          <img src={menuicon} alt="" />
        </button>
      </div>
      
    </nav>
  )
}
