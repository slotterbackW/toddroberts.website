import React, { Component } from 'react';

import { Link } from 'react-router'

import MainLayout from './../components/main-layout.js'
import Nav from './../components/nav.js'
import Footer from './../components/footer.js'

import XMaxImg from './../assets/XMax/XMAX full Assembly.JPG'
import TwistCoImg from './../assets/twistco/Nested Levels.JPG'
import FITBoardImg from './../assets/FITBoard/FITBoard_CAD.JPG'

import CSWACertificationPDF from './../assets/CSWA/CSWA Certificate.pdf'

export default class CSWA extends Component {
  render() {
    return (
      <MainLayout>
      <Nav/>
      <div className="main">
          <div className="title-container">
            <h1>CSWA Certification</h1>
            <p className="subtitle">December 5th 2015 <span className="vertical-seperator"></span> CSWA Certified</p>
          </div>
          <p>I am a Certified SolidWorks Associate and I have significant experience with both professional and personal CAD projects. I have created parts and drawings for machinists requiring tolerances down to 4 thousandths. Click on the thumbnails below to learn more about some of my work.</p>
          <div className="row">
            <div className="col-4">
              <Link to="/Enabling_Engineering/X-Max#CAD">
                <img src={XMaxImg} alt="XMax CAD Image" width="100%"/>
              </Link>
            </div>
            <div className="col-4">
              <Link to="/Projects/Twist&Co#CAD" className="flex-center">
                <img src={TwistCoImg} alt="Twist & Co CAD Image" width="63%"/>
              </Link>
            </div>
            <div className="col-4">
              <Link to="/Enabling_Engineering/FITBoard#CAD" className="flex-center">
                <img src={FITBoardImg} alt="FITBoard CAD Image" width="94%"/>
              </Link>
            </div>
          </div>
          <div className="flex-center">
            <iframe src={CSWACertificationPDF} alt="CSWA Certification PDF" height="600px" width="80%"></iframe>
          </div>
        </div>
      <Footer/>
    </MainLayout>
    );
  }
}
