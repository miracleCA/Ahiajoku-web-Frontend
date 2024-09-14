import React, { useRef, useState } from 'react';
import {Helmet} from "react-helmet";
import emailjs from '@emailjs/browser';

import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

import "../Styles/Pages/Sponsor.css";

function Sponsor() {

    localStorage.removeItem('mail status3');

    const [conf, setConf] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs
            .sendForm(process.env.REACT_APP_sponsor_Service_ID, process.env.REACT_APP_sponsor_Template_ID, form.current, {
              publicKey: process.env.REACT_APP_sponsor_Public_Key,
            })
            .then(
              () => {
                localStorage.setItem('mail status3', "sent");
                e.target.reset();
                setTimeout(() => {
                    if (localStorage.getItem('mail status3') == "sent") {
                        setConf(true)
                    }
                }, 3000)
                },
              (error) => {
                console.log('FAILED...', error.text);
              },
            );
        };

  return (
    <div id='sponsor'>
        <Helmet>
            <title>Sponsor - Ahiajoku</title>
        </Helmet>
        <Nav/>
        <div id='sponsform'>
            <div id='sponstxt' className='col-6'>
                <h2>Become A Sponsor</h2>
                <p>Support a Rich Cultural Tradition and Gain Unmatched Exposure for Your Brand at One of Nigeria's Premier Celebrations.</p>
            </div>
            <div id='spofrom' className='col-6'>
                <form ref={form} onSubmit={sendEmail} style={{display: "grid"}}>
                    <label>Name</label>
                    <input type='text' name='name' placeholder='Enter your full Name'/>
                    <label>Email</label>
                    <input type='email' name='email' placeholder='Enter your Email'/>
                    <label>Phone</label>
                    <input type='number' name='phone' placeholder='Enter your Phone number'/>
                    <input type="text" style={{display: (conf === true ? 'flex' : "none"), color: "green", fontWeight: "700", fontSize: "20px"}} value="Message sent successfully"/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Sponsor;