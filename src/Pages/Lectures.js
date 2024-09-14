import React from 'react';
import {Helmet} from "react-helmet";

import Nav from '../Components/Nav';
import LectureData from '../Components/LectureData';
import Footer from '../Components/Footer';

import "../Styles/Pages/Lectures.css";

function Lectures() {
  return (
    <div id='lectures'>
        <Helmet>
          <title>Lectures - Ahiajoku</title>
        </Helmet>
        <div id='homehd'>
          <Nav/>
          <div id='header' style={{textAlign: "center", color: "white", display: "grid", alignContent: "center"}}>
            <span style={{fontFamily: "Shojumaru"}}>Ahiajoku Lectures</span>
            <span id='lecm'>Expand your knowledge and deepen your appreciation of our heritage through a series of enlightening lectures. Our speakers, including scholars, local leaders, and cultural practitioners, will share their expertise on various topics related to the New Yams Festival. Discover the rich history, significance, and traditions that make this celebration so special.</span>
          </div>
        </div>
        <LectureData/>
    <Footer/>
    </div>
  )
}

export default Lectures;