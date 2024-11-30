import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import './styles/style.scss';


const Header = () => {

  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');

    const handleClick = (event) => {
      navLinks.forEach(l => l.classList.remove("active"));
      event.currentTarget.classList.add("active");
    }

    navLinks.forEach(link =>
      link.addEventListener("click", handleClick));

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleClick)
      });
    }
  }, []);
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">

            <FontAwesomeIcon
              icon={faCarSide}
              size="3x"
              className="fa-car-side" />
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-lg-flex justify-content-between" id="navbarToggleExternalContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" activeClassName="active">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink>
                </li>

              </ul>
              <div className='login-div'>
                <span>
                  <a href='#' className='login-btn text-decoration-none'>Log in</a>
                </span>
                <span>
                  <a href='#' className='btn custom-color-signup rounded-0 custom-offset-shadow '>Sign Up</a>
                </span>
              </div>
            </div>
          </div>

        </nav>
      </header>

    </>
  );
};

export default Header;