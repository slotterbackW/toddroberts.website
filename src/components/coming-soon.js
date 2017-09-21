import React, { Component } from 'react';

import MainLayout from './main-layout.js'
import Nav from './nav.js'
import Footer from './footer.js'
import { Link } from 'react-router'

import './../styles/coming-soon.css'

export default class CSWA extends Component {
  render() {
    return (
      <MainLayout>
        <Nav/>
        <div className="coming-soon-container">
            <h1>Coming Soon</h1>
            <p>I am actively working on this page, and I promise it will be up soon. For now please check out one of my other projects.</p>
            <p>I suggest <Link to="/Enabling_Engineering/X-Max">X-Max</Link>.</p>
        </div>
        <Footer/>
      </MainLayout>
    );
  }
}
