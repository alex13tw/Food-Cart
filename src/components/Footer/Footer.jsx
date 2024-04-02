import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.logo}></img>
                    <p>It must be pure, should take the pending state as its only argument, and should return the next state. React will put your updater function in a queue and re-render your component. During the next render, React will calculate the next state by applying all of the queued updaters to the previous state.</p>
                    <div className='footer-social-icon'>
                        <img src={assets.facebook_icon}></img>
                        <img src={assets.twitter_icon}></img>
                        <img src={assets.linkedin_icon}></img>

                    </div>
                </div>

                <div className='footer-content-center'>
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Pravicy Policy</li>

                    </ul>
                </div>

                <div className='footer-content-right'>
                        <h2>Get In Touch</h2>
                        <ul>
                            <li>+91 987654321</li>
                            <li>www.index@gmail.com</li>
                        </ul>
                </div>

        </div>

            <hr />
            <p className='footer-copy-right'> Copy Right 2019</p>
       
    </div>
  )
}

export default Footer
