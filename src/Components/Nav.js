import React from 'react';

import logo from "../Logo/Logo.png"
import '../Styles/Components/Nav.css';

function Nav() {
  return (
    <div className='Navsec'>
      <nav className="navbar navbar-expand-lg bg-transparent" style={{fontWeight: "700"}}>
        <div className="container-fluid">
          <span className="navbar-brand">
            <a href="/">
              <img id='navimg' alt='' src={logo}/>
            </a>
          </span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
              <ul className="navbar-nav" id='midnav'>
                <li className="nav-item">
                  <a style={{color: (window.location.pathname == "/newyamfest" ? "#a58e31" : window.location.pathname == "/contact" ? "" : "")}} href="/newyamfest" className="nav-link" aria-current="page">New Yam Festival</a>
                </li>
                <li className="nav-item">
                  <a style={{color: (window.location.pathname == "/lecture_series" ? "#a58e31" : window.location.pathname == "/contact" ? "" : "")}} href="/lecture_series" className="nav-link">Lecture Series</a>
                </li>
                <li className="nav-item">
                  <a style={{color: (window.location.pathname == "/lectures" ? "#a58e31" : window.location.pathname == "/contact" ? "" : "")}} href="/lectures" className="nav-link" rel="noreferrer">Lectures</a>
                </li>
                {/* <li className="nav-item">
                  <a href="/calculator" className="nav-link">Quotes</a>
                </li> */}
                <li className="nav-item">
                  <a style={{color: (window.location.pathname == "/blog" ? "white" : window.location.pathname == "/contact" ? "black" : "")}} id='blog' href="/" target='_blank' className="nav-link">Blog</a>
                </li>
                <li className="nav-item">
                  <a style={{color: (window.location.pathname == "/gallery" ? "#a58e31" : window.location.pathname == "/contact" ? "" : "")}} href="/gallery" className="nav-link" rel="noreferrer">Gallery</a>
                </li>
                <li className="nav-item">
                  <a style={{color: (window.location.pathname == "/contact" ? "#a58e31" : "")}} href="/contact" className="nav-link">Contact</a>
                </li>
              </ul>
              <ul className="navbar-nav" id='endnav'>
                  <li className="nav-item">
                    <a id='prt' href="/participate" className="nav-link">Participate</a>
                  </li>
                <button style={{color: "unset"}} className="nav-link active nav-item" aria-current="page">
                  <a href="/sponsor" style={{textDecoration: "none"}}>Sponsor</a>
                </button>
              </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav;