import React, { Component } from 'react';

import MainLayout from './../components/main-layout.js'
import Nav from './../components/nav.js'
import Footer from './../components/footer.js'

import ResumePDF from './../assets/Todd Roberts Resume 2017.pdf'

export default class Resume extends Component {
  render() {
    return (
      <MainLayout>
      <Nav/>
      <div className="main" id="top">
      <div className="title-container">
          <h1>Resum&eacute;</h1>
        </div>
        <iframe src={ResumePDF} alt="Resume" height="1200px" title="My Resume"></iframe>
      </div>
      <Footer/>
      </MainLayout>
    );
  }
}
