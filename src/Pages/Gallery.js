import React, { useEffect, useState } from 'react';
import {Helmet} from "react-helmet";
import Carousel from "react-elastic-carousel";
import axios from 'axios';
import {Buffer} from 'buffer';

import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

import "../Styles/Pages/Gallery.css";

function Gallery() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];

    const [data, setData] = useState([]);

    useEffect(() => {
        const datar = async () => { 
          await axios({
            method: "get",
            url: 'https://ahiajoku-backend-web.onrender.com/gallery',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjE1MDMyMjU0ZTIxYmViYzNkMmEwNiIsImlhdCI6MTcyMjg5NjU2Mn0.ZAXl87l8l4xV8eUZc0-h_fb99VAhaAVbDE_jekZSK6A'
            }
          })
          .then(res => setData(res.data))
          .catch(error => console.error(error))
        }
    
        datar()
    }, [])
    
    Buffer.from('anything','base64');

  return (
    <div id='GalGal'>
        <Helmet>
            <title>Gallery - Ahiajoku</title>
        </Helmet>
        <Nav/>
        <div id='galltxt'>
            <h2 style={{fontFamily: "Poppins"}}>Ahiajoku Festival Gallery</h2>
            <span style={{fontFamily: "Satoshi"}}> A Visual Journey of the Ahiajoku Yam Festival: Capturing the Vibrant Celebrations, Traditional Dances, Communal Feasts, and the Rich Cultural Heritage of Our Annual Event
            </span>
        </div>
        <div id='lectdata'>
            <Carousel breakPoints={breakPoints}>
                {data.map((data, i) => (
                    <div id='data' key={i}>
                        <img alt='' src={`data:${data.image.contentType};base64, ${Buffer.from(data.image.data.data).toString('base64')}`}/>
                        <span style={{display: "grid"}}>
                            <p style={{justifySelf: "center"}}>
                                <strong style={{textAlign: "center", fontFamily: "Satoshi", fontWeight: "bold", fontSize: "20px"}}>{data.title}</strong>
                            </p>
                        </span>
                    </div>
                ))}
            </Carousel>
        </div>
        <Footer/>
    </div>
  )
}

export default Gallery