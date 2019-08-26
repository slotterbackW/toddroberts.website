import React from 'react'

import MainLayout from './../components/main-layout.js'
import Nav from './../components/nav.js'
import Footer from './../components/footer.js'

import './../styles/style.css'

const SeniorCapstone = (props) => (
  <MainLayout>
    <Nav/>
    <div className="main" id="top">
      <div className="title-container">
        <h1>X-Max Game Controller</h1>
        <p className="subtitle">January 2016 - Present <span className="vertical-seperator"></span> Project Leader and Mechanical Design Engineer</p>
      </div>
    </div>
    <Footer/>
  </MainLayout>
)

export default SeniorCapstone
