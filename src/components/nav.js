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
                    <p><Link to="/Enabling_Engineering/X-Max">X-Max</Link></p>
                    <p><Link to="/Enabling_Engineering/FITBoard">FITBoard</Link></p>
                </Collapsible>
                <Collapsible trigger="Personal Projects">
                    <p><Link to="/Projects/Twist&Co">Twist & Co.</Link></p>
                    <p><Link to="/Projects/Furniture">Furniture</Link></p>
                    <p><Link to="/Projects/Skateboards">Skateboards</Link></p>
                    <p><Link to="/Projects/Video_Equipment">Video Equipment</Link></p>
                    <p><Link to="/Projects/TR-6">Triumph TR-6</Link></p>
                </Collapsible>
                <Collapsible trigger="CAD Samples">
                    <p><Link to="/Enabling_Engineering/X-Max#CADsample">X-Max</Link></p>
                    <p><Link to="">FITBoard</Link></p>
                    <p><Link to="">Twist & Co.</Link></p>
                    <p><Link to="">Bookshelf</Link></p>
                </Collapsible>
                <Collapsible trigger="Videography">
                    <p><Link to="">Enabling Engineering</Link></p>
                    <p><Link to="">TEDx Boulder</Link></p>
                </Collapsible>
            </div>
        )
    }
}