import React from 'react'

import Collapsible from 'react-collapsible';
import { Link } from 'react-router'

import './../styles/nav.css'

export default class Nav extends React.Component {
    render() {
        return (
            <div className="nav">
                <Link to="/"><img alt="Todd's Logo" className="nav__logo" src="http://placehold.it/100x100"/></Link>
                <Collapsible trigger="Professional Experience">
                    <p><Link to="/Professional_Experience/Tesla">Tesla Inc.</Link></p>
                    <p><Link to="/Professional_Experience/DOTS">DOTS Technology Corp</Link></p>
                    <p><Link to="/Professional_Experience/NAVAIR">NAVAIR</Link></p>
                </Collapsible>
                <Collapsible trigger="Enabling Engineering">
                    <p><Link to="/Enabling_Engineering/X-Max#top">X-Max</Link></p>
                    <p><Link to="/Enabling_Engineering/FITBoard#top">FITBoard</Link></p>
                </Collapsible>
                <Collapsible trigger="Personal Projects">
                    <p><Link to="/Projects/Twist&Co#top">Twist & Co.</Link></p>
                    <p><Link to="/Projects/Furniture">Furniture</Link></p>
                    <p><Link to="/Projects/Skateboards">Skateboards</Link></p>
                    <p><Link to="/Projects/Video_Equipment">Video Equipment</Link></p>
                    <p><Link to="/Projects/TR-6">Triumph TR-6</Link></p>
                </Collapsible>
                <Collapsible trigger="CAD Samples">
                    <p><Link to="/CAD_Samples/CSWA_Certification#top">CSWA Certification</Link></p>
                    <p><Link to="/Enabling_Engineering/X-Max#CAD">X-Max</Link></p>
                    <p><Link to="/Enabling_Engineering/FITBoard#CAD">FITBoard</Link></p>
                    <p><Link to="/Projects/Twist&Co#CAD">Twist & Co.</Link></p>
                    <p><Link to="/CAD_Samples/Bookshelf">Bookshelf</Link></p>
                </Collapsible>
                <Collapsible trigger="Videography">
                    <p><Link to="/Videography/Enabling_Engineering">Enabling Engineering</Link></p>
                    <p><Link to="/Videography/TEDx_Boulder">TEDx Boulder</Link></p>
                </Collapsible>
            </div>
        )
    }
}