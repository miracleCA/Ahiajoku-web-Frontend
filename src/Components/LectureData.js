import React, { useEffect, useState } from 'react';
import Carousel from "react-elastic-carousel";
import axios from 'axios';
import {Buffer} from 'buffer';

import "../Styles/Components/LectureData.css";

function LectureData() {

    const [data, setData] = useState([])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];

    useEffect(() => {
        const datar = async () => {
            await axios({
                method: 'get',
                url: 'https://ahiajoku-backend-web.onrender.com/lecture_notes',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjE1MDMyMjU0ZTIxYmViYzNkMmEwNiIsImlhdCI6MTcyMjg5NjU2Mn0.ZAXl87l8l4xV8eUZc0-h_fb99VAhaAVbDE_jekZSK6A'
                }
            })
        .then(res => {
            setData(res.data)
        })
        .catch(error => console.error(error))
    }

        datar()
    }, [])

    Buffer.from('anything','base64');

    return (
        <div id='lectdata'>
            <Carousel breakPoints={breakPoints}>
                {data.map((data, i) => (
                    <div id='data' key={i}>
                        <img alt='' src={`data:${data.coverImage.contentType};base64, ${Buffer.from(data.coverImage.data.data).toString('base64')}`}/>
                        <span style={{display: "grid"}}>
                            <p style={{marginBottom: '2%'}}><strong>{data.title}...</strong></p>
                            <p>{data.note.substr(0, 35)}...</p>
                            <p><strong>{data.author}</strong></p>
                            <p>{data.date}</p>
                        </span>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default LectureData