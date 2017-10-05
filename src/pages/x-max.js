import React from 'react'

import MainLayout from './../components/main-layout.js'
import Nav from './../components/nav.js'
import { Carousel } from 'react-responsive-carousel'
import Footer from './../components/footer.js'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './../styles/style.css'

import MaxMadden from './../assets/XMax/Max Playing Madden_1920.jpg'
import XMaxTeam from './../assets/XMax/XMax Team_1920.jpg'
import XMaxAfter from './../assets/XMax/XMax_After.JPG'
import XMaxBefore from './../assets/XMax/XMax_Before.JPG'
import XMaxAssembly from './../assets/XMax/XMAX full Assembly.JPG'
import XMaxAssembly2 from './../assets/XMax/XMAX full Assembly 2.JPG'
import XMaxAssembly3 from './../assets/XMax/XMAX button Assembly 3.JPG'
import XMaxAssembly4 from './../assets/XMax/XMAX button Assembly 4.JPG'
import LEDController from './../assets/XMax/LED Controller.JPG'

const XMax = (props) => (
  <MainLayout>
    <Nav/>
    <div className="main" id="top">
      <div className="title-container">
        <h1>X-Max Game Controller</h1>
        <p className="subtitle">January 2016 - Present <span className="vertical-seperator"></span> Project Leader and Mechanical Design Engineer</p>
      </div>
      <img src={MaxMadden} alt="Max playing Madden" width="90%"/>
      <p>Max Plansky is a 17-year-old kid who loves video games. Max also has been diagnosed with cerebral palsy and has very limited mobility. Currently, in order for him to play video games he dictates to someone else what he would like to do and they play for him. I am the project leader of a seven-person team, backed by Enabling Engineering, that is creating a custom controller which will allow Max to play video games independently. Max’s strongest muscle is his neck, so the controller is designed to be operated with his head. As the sole mechanical engineer during the first part of this project, I was responsible for the design and construction of all physical components. I designed the first prototype from scratch and built it out of plywood, PVC, Loc-Line modular hose, custom 3D printed parts and an assortment of GoPro hardware. I created the 3-D printed components in SolidWorks and then printed them using a university printer. The team has since expanded and we are now working on the second version of our device. During this project I have gained significant experience with the engineering design process, budgeting, and troubleshooting. More importantly I have had the chance to use my skills as an engineer to better the life of another individual.</p>
      <img src={XMaxTeam} alt="The team working on Xmax" width="90%"/>
      <div className="row">
        <div className="col-6">
          <img src={XMaxBefore} alt="XMax in its raw stage" width="100%"/>
        </div>
        <div className="col-6">
          <img src={XMaxAfter} alt="XMax in its more final form" width="100%"/>
        </div>
      </div>
      <p>This project is just one of the many student projects in the university club, Enabling Engineering. To learn more about our club, you can visit <a href="http://nuweb9.neu.edu/enable/" target="_blank" rel="noopener noreferrer">this website</a> or check out <a href="https://www.facebook.com/EnablingEngineering/" target="_blank" rel="noopener noreferrer">the Facebook page</a>.</p>
      <h2 id="CAD">CAD</h2>
      <p>Below are screenshots of the X-Max Assembly. The parts highlighted in purple are the parts I created in SolidWorks and then 3D printed. They allow the store bought buttons to interface with the flexible GoPro assembly. The yellow box is 3/4in plywood and houses all of the electronics. The white tubes are PVC and the button assemblies are made from GoPro hardware and Loc-Line modular hose. These components The four legs attached to the back of the box are used to mount the unit to the chair. The bottom two are made from an old tripod allowing the angle of the entire unit to be adjusted.</p>
      <Carousel showArrows={true} infiniteLoop={true} emulateTouch={true} showThumbs={false} dynamicHeight={true}>
        <div><img src={XMaxAssembly} alt="XMax CAD component"/></div>
        <div><img src={XMaxAssembly2} alt="XMax CAD component"/></div>
        <div><img src={XMaxAssembly3} alt="XMax CAD component"/></div>
        <div><img src={XMaxAssembly4} alt="XMax CAD component"/></div>
      </Carousel>
      <p>I created the below component in SolidWorks to hold an array of LED’s. The component sits in front of the user and when they press a button with their head the LED in the location of the corresponding button on a traditional controller lights up. This provides the user instant feedback and helps them learn the controls.</p>
      <img src={LEDController} alt="XMax LED Controller" width="60%"/>
    </div>
    <Footer/>
  </MainLayout>
)

export default XMax;
