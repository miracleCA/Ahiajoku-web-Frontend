import React from 'react';
import {Helmet} from "react-helmet";

import Nav from '../Components/Nav';
import Gallery from '../Components/Gallery';
import Footer from '../Components/Footer';
import Join from '../Components//Join';

import img from "../Images/newimg.png"
import ribb from "../Images/Ribbon.png"
import symb from "../Images/symb.png"

import "../Styles/Pages/NewYam.css";

function NewYam() {
  return (
    <div className='NewYam'>
        <Helmet>
            <title>New yam festival - Ahiajoku</title>
        </Helmet>
        <div id='newhd'>
            <Nav/>
            <div id='header' style={{textAlign: "center", color: "white", display: "grid", alignContent: "center"}}>
                <span style={{fontFamily: "Shojumaru"}}>Ahiajoku New Yam festival</span>
                <span style={{fontFamily: "Satoshi", fontSize: "20px"}}>Embrace the Harvest, Celebrate Tradition, Taste, and Togetherness at the New Yam Festival</span>
            </div>
        </div>
        <div id='history'>
            <div className='col-4'>
                <img alt='' src={img}/>
            </div>
            <div className='col-6'>
                <h2>History And Heritage</h2>
                <span>Discover the Roots and Traditions of Our New Yams Festival</span>
                <p>The Ahiajoku festival is a yam festival celebrated by the Igbo people in Nigeria. It's a time to give thanks for the harvest, celebrate Igbo culture, and enjoy traditional food, music, and dance. The festival is named after the yam goddess Ahiajoku (who is believed to be the patron deity of farmers and the harvest) and promotes unity and prosperity among the Igbo people.</p>
            </div>
            <div className='col-2' style={{display: "grid", padding: "0px"}}>
                <img alt='' src={ribb} style={{alignSelf: "center", width: "inherit"}}/>
            </div>
        </div>
        <div id='symb'>
            <div id='order1' className='col-6' style={{paddingRight: "10%", alignSelf: "center"}}>
                <h2 style={{fontWeight: "700"}}>Symbolism of The Yam</h2>
                <span style={{fontWeight: "700", fontSize: "20px", paddingBottom: "3%"}}>The Nigerian Food That Deserves A Festival</span>
                <p>Igbo land cultivates a variety of yams, each with distinct uses. <br/>White yam (Iyi oku) is the most common, while yellow yam (Iyi osa) is favored for its sweetness in special occasions. The king yam (Iyi oba), the largest and most valuable, is reserved for special events. Bitter yam (Iyi aku) has medicinal uses, and red yam (Iyi ụkọ) is sweet with reddish-brown skin. <br/>Beyond food, these yams hold cultural significance in Igbo ceremonies and traditions.</p>
            </div>
            <div id='order2' className='col-6'>
                <img alt='' src={symb}/>
            </div>
        </div>
        <div className='mm'>
            <div id='order2' className='col-6'>
                <img alt='' src={symb}/>
            </div>
            <div id='order1' className='col-6' style={{paddingRight: "10%", alignSelf: "center"}}>
                <h2 style={{fontWeight: "700"}}>Symbolism of The Yam</h2>
                <span style={{fontWeight: "700", paddingBottom: "3%"}}>The Nigerian Food That Deserves A Festival</span>
                <p>Igbo land cultivates a variety of yams, each with distinct uses. <br id='break'/>White yam (Iyi oku) is the most common, while yellow yam (Iyi osa) is favored for its sweetness in special occasions. The king yam (Iyi oba), the largest and most valuable, is reserved for special events. Bitter yam (Iyi aku) has medicinal uses, and red yam (Iyi ụkọ) is sweet with reddish-brown skin. <br id='break'/>Beyond food, these yams hold cultural significance in Igbo ceremonies and traditions.</p>
            </div>
        </div>
        <Join/>
        <div id='gallry'>
            <span style={{fontWeight: "700", paddingBottom: "1%"}}>In Memory</span>
            <h2 style={{fontWeight: "700"}}>Moments From Past Events</h2>
            <Gallery/>
        </div>
        <Footer/>
    </div>
  )
}

export default NewYam