import React from 'react'

import { slide as Menu } from 'react-burger-menu'
import Collapsible from 'react-collapsible';
import { Link } from 'react-router'

import './../styles/nav.css'

export default class Nav extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }
    render() {
        return (
            <Menu>
                <Link to="/"><span className="nav-link">Home</span></Link>
                <Collapsible trigger="Enabling Engineering">
                    <p><Link to="/Enabling_Engineering/X-Max#top">X-Max</Link></p>
                    <p><Link to="/Enabling_Engineering/FITBoard#top">FITBoard</Link></p>
                </Collapsible>
                <Collapsible trigger="Personal Projects">
                    <p><Link to="/Projects/Twist&Co#top">Twist & Co.</Link></p>
                    <p><Link to="/Projects/Furniture#top">Furniture</Link></p>
                    <p><Link to="/Projects/Skateboards#top">Skateboards</Link></p>
                    <p><Link to="/Projects/Video_Equipment#top">Video Equipment</Link></p>
                    <p><Link to="/Projects/TR-6#top">Triumph TR-6</Link></p>
                </Collapsible>
                <Collapsible trigger="CAD Samples">
                    <p><Link to="/CAD_Samples/CSWA_Certification#top">CSWA Certification</Link></p>
                    <p><Link to="/Enabling_Engineering/X-Max#CAD">X-Max</Link></p>
                    <p><Link to="/Enabling_Engineering/FITBoard#CAD">FITBoard</Link></p>
                    <p><Link to="/Projects/Twist&Co#CAD">Twist & Co.</Link></p>
                    <p><Link to="/Projects/Furniture#CAD">Bookshelf</Link></p>
                </Collapsible>
                <Collapsible trigger="Videography">
                    <p><Link to="/Videography/Enabling_Engineering#top">Enabling Engineering</Link></p>
                    <p><Link to="/Videography/TEDx_Boulder#top">TEDx Boulder</Link></p>
                </Collapsible>
                <Link to="/Resume#top"><span className="nav-link">Resum&eacute;</span></Link>
            </Menu>
        )
    }
}