import React from 'react';
import {Helmet} from "react-helmet";

import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

import "../Styles/Pages/404error.css";

function error() {
  return (
    <div id='errorpage'>
        <Helmet>
          <title>Page Error - Ahiajoku</title>
        </Helmet>
      <Nav/>
      <div id='errortxtt'>
        Sorry the page you're trying to visit does not exist, please visit the <a href='/'>Homepage</a> or check site-links on the footer.
      </div>
      <Footer/>
    </div>
  )
}

export default error;