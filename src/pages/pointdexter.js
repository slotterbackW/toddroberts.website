import React from 'react'

import MainLayout from './../components/main-layout.js'
import Nav from './../components/nav.js'
import Footer from './../components/footer.js'

import PointdexterMovie from './../assets/Pointdexter/pointdexter_video.mp4'
import ToddPointdexter from './../assets/Pointdexter/todd_pointdexter.png'
import ModeSwitch from './../assets/Pointdexter/Mode-switch.JPG'

import './../styles/style.css'

const Pointdexter = (props) => (
  <MainLayout>
    <Nav/>
    <div className="main" id="top">
      <div className="title-container">
        <h1>Liberating Technologies Inc.</h1>
        <p className="subtitle">January 2018 - July 2018 <span className="vertical-seperator"></span> Research Engineer Co-op</p>
      </div>
      <video width="100%" controls>
        <source src={PointdexterMovie} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2 className="margin-0">Project Summary</h2>
      <p>Pointdexter, a prosthetic finger, combines the functional utility of split-hook terminal devices with the aesthetics and conformal grasping of multi-articulating hands by enhancing the functionality of the index finger. The design allows for better small object manipulation by providing a dexterous mechanism and allowing users to see objects with less obstruction than with bulkier standard prosthetic grippers. The end-effector has two tongs that resemble pliers inspired by the highly functional powered split-hook terminal devices. Users can switch between finger mode and Pointdexter mode with a mechanical switch. It is a discreet, compact design that maintains anthropomorphic aesthetics and function while providing an additional grasping option.</p>
      <img src={ToddPointdexter} alt="Todd holding pointdexter device" width="50%"/>
      <h2 className="margin-0">My Role</h2>
      <p>My six month experience at Liberating Technologies Inc (LTI) was my third and final undergraduate co-op and cemented my desire to work in the assistive device industry. While at LTI, I worked on several projects, but Pointdexter was by far the largest one. During the course of the project I designed several versions of the mechanical mode-switch mechanism. I was able to rapidly prototype new iterations using a combination of Solidworks CAD software, SLA and FDM 3D printing technologies, and machine tools. Once the design was finalized, I worked with third party vendors to have all of the parts machined from aluminum. This more robust prototype was then used to…………………...</p>
      <img src={ModeSwitch} alt="Mode switch diagram of the pointdexter device" width="80%"/>
      <p className="caption">...</p>
    </div>
    <Footer/>
  </MainLayout>
)

export default Pointdexter
