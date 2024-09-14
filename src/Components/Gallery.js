import React, { useEffect, useState } from 'react';
import Carousel from "react-elastic-carousel";
import axios from 'axios';
import {Buffer} from 'buffer';

import "../Styles/Components/Gallery.css";

function Gallery() {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];

  const [data, setData] = useState([])

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
    <div id='glll'>
      <Carousel breakPoints={breakPoints}>
        {data.map((data, i) => (
          <item key={i}>
            <img alt='' src={`data:${data.image.contentType};base64, ${Buffer.from(data.image.data.data).toString('base64')}`}/>
          </item>
        ))}
      </Carousel>
    </div>
  )
}

export default Gallery;