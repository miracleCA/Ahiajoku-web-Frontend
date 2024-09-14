import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Buffer} from 'buffer';
import Carousel from "react-elastic-carousel";

import "../Styles/Components/Speaker.css";

function Speaker() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 3 },
    ];

    const [data, setData] = useState([]);

    useEffect(() => {
        const datar = async () => {
            await axios({
                method: 'get',
                url: 'https://ahiajoku-backend-web.onrender.com/speakers',
                headers: {
                    'Content-Type': 'Application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjE1MDMyMjU0ZTIxYmViYzNkMmEwNiIsImlhdCI6MTcyMjg5NjU2Mn0.ZAXl87l8l4xV8eUZc0-h_fb99VAhaAVbDE_jekZSK6A'
                }
            })
            .then(res => setData(res.data))
            .catch(error => console.error(error))
        }

        datar()
    })

    Buffer.from('anything', 'base64')

    return (
        <div id='speakers' style={{backgroundColor: "#156107", fontFamily: "Satoshi", display: "grid", padding: "2% 4%"}}>
            <span id='sptxthd' style={{color: "white", justifySelf: "center", textAlign: "center", fontFamily: 700}}>Notable Ahiajoku Past Speakers</span><br/>
            <span style={{color: "white", justifySelf: "center", textAlign: "center",paddingBottom: '3%'}}>Over the years, the Ahiajoku Lecture Series has hosted numerous esteemed speakers who<br/> have shared invaluable insights into our culture and traditions.</span>
            <Carousel breakPoints={breakPoints}>
                {data.map((data, i) => (
                    <div className="card" key={i}>
                        <img src={`data:${data.image.contentType};base64, ${Buffer.from(data.image.data.data).toString('base64')}`} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Topic</h5>
                            <p className="card-text">{data.topic}</p>
                            <span>“{data.note.substr(0, 80)}”</span>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Speaker