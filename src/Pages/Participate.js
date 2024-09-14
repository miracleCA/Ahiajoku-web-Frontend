import React, { useRef, useState } from 'react';
import {Helmet} from "react-helmet";
import emailjs from '@emailjs/browser';

import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

import "../Styles/Pages/Sponsor.css";
import "../Styles/Pages/Participate.css";

function Participate() {

    localStorage.removeItem('mail status2');

    const [conf, setConf] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs
            .sendForm(process.env.REACT_APP_Service_ID, process.env.REACT_APP_Template_ID, form.current, {
              publicKey: process.env.REACT_APP_Public_Key,
            })
            .then(
              () => {
                localStorage.setItem('mail status2', "sent");
                e.target.reset();
                setTimeout(() => {
                    if (localStorage.getItem('mail status2') == "sent") {
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
    <div id='Participate'>
        <Helmet>
            <title>Participate - Ahiajoku</title>
        </Helmet>
        <Nav/>
        <div id='sponsform'>
            <div id='sponstxt' className='col-6'>
                <h2>Become A Participant</h2>
                <p>Join the Celebration: Become an Active Participant in the Vibrant and Cultural New Yams Festival, Embracing Our Rich Traditions and Community Spirit.</p>
            </div>
            <div id='spofrom' className='col-6'>
                <form ref={form} onSubmit={sendEmail} style={{display: "grid"}}>
                    <label>Name</label>
                    <input type='text' name='name' placeholder='Enter your full Name'/>
                    <label>Email</label>
                    <input type='email' name='email' placeholder='Enter your Email'/>
                    <label>Location</label>
                    <select name='state'>
                        <option>Select State</option>
                        <option value="Abia">Abia</option>
                        <option value="Adamawa">Adamawa</option>
                        <option value="AkwaIbom">AkwaIbom</option>
                        <option value="Anambra">Anambra</option>
                        <option value="Bauchi">Bauchi</option>
                        <option value="Bayelsa">Bayelsa</option>
                        <option value="Benue">Benue</option>
                        <option value="Borno">Borno</option>
                        <option value="Cross River">Cross River</option>
                        <option value="Delta">Delta</option>
                        <option value="Ebonyi">Ebonyi</option>
                        <option value="Edo">Edo</option>
                        <option value="Ekiti">Ekiti</option>
                        <option value="Enugu">Enugu</option>
                        <option value="FCT">FCT</option>
                        <option value="Gombe">Gombe</option>
                        <option value="Imo">Imo</option>
                        <option value="Jigawa">Jigawa</option>
                        <option value="Kaduna">Kaduna</option>
                        <option value="Kano">Kano</option>
                        <option value="Katsina">Katsina</option>
                        <option value="Kebbi">Kebbi</option>
                        <option value="Kogi">Kogi</option>
                        <option value="Kwara">Kwara</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Nasarawa">Nasarawa</option>
                        <option value="Niger">Niger</option>
                        <option value="Ogun">Ogun</option>
                        <option value="Ondo">Ondo</option>
                        <option value="Osun">Osun</option>
                        <option value="Oyo">Oyo</option>
                        <option value="Plateau">Plateau</option>
                        <option value="Rivers">Rivers</option>
                        <option value="Sokoto">Sokoto</option>
                        <option value="Taraba">Taraba</option>
                        <option value="Yobe">Yobe</option>
                        <option value="Zamfara">Zamfara</option>
                    </select>
                    <label>Gender</label>
                    <select name='gender'>
                        <option>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    <label>Age</label>
                    <input type='number' name='age' placeholder='Enter your Age'/>
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

export default Participate