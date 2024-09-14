import React from 'react';
import {Helmet} from "react-helmet";

import Nav from '../Components/Nav';
import Gallery from '../Components/Gallery';
import Speaker from '../Components/Speaker';
import Footer from '../Components/Footer';

import yam from "../Images/Rectangle 2989.png";
import a from "../Images/1.png";
import b from "../Images/2.png";
import c from "../Images/3.png";
import d from "../Images/4.png";
import e from "../Images/5.png";
import f from "../Images/6.png";
import g from "../Images/7.png";
import h from "../Images/8.png";
import i from "../Images/9.png";
import j from "../Images/10.png";

import Q1 from "../Images/Quotes1.png";
import Q2 from "../Images/Quotes2.png";
import Q3 from "../Images/Quotes3.png";

import "../Styles/Pages/Home.css";

function Home() {
  return (
    <div className='Home'>
        <Helmet>
            <title>Home - Ahiajoku</title>
        </Helmet>
        <div id='homehd'>
          <Nav/>
          <div id='header' style={{textAlign: "center", color: "white", display: "grid", alignContent: "center"}}>
            <span style={{fontFamily: "Shojumaru"}}>Celebrating the Rich Cultural Heritage of the Igbo People</span>
            <span style={{fontFamily: "Satoshi", fontSize: "20px"}}>Join us for the Ahiajoku Festival, a vibrant celebration of culture, tradition, and community in<br id='break'/> Nigeria. This annual event honors the agricultural deities and the rich history of the <br/>Igbo people through music, dance, art, and food.</span>
          </div>
        </div>
        <div className='Mission' style={{fontFamily: "Satoshi"}}>
          <div id='misshd' style={{textAlign: "center", color: "black", display: "grid", alignContent: "center"}}>
            <span id='a' style={{fontFamily: "Satoshi"}}>Mission Statement</span>
            <span id='b' style={{fontFamily: "Satoshi"}}>The mission of the Ahiajoku Centre is to promote, preserve, and celebrate the rich cultural heritage of the Igbo people through research,<br/> education, and community engagement, fostering a deeper understanding and appreciation of Igbo traditions and cultural values.</span>
          </div>
          <span style={{display: "grid", margin: "3% 0px"}}>
            <img alt='' src={yam}/>
          </span>
          <div id='misshd' style={{textAlign: "center", color: "black", display: "grid", alignContent: "center"}}>
            <span id='a' style={{fontFamily: "Satoshi"}}>Vision Statement</span>
            <span id='b' style={{fontFamily: "Satoshi"}}>The vision of the Ahiajoku Centre is to be a leading institution in the global recognition and appreciation of Igbo culture, <br/>advancing knowledge, and fostering pride among the Igbo people while contributing to cultural diversity and unity worldwide.</span>
          </div>
        </div>
        <div id='quotes' style={{backgroundColor: "#156107"}}>
          <span style={{color: "white", textAlign: "center", display: "grid", fontFamily: "Satoshi", fontSize: "30px", fontWeight: "700"}}>Notable Quotes</span>
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="cards-wrapper">
                  <div className="card">
                    <img src={Q1} className="card-img-top" alt="..."/>
                  </div>
                  <div className="card d-none d-md-block">
                    <img src={Q2} className="card-img-top" alt="..."/>
                  </div>
                  <div className="card d-none d-md-block">
                    <img src={Q3} className="card-img-top" alt="..."/>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <span style={{display: "grid"}}>
            <button style={{backgroundColor: "white", color: "black", placeSelf: "center", padding: "10px 25px", border: "none", fontWeight: "700", fontFamily: "poppins", borderRadius: "10px"}}>See More</button>
          </span>
        </div>
        <div id='gallery' style={{display: "grid", textAlign: "center", fontFamily: "Satoshi"}}>
          <span style={{color: "black", fontSize: "20px", fontWeight: "700"}}>In Memory</span>
          <span style={{color: "black", fontWeight: "700", fontSize: "30px", paddingTop: "0.5%"}}>Visit Our Gallery</span>
          <Gallery/>
          <span>
            <a style={{textDecoration: "none"}} href='/gallery'>
              <button>See More</button>
            </a>
          </span>

        </div>
        <div id='prog' style={{backgroundColor: "#232323", color: "white", textAlign: "center"}}>
          <span style={{fontFamily: "Satoshi", fontWeight: "700", fontSize: "30px"}}>Programs and Activities</span><br/>
          <span style={{fontFamily: "Satoshi", fontWeight: "500", fontSize: "20px"}}>The Ahiajoku  Centre carries out various activities, including:</span>
          <div id='contn' style={{margin: "3% 0px", paddingBottom: "2%"}}>
            <div id='col6' style={{height: "10%", color: "white"}}>
              <span>
                <img style={{borderRadius: "10px"}} alt='' src={a}/>
              </span>
              <span id='ttxt' style={{paddingLeft: "4%", alignSelf: "center", fontFamily: "Satoshi", fontWeight: "500", fontSize: "20px"}}>Organizing cultural festivals and events.</span>
            </div>
            <div id='col6' style={{height: "10%", color: "white"}}>
              <span>
                <img style={{borderRadius: "10px"}} alt='' src={b}/>
              </span>
              <span id='ttxt' style={{paddingLeft: "4%", alignSelf: "center", fontFamily: "Satoshi", fontWeight: "500", fontSize: "20px"}}>Conducting research on Igbo history, language, and traditions.</span>
            </div>
          </div>
          <div id='contn' style={{margin: "3% 0px", paddingBottom: "2%"}}>
            <div id='col6' style={{height: "10%", color: "white"}}>
              <span>
                <img style={{borderRadius: "10px"}} alt='' src={c}/>
              </span>
              <span id='ttxt' style={{paddingLeft: "4%", alignSelf: "center", fontFamily: "Satoshi", fontWeight: "500", fontSize: "20px"}}>Providing educational programs and workshops on Igbo culture.</span>
            </div>
            <div id='col6' style={{height: "10%", color: "white"}}>
              <span>
                <img style={{borderRadius: "10px"}} alt='' src={d}/>
              </span>
              <span id='ttxt' style={{paddingLeft: "4%", alignSelf: "center", fontFamily: "Satoshi", fontWeight: "500", fontSize: "20px"}}>Maintaining a library and archive of Igbo cultural material.</span>
            </div>
          </div>
          <div id='contn' style={{margin: "3% 0px", paddingBottom: "2%"}}>
            <div id='col6' style={{height: "10%", color: "white"}}>
              <span>
                <img style={{borderRadius: "10px"}} alt='' src={e}/>
              </span>
              <span id='ttxt' style={{paddingLeft: "4%", alignSelf: "center", fontFamily: "Satoshi", fontWeight: "500", fontSize: "20px"}}>Collaborating with local and international cultural organizations to promote the preservation of Igbo cultural heritage.</span>
            </div>
            <div id='col6' style={{height: "10%", color: "white"}}>
              <span>
                <img style={{borderRadius: "10px"}} alt='' src={f}/>
              </span>
              <span id='ttxt' style={{paddingLeft: "4%", alignSelf: "center", fontFamily: "Satoshi", fontWeight: "500", fontSize: "20px"}}>Hosting annual Ahiajoku lectures, where Igbo leaders, stakeholders, scholars and cultural experts converge to chart a course of action for the growth of Igboland.</span>
            </div>
          </div>
          <div id='contn' style={{margin: "3% 0px", paddingBottom: "2%"}}>
            <div id='col6' style={{height: "10%", color: "white"}}>
              <span>
                <img style={{borderRadius: "10px"}} alt='' src={g}/>
              </span>
              <span id='ttxt' style={{paddingLeft: "4%", alignSelf: "center", fontFamily: "Satoshi", fontWeight: "500", fontSize: "20px"}}>Promoting traditional arts, crafts, music, and dance.</span>
            </div>
            <div id='col6' style={{height: "10%", color: "white"}}>
              <span>
                <img style={{borderRadius: "10px"}} alt='' src={h}/>
              </span>
              <span id='ttxt' style={{paddingLeft: "4%", alignSelf: "center", fontFamily: "Satoshi", fontWeight: "500", fontSize: "20px"}}>Engaging with the community through outreach programs.</span>
            </div>
          </div>
          <div id='contn' style={{margin: "3% 0px", paddingBottom: "2%", borderBottom: "none"}}>
            <div id='col6' style={{height: "10%", color: "white"}}>
              <span>
                <img style={{borderRadius: "10px"}} alt='' src={i}/>
              </span>
              <span id='ttxt' style={{paddingLeft: "4%", alignSelf: "center", fontFamily: "Satoshi", fontWeight: "500", fontSize: "20px"}}>Publishing research findings and cultural materials.</span>
            </div>
            <div id='col6l' style={{height: "10%", color: "white"}}>
              <span>
                <img style={{borderRadius: "10px"}} alt='' src={j}/>
              </span>
              <span id='ttxt' style={{paddingLeft: "4%", alignSelf: "center", fontFamily: "Satoshi", fontWeight: "500", fontSize: "20px"}}>Supporting the development of cultural tourism in the Igboland.</span>
            </div>
          </div>
          <button style={{color: "white", backgroundColor: "#008080"}}>Read More</button>
        </div>
        <Speaker/>
        <div id='cont'>
          <div id='hmform' style={{backgroundColor: "#1D1C1C"}}>
            <div id='mm1' className='col-6' style={{fontFamily: "Satoshi", color: "white", alignSelf: "center"}}>
              <span style={{fontWeight: "600", fontSize: "27px"}}>Get in Touch</span>
              <span>We'd love to hear from you.<br/>Fill out the form and we will get back to you as soon as possible.</span>
              <span>Email: <strong>Ahiajioku.gov@gmail.com</strong></span>
              <span id='dt1'>Phone: <strong>07084432486</strong></span>
            </div>
            <div className='col-6' style={{fontFamily: "Satoshi"}}>
              <form>
                <span id='fname'>
                  <input type='text' placeholder='First name'/>
                  <input type='text' placeholder='Last name'/>
                </span>
                <input type='email' placeholder='Email' style={{marginBottom: "2%"}}/>
                <textarea rows="5" cols="50" placeholder='Message'></textarea>
                <button type='submit' style={{color: "white", backgroundColor: "#008080", fontWeight: "600", fontFamily: "poppins", fontSize: "20px"}}>Send</button>
              </form>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home;
