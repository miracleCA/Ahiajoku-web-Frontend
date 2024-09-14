import React from 'react';

import Logo from  "../Logo/Logo.png"

import "../Styles/Components/Footer.css";

function Footer() {
  return (
    <div className='footer' style={{backgroundColor: "#151212", padding: "3% 7%", color: "white", display: "grid"}}>
        <div id='foot1'>
          <span id='f1'>
            <a href='/'>
              <img id='navimg' alt='' src={Logo}/>
            </a>
          </span>
          <span id='f2'>
              <a href='/'>Privacy Policy</a>
              <a href='/'>Terms & Conditions</a>
              <a href='/sponsor'>Sponsor</a>
          </span>
          <span id='f3' style={{display: "flex"}}>
              <i class="fa-brands fa-facebook">
                <a href=''></a>
              </i>
              <i class="fa-brands fa-twitter">
                <a></a>
              </i>
              <i class="fa-brands fa-instagram">
                <a target='_blank' href='https://www.instagram.com/ahiajoku'></a>
              </i>
              <i class="fa-brands fa-linkedin">
                <a></a>
              </i>
              <i class="fa-brands fa-youtube">
                <a></a>
              </i>
          </span>
        </div>
        <div id='foot2' style={{textAlign: "center"}}>© {new Date().getFullYear()} Ahiajoku, {/* , developed by <a style={{color: "#a58e31"}} target='_blank' href='https://www.linkedin.com/in/miracle-anyiam-879a2b177'>Miracle</a>.<br id='brkk'/>  */}All rights reserved.</div>
    </div>
  )
}

export default Footer