import {Helmet} from "react-helmet";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

import "../Styles/Pages/Sponsor.css";
import "../Styles/Pages/Contact.css";


function Contact() {

    localStorage.removeItem('mail status');

    const [conf, setConf] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs
            .sendForm(process.env.REACT_APP_contact_Service_ID, process.env.REACT_APP_contact_Template_ID, form.current, {
              publicKey: process.env.REACT_APP_contact_Public_Key,
            })
            .then(
              () => {
                localStorage.setItem('mail status', "sent");
                e.target.reset();
                setTimeout(() => {
                    if (localStorage.getItem('mail status') == "sent") {
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
    <div id='Contact'>
        <Helmet>
            <title>Contact Us - Ahiajoku</title>
        </Helmet>
        <Nav/>
        <div id='sponsform'>
            <div id='sponstxt' className='col-6'>
                <h2>Contact Us!</h2>
                <p>Any question? we would be happy to help you<br/>Email: Ahiajioku.gov@gmail.com<br/>Phone: 07084432486</p>
            </div>
            <div id='spofrom' className='col-6'>
                <form ref={form} onSubmit={sendEmail} method="POST" style={{display: "grid"}}>
                    <label>Name </label>
                    <input type='text' name='name' placeholder='Enter your full Name'/>
                    <label>Email</label>
                    <input type='email' name='email' placeholder='Enter your Email'/>
                    <label>Message</label>
                    <textarea name='message' rows="5" cols="50" placeholder='Write your message'></textarea>
                    <input type="text" style={{display: (conf === true ? 'flex' : "none"), color: "green", fontWeight: "700", fontSize: "20px"}} value="Message sent successfully"/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact;