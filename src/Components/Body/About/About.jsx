import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import './About.css'
import Profiles from '../../../Images/Profiles.png'
const About = () => {
    AOS.init();
    return (
        <div className="about" id="about">
            <div className="about-left" data-aos="flip-right">
                <h1 className="about-title">About Me <span className="underline"></span></h1>

                <h2 className="about-info">Hey, my name is Ankur Vaidwal and I love to create and design websites.
                    I found my love for  websites when I saw user interactive and cool animated
                    websites online. <br />
                    My other interests are developing android apps and programming.</h2>
            </div>
            <div className="about-right" data-aos="fade-down" data-aos-delay="100">
                <img className="about-img" src={Profiles} alt="" />
            </div>
        </div>
    )
}

export default About