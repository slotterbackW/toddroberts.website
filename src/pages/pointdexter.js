import React from 'react'

import MainLayout from './../components/main-layout.js'
import Nav from './../components/nav.js'
import Footer from './../components/footer.js'

import PointdexterMovie from './../assets/Pointdexter/pointdexter_video.mp4'
import ToddPointdexter from './../assets/Pointdexter/todd_pointdexter.png'
import ModeSwitch from './../assets/Pointdexter/Mode-switch.JPG'
import UrethaneMold from './../assets/Pointdexter/Urethane_Split_Mold.JPG'

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
        Video is not supported in this browser
      </video>
      <h2 className="margin-0">Project Summary</h2>
      <p>Pointdexter, a prosthetic finger, combines the functional utility of split-hook terminal devices with the aesthetics and conformal grasping of multi-articulating hands by enhancing the functionality of the index finger. The design allows for better small object manipulation by providing a dexterous mechanism and allowing users to see objects with less obstruction than with bulkier standard prosthetic grippers. The end-effector has two tongs that resemble pliers inspired by the highly functional powered split-hook terminal devices. Users can switch between finger mode and Pointdexter mode with a mechanical switch. It is a discreet, compact design that maintains anthropomorphic aesthetics and function while providing an additional grasping option.</p>
      <img src={ToddPointdexter} alt="Todd holding pointdexter device" width="50%"/>
      <h2 className="margin-0">My Role</h2>
      <p>My six month experience at Liberating Technologies Inc (LTI) was my third and final undergraduate co-op and cemented my desire to work in the assistive device industry. While at LTI, I worked on several projects, but Pointdexter was by far the largest one. During the course of the project I designed several versions of the mechanical mode-switch mechanism. The first iteration can be seen in the image below.  I was able to rapidly prototype new iterations using a combination of Solidworks CAD software, SLA and FDM 3D printing technologies, and machine tools. Once the design was finalized, I worked with third party vendors to have all of the parts machined from aluminum.</p>
      <img src={ModeSwitch} alt="Mode switch diagram of the pointdexter device" width="80%"/>
      <p className=“caption”>First iteration of mechanical mode-switch that allows user to unilaterally switch between Finger and Pointdexter mode.</p>
      <p>The robust aluminum prototype was then used to conduct several functional outcome studies with prosthesis users. One of the major points of feedback was that the aluminum tongs were too slippery. Small items would simply pop out of the tongs unless they were grabbed in just the right orientation. To fix this issue my team decided to cast a soft material around the tips. I was assigned this task and developed a two part split mold that allowed us to cast urethane over the aluminum parts in-house. I used SLA 3D printing, precision pins, and traditional datuming strategies I learned while working on the dimensional engineering team at Tesla to create a robust and repeatable process. An image of the split mold, aluminum substrate, and the finished product can be seen below. Users in subsequent studies found the rubber tips to be far more effective. I am listed as a co-inventor on the provisional patent filed for this device.</p>
      <img src={UrethaneMold} alt="Urethane Split Mold" width="80%" />
      <p className="caption">1) 3D printed split mold. 2) 3D printed split mold with aluminum substrate. 3) Mold opened after urethane casting and curing. 4) Assembled Pointdexter finger with urethane tips.</p>
      <h2 className="margin-0">Skills Developed</h2>
      <ul className="bulleted-list">
        <li>Rapid prototyping</li>
        <li>CAD</li>
        <li>3D printing and machining</li>
        <li>Linkage design and kinematic analysis</li>
        <li>User study design, implementation, and analysis</li>
        <li>Urethane and silicone mold design</li>
        <li>Communication with third party vendors</li>
      </ul>
    </div>
    <Footer/>
  </MainLayout>
)

export default Pointdexter
