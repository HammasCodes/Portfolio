import React from 'react'
import './About.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/about_profile_2.jpg"

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" className="theme-pattern" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" style={{ width: '350px', height: 'auto' }} />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a dedicated software developer with a strong foundation in Python, Data Structures & Algorithms (DSA), and full-stack web development. My expertise lies in React, where I design and build dynamic, responsive, and user-friendly web applications. With a passion for problem-solving, I excel at creating efficient, scalable solutions that deliver exceptional performance and user experiences.</p>
                    <p>I have hands-on experience in leveraging Python for backend development, automation, and algorithmic problem-solving, combined with a deep understanding of DSA to optimize code and tackle complex challenges.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Python</p><hr style={{width:"90%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
                <hr />
            <div className="about-achievement">
                <h1>20+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
                <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About
