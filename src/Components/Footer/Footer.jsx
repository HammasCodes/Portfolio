import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo_2.png'
import user_icon from '../../assets/user_icon.svg'
import link_icon from '../../assets/linkedin.png'
import git_icon from '../../assets/github.png'
import tweet_icon from '../../assets/twitter.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" style={{ width: '200px', height: 'auto' }} />
                    <p>I am a Full stack web devloper with expertise in React JS and error debugging,with the experience of 2 years.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2024 Mohammad Hammas. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <a href="https://www.linkedin.com/in/mohammad-hammas-426062233/" target='blank'><img src={link_icon} alt="" style={{
                        width: '35px', // Adjust width as needed
                        height: '35px', // Adjust height as needed
                        filter: 'invert(1) brightness(2)', // Make the black icon white
                    }} /></a>
                    <a href="https://github.com/HammasCodes" target='blank'><img src={git_icon} alt="" style={{
                        width: '35px', // Adjust width as needed
                        height: '35px', // Adjust height as needed
                        filter: 'invert(1) brightness(2)', // Make the black icon white
                    }} /></a>
                    <a href="https://x.com/ansari_ham48736" target='blank'><img src={tweet_icon} alt="" style={{
                        width: '35px', // Adjust width as needed
                        height: '35px', // Adjust height as needed
                        filter: 'invert(1) brightness(2)', // Make the black icon white
                    }} /></a>
                </div>
            </div>

        </div>
    )
}

export default Footer
