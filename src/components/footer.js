import React from 'react'

import './../styles/footer.css'
import { Link } from 'react-router'

const Footer = (props) => (
    <div className="row footer">
        <div className="container">
            <div className="col-6">
                <h3>Projects</h3>
                <ul>  
                    <li><Link to="/Enabling_Engineering/X-Max#top">X-Max</Link></li>
                    <li><Link to="/Enabling_Engineering/FITBoard#top">FITBoard</Link></li>
                    <li><Link to="/Projects/Twist&Co#top">Twist & Co.</Link></li>
                    <li><Link to="/Projects/Furniture#top">Furniture</Link></li>
                    <li><Link to="/Projects/Skateboards#top">Skateboards</Link></li>
                    <li><Link to="/Projects/Video_Equipment#top">Video Equipment</Link></li>
                    <li><Link to="/Projects/TR-6#top">Triumph TR-6</Link></li>
                    <li><Link to="/Videography/Enabling_Engineering#top">Enabling Engineering</Link></li>
                    <li><Link to="/Videography/TEDx_Boulder#top">TEDx Boulder</Link></li>
                </ul>
            </div>
            <div className="col-6">
                <h3>Find out more</h3>
                <ul>  
                    <li><a href="https://www.linkedin.com/in/todd-roberts-1ab973115" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><Link to="/Resume#top"><span>Resum&eacute;</span></Link></li>
                </ul>
                <h3>Contact Me</h3>
                <a href="mailto:roberts.to@husky.neu.edu">roberts.to@husky.neu.edu</a>
            </div>
        </div>
    </div>
)

export default Footer;