import React from 'react';

import join from "../Images/Join.png";

import "../Styles/Components/Join.css";

function Join() {
  return (
        <div id='join'>
            <div className='col-8'>
                <h2>Become A Festival  Sponsor</h2>
                <span style={{fontWeight: "400", fontSize: "20px"}}>Support Tradition and Community: Partner with Us for the New Yam Festival</span>
                <h3 style={{paddingTop: "3%", fontSize: "25px"}}>Key Benefits</h3>
                <div style={{display: "grid"}} id='iconn'>
                    <span>
                        <i class="fa-solid fa-star"></i>
                        <strong>Visibility:</strong>Showcase your brand to a large, diverse audience. 
                    </span>
                    <span>
                        <i class="fa-solid fa-star"></i>
                        <strong>Impact:</strong>Contribute to the preservation and celebration of cultural heritage.
                    </span>
                    <span>
                        <i class="fa-solid fa-star"></i>
                        <strong>Engagement:</strong>Connect with the community through meaningful interactions.
                    </span>
                </div>
                <span style={{marginTop: "25px", display: "flex", alignItems: "center"}}>Interested in sponsoring?<a style={{textDecoration: "none"}} href="/sponsor"><button>Get In Touch</button></a>
                </span>
            </div>
            <div className='col-4' style={{padding: "0px"}}>
                <img alt='' src={join}/>
            </div>
            <div id='b' className='col-4' style={{padding: "0px"}}>
                <img alt='' src={join}/>
            </div>
            <div id='a' className='col-8'>
                <h2>Become A Festival  Sponsor</h2>
                <span style={{fontWeight: "400"}}>Support Tradition and Community:<br id='vv'/> Partner with Us for the New Yam Festival</span>
                <h3 style={{paddingTop: "3%"}}>Key Benefits</h3>
                <div style={{display: "grid"}} id='iconn'>
                    <span style={{textAlign: "left"}}>
                        <i class="fa-solid fa-star"></i>
                        <strong>Visibility:</strong>Showcase your brand to a large, diverse audience. 
                    </span>
                    <span style={{textAlign: "left"}}>
                        <i class="fa-solid fa-star"></i>
                        <strong>Impact:</strong>Contribute to the preservation and celebration of cultural heritage.
                    </span>
                    <span style={{textAlign: "left"}}>
                        <i class="fa-solid fa-star"></i>
                        <strong>Engagement:</strong>Connect with the community through meaningful interactions.
                    </span>
                </div>
                <span style={{marginTop: "25px", display: "grid", alignItems: "center", paddingBottom: "20px"}}>Interested in sponsoring?<a style={{textDecoration: "none"}} href="/sponsor"><button>Get In Touch</button></a>
                </span>
            </div>
        </div>
        
  )
}

export default Join