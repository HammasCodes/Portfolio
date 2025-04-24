import React from 'react'
import './Hero.css'
import profile_img from "../../assets/profile_img_2.png"
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" style={{ width: '350px', height: 'auto' }} />
      <h1>I'm <span>Mohammad Hammas</span>,Software Devloper Based in India.</h1>
      <p>I am a Full stack web devloper with expertise in React JS and error debugging,with the experience of 2 years.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
