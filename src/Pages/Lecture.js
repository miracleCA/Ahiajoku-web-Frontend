import React from 'react';
import {Helmet} from "react-helmet";

import Nav from '../Components/Nav';
import LectureData from '../Components/LectureData';
import Footer from '../Components/Footer';

import Logo from '../Logo/WhatsApp Image 2024-07-13 at 09.30.18_e47778ec.jpg'

import "../Styles/Pages/Lecture.css";

function Lecture() {
  return (
    <div id='Lecture'>
        <Helmet>
            <title>Lecture - Ahiajoku</title>
        </Helmet>
        <Nav/>
        <div id='lectvdata'>
            <span>Topic</span>
            <span><strong>The Age of Innocence: The Igbo and Their Neighbours in Pre-Colonial Times</strong></span>
            <video></video>
            <div id='authbio'>
                <img alt='' src={Logo}/>
                <span style={{display: "grid"}}>
                    <strong>Author's Name</strong>
                    <p>Prof. Adiele E. Afigbo is a Lorem ipsum dolor sit amet consectetur. Maecenas pellentesque at neque malesuada mauris mattis a cras. Ridiculus malesuada tristique ipsum massa. At lectus porttitor diam tortor. Elementum pharetra sagittis quis amet gravida non. Turpis ac hendrerit turpis eget leo sed est. Gravida sem leo amet fames sit gravida. Tortor rutrum quam molestie cursus. Eget tellus nunc interdum quam elementum tempus duis. In vel at nibh euismod id in. </p>
                </span>
            </div>
            <strong>Lecture Note</strong>
            <p>Lorem ipsum dolor sit amet consectetur. Maecenas pellentesque at neque malesuada mauris mattis a cras. Ridiculus malesuada tristique ipsum massa. At lectus porttitor diam tortor. Elementum pharetra sagittis quis amet gravida non. Turpis ac hendrerit turpis eget leo sed est. Gravida sem leo amet fames sit gravida. Tortor rutrum quam molestie cursus. Eget tellus nunc interdum quam elementum tempus duis. In vel at nibh euismod id in. Praesent amet quis non venenatis purus tellus ac.
                Facilisis tincidunt ut tincidunt elementum tempor in. Pellentesque malesuada at amet mauris molestie. At at varius auctor turpis neque sit donec lorem tristique. Consectetur tellus lacus est tortor id faucibus tristique et. Nisi sagittis tellus ornare ac nisi. Augue sed enim velit tincidunt quis. In faucibus lacinia ornare commodo. Aliquet est suspendisse a nullam tortor posuere nisi. Pellentesque lorem porttitor dolor pretium elit odio. Morbi viverra id leo neque orci.
                Dictum at aliquam enim vulputate mollis. Sit egestas viverra in pulvinar massa nunc purus dolor odio. Donec lectus semper dignissim velit ut mattis cras. Sit congue curabitur libero eu. Cursus pellentesque eu risus dui massa hac est. Gravida habitasse diam cras fringilla. Hac curabitur lacus aliquam cras fermentum. Tortor morbi nisl sollicitudin orci vehicula hendrerit. Fermentum molestie ipsum viverra in eu ut vestibulum proin. Faucibus ut purus porttitor egestas lobortis quam ut gravida.
                Nam laoreet hac ut neque nunc eget. Viverra purus facilisi nisl porttitor egestas nullam vestibulum id. Id non vitae mi pulvinar. Vitae id in nam nibh amet fames sapien integer. Mauris facilisi diam iaculis quam nec cras vestibulum. Tellus ac quis arcu posuere. Sit ullamcorper eget nisl ultrices arcu morbi ultricies. Eros mi nibh arcu suscipit nunc arcu facilisis id. Convallis diam penatibus metus dui.
                Risus blandit mattis integer quis venenatis gravida. Eu orci faucibus non tempus. Purus urna fringilla tortor sit ornare. Leo diam nulla viverra magna ultrices lectus velit nisi tortor. Orci aliquam eget odio sed blandit vitae velit posuere a. Vitae placerat risus sit orci odio eget. Rutrum dapibus dignissim nisl massa. Turpis volutpat non in ut. Eu habitant leo dui convallis iaculis. Sed ac imperdiet est bibendum ac etiam. Sem arcu ipsum netus amet. Cursus viverra risus ipsum egestas facilisis ipsum. Sit duis nulla nulla risus auctor accumsan lacus pellentesque.
                Nunc pretium mi vel integer enim parturient vestibulum diam. Mattis mauris vitae condimentum quisque lorem sociis pellentesque ultrices. Ultricies morbi quis non a tincidunt. Risus elementum tristique ultrices ut orci et purus auctor. Duis turpis metus lobortis sapien. Sed est rutrum aliquam dis ultrices quisque in. Cras sapien sed vehicula ut porta. Sociis pulvinar semper viverra amet vitae mauris. Ac tellus cursus nisl maecenas convallis urna aliquam. Massa donec eget quam in sit ut tristique ac aliquet.
            </p>
        </div>
        <strong id='lect'>More Lectures</strong>
        <LectureData/>
        <Footer/>
    </div>
  )
}

export default Lecture