import React from 'react'
import "./Navbar.css";
import menuicon from '../../assets/icon/menu_icon.png'
import menuCloseIcon from '../../assets/icon/menu_close.png'
import darkmodeicon from '../../assets/icon/dark_mode.png'
import lightmodeicon from '../../assets/icon/light_mode.png'

import { Link } from 'react-router-dom'
import { useState } from 'react'




export default function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  function HamBurgerMode(){
    setIsMenuOpen(!isMenuOpen);

    let can=document.querySelector('.container-fluid');
    let ham=document.querySelector('.navbar-toggler');
    let menu=document.querySelector('.navbar-menu');
    let form=document.querySelector('.form-for-search');
    let disflex = document.querySelector('.displayflex');
    let sign=document.querySelector('.sign-in-button');
    let mode=document.querySelector('.mode-valid');
    let title=document.querySelector('.navbar-title');
    let body=document.querySelector('body');
    ham.classList.toggle('active');
    !can.classList.toggle('active');
    menu.classList.toggle('active');
    !disflex.classList.toggle('active');
    form.classList.toggle('active');
    sign.classList.toggle('active');
    mode.classList.toggle('active');
    title.classList.toggle('active');
    body.classList.toggle('active');

    }
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
        <div className='displayflex search-signin-darkmode'>
        <form className="form-for-search" role="search">
          <input className="form-for-search-input" type="search"  placeholder="Search" aria-label="Search"/>
          {/* <button className="form-for-search-button" type="search">Search</button> */}
        </form>
        <div className='displayflex'>
        <button className='sign-in-button' type='submit'>Sign-in</button>
        <div className={`form-for-darkmode-lightmode text-${props.Mode==='light'?'dark':'light'}`} >
          <img className={`mode-${props.Mode==='light'?'valid':'invalid'}`} onClick={props.toggleMode} src={darkmodeicon} alt="" />
          <img className={`mode-${props.Mode!='light'?'valid':'invalid'}`} onClick={props.toggleMode} src={lightmodeicon} alt="" />
        </div>
        </div>
        </div>
        <button onClick={HamBurgerMode} className={`navbar-toggler bg-${props.Mode==='light'?'':'white'}`} type="button" >
        <img src={isMenuOpen ? menuCloseIcon : menuicon} alt="Menu Toggle" />
        </button>
        
      </div>
      
    </nav>
  )
}
