import React from "react";
import "./Navbar.css";
import menuicon from "../../assets/icon/menu_icon.png";
import menuCloseIcon from "../../assets/icon/menu_close.png";
import darkmodeicon from "../../assets/icon/dark_mode.png";
import lightmodeicon from "../../assets/icon/light_mode.png";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect,useRef } from "react";

export default function Navbar(props) {
  const navRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  function HamBurgerMode() {
    setIsMenuOpen(!isMenuOpen);

    let can = document.querySelector(".container-fluid");
    let ham = document.querySelector(".navbar1-toggler");
    let menu = document.querySelector(".navbar1-menu");
    let form = document.querySelector(".form-for-search");
    let disflex = document.querySelector(".displayflex");
    let sign = document.querySelector(".sign-in-button");
    // let mode=document.querySelector('.form-for-darkmode-lightmode');
    let title = document.querySelector(".navbar1-title");
    let body = document.querySelector("body");
    ham.classList.toggle("active");
    !can.classList.toggle("active");
    menu.classList.toggle("active");
    !disflex.classList.toggle("active");
    form.classList.toggle("active");
    sign.classList.toggle("active");
    // mode.classList.toggle('active');
    title.classList.toggle("active");
    body.classList.toggle("active");


  }
  useEffect(() => {
    if (navRef.current) {
      navRef.current.addEventListener("wheel", (e) => {
        e.preventDefault();
        navRef.current.scrollLeft += e.deltaY;
      });
    }
  }, []); // Runs once after the component mounts
  
  return (
    <>
      <nav
        className={`navbar1   bg-${props.Mode}  text-${
          props.Mode === "light" ? "black" : "white"
        } `}
      >
        <div className="container-fluid">
          <a
            className={`navbar1-title text-${
              props.Mode === "light" ? "black" : "white"
            }`}
            href="/"
          >
            {props.title}
          </a>
          <div className={`collapse   `} id="navbarSupportedContent">
            <ul className="navbar1-menu ">
              <li className="nav-item">
                <Link
                  className={`nav-link  text-${
                    props.Mode === "light" ? "dark" : "light"
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link text-${
                    props.Mode === "light" ? "dark" : "light"
                  }`}
                  href="/"
                >
                  ToDo 1
                </a>
              </li>
              <li className="category-dropdown">
                <a
                  className={`nav-link  text-${
                    props.Mode === "light" ? "dark" : "light"
                  }`}
                  role="button"
                >
                  ToDo 2
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link  text-${
                    props.Mode === "light" ? "dark" : "light"
                  }`}
                  to="/about"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="displayflex search-signin-darkmode">
            <form className="form-for-search" role="search">
              <input
                className="form-for-search-input"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* <button className="form-for-search-button" type="search">Search</button> */}
            </form>

            <button className="sign-in-button" type="submit">
              Sign-in
            </button>
            <div
              className={`form-for-darkmode-lightmode  text-${
                props.Mode === "light" ? "dark" : "light"
              }`}
            >
              <img
                className={`mode-${
                  props.Mode === "light" ? "valid" : "invalid"
                }`}
                onClick={props.toggleMode}
                src={darkmodeicon}
                alt=""
              />
              <img
                className={`mode-${
                  props.Mode === "dark" ? "valid" : "invalid"
                }`}
                onClick={props.toggleMode}
                src={lightmodeicon}
                alt=""
              />
            </div>
          </div>
          <button
            onClick={HamBurgerMode}
            className={`navbar1-toggler bg-${
              props.Mode === "light" ? "" : "white"
            }`}
            type="button"
          >
            <img
              src={isMenuOpen ? menuCloseIcon : menuicon}
              alt="Menu Toggle"
            />
          </button>
        </div>
      </nav>
      <nav className={`navbar2 bg-${props.Mode} `}>
        <div className={`nav-container2 bg-${props.Mode} `}>
        
          <div className="nav-item2">
          <Link
                      className={`dropdown-item  text-${
                        props.Mode !== "light" ? "black" : "white"
                      }`}
                      to="/general"
                    >
                      General ▼
                    </Link>
            
            <div className="dropdown2">
              <a href="#">Smart TVs</a>
              <a href="#">Washing Machines</a>
            </div>
          </div>
          <div className="nav-item2">
          <Link
                      className={`dropdown-item  text-${
                        props.Mode !== "light" ? "black" : "white"
                      }`}
                      to="/business"
                    >
                      Buisness ▼
                    </Link>
            
            <div className="dropdown2">
              <a href="#">Smart TVs</a>
              <a href="#">Washing Machines</a>
            </div>
          </div>
          <div className="nav-item2">
          <Link
                      className={`dropdown-item bg-${props.Mode} text-${
                        props.Mode !== "light" ? "black" : "white"
                      }`}
                      to="/entertainment"
                    >
                      Entertainment ▼
                    </Link>
            <div className="dropdown2">
              <a href="#">Shirts</a>
              <a href="#">Shoes</a>
            </div>
          </div>
          <div className="nav-item2">
          <Link
                      className={`dropdown-item bg-${props.Mode} text-${
                        props.Mode !== "light" ? "black" : "white"
                      }`}
                      to="/health"
                    >
                      Health ▼
                    </Link>
            <div className="dropdown2">
              <a href="#">Dresses</a>
              <a href="#">Jewelry</a>
            </div>
          </div>
          <div className="nav-item2">
          <Link
                      className={`dropdown-item bg-${props.Mode} text-${
                        props.Mode !== "light" ? "black" : "white"
                      }`}
                      to="/science"
                    >
                      Science ▼
                    </Link>
            <div className="dropdown2">
              <a href="#">Toys</a>
              <a href="#">Clothes</a>
            </div>
          </div>
          <div className="nav-item2">
          <Link
                      className={`dropdown-item bg-${props.Mode} text-${
                        props.Mode !== "light" ? "black" : "white"
                      }`}
                      to="/sports"
                    >
                      Sports ▼
                    </Link>
            <div className="dropdown2">
              <a href="#">Sofas</a>
              <a href="#">Beds</a>
            </div>
          </div>
          <div className="nav-item2">
          <Link
                      className={`dropdown-item bg-${props.Mode} text-${
                        props.Mode !== "light" ? "black" : "white"
                      }`}
                      to="/technology"
                    >
                      Technology ▼
                    </Link>
            <div className="dropdown2">
              <a href="#">Cricket</a>
              <a href="#">Novels</a>
            </div>
          </div>
          <div className="nav-item2">Flights</div>
          <div className="nav-item2">Offer Zone</div>
        </div>
      </nav>
      {/* <nav className={`navbar bg-${props.Mode} `}>
        <div className={`nav-container2 bg-${props.Mode} `}>
        
          <div className="nav-item2">
          </div>
          <div className="nav-item2">Flights</div>
          <div className="nav-item2">Offer Zone</div>
        </div>
      </nav> */}
    </>
  );
}
