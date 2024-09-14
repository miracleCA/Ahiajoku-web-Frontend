import React from 'react';
import {Helmet} from "react-helmet";

import Nav from '../Components/Nav';
import Speaker from '../Components/Speaker';
import Join from '../Components/Join';
import Footer from '../Components/Footer';

import ppl from "../Images/partpple.png";

import "../Styles/Pages/LectureSeries.css";

function LectureSeries() {
  return (
    <div id='lectures'>
        <Helmet>
          <title>Lecture series - Ahiajoku</title>
        </Helmet>
        <div id='lechd'>
          <Nav/>
          <div id='header' style={{textAlign: "center", color: "white", display: "grid", alignContent: "center"}}>
            <span style={{fontFamily: "Shojumaru"}}>Ahiajoku Lecture Series</span>
            <span style={{fontFamily: "Satoshi", fontSize: "20px"}}>Over the years, the Ahiajoku Lecture Series has hosted numerous esteemed speakers <br/>who have shared invaluable insights into our culture and traditions.</span>
          </div>
        </div>
        <div id='brfhist'>
            <div id='lecthist'>
                <h2 style={{textAlign: "center", fontWeight: "700"}}>Brief History Of Ahiajoku Lecture Series</h2>
                <div id='listcont'>
                    <ul><li>The Ahiajoku Lecture series was inaugurated in 1979 by the Sam Mbakwe administration to serve as a think tank for the overall development of Imo State and Igbo land.</li></ul>
                    <ul><li>The lectures were held annually until there was a hiatus between 1996-1999, possibly due to a military ban.</li></ul>
                    <ul><li>The series was revived in 2000 but has experienced reduced frequency and attendance, attributed to a lack of unity among Igbo governors.</li></ul>
                    <ul><li>The lectures aim to remind Ndi Imo and Ndi Igbo of their cultural heritage and its importance in socio-economic development.</li></ul>
                    <ul><li>The lectures have been given by various notable Igbo scholars, including MJC Echeruo, Bede Okigbo, Adiele Afigbo, Donatus Nwoga, and Chinua Achebe.</li></ul>
                    <ul><li>The 40th anniversary of the lecture series in 2019 saw the same lecturer, MJC Echeruo, who spoke on "A Matter of Identity" during the inaugural lecture in 1979.</li></ul>
                </div>
            </div>
        </div>
        <Speaker/>
        <div id='partic' style={{display: "grid", color: "white", justifyItems: "center", fontFamily: "Satoshi"}}>
            <p>Share Your Voice</p>
            <h2>Become a Participant at the New Yam Festival</h2>
            <span>Join the Celebration: Become an Active Participant in the Vibrant and Cultural New Yam Festival, Embracing Our Rich Traditions and Community Spirit</span>
            <a style={{textDecoration: "none"}} href='/participate'><button>Become a Participant</button></a>
            <img alt='' src={ppl}/>
        </div>
        <Join/>
        <Footer/>
    </div>
  )
}

export default LectureSeries;