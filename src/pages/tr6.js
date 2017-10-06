import React from 'react'

import MainLayout from './../components/main-layout.js'
import Nav from './../components/nav.js'
import Footer from './../components/footer.js'

import TR1 from './../assets/tr6/tr6_1.jpg'
import TR2 from './../assets/tr6/tr6_2.JPG'
import TR3 from './../assets/tr6/tr6_3.JPG'
import TR4 from './../assets/tr6/tr6_4.JPG'
import TR5 from './../assets/tr6/tr6_5.JPG'
import TR6_1 from './../assets/tr6/tr6_6.JPG'

const TR6 = (props) => (
  <MainLayout>
    <Nav/>
    <div className="main" id="top">
      <div className="title-container">
        <h1>Triumph TR6</h1>
      </div>
      <div className="row">
        <div className="col-6">
          <img src={TR1} alt="Camera Dolly angle 1" width="100%"/>
        </div>
        <div className="col-6">
          <img src={TR6_1} alt="Camera Dolly angle 2" width="100%"/>
        </div>
      </div>
      <p>My dad and I are currently in the process of rebuilding a 1974 British Triumph TR6. When the car was purchased  it had been sitting underneath a tarp for about 30 years, so we stripped it down to the chassis and are now building it back up. During the project I have had the opportunity to use many unique tools including torque wrenches, grinders, and pneumatic drills. I have also gained a better understanding of the inner workings of a car, including the engine, transmission, and wiring harness.</p>
      <div className="row">
        <div className="col-6">
          <img src={TR3} alt="Stabilizer angle 1" width="100%"/>
        </div>
        <div className="col-6">
          <img src={TR4} alt="Stabilizer angle 2" width="100%"/>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <img src={TR5} alt="Stabilizer angle 1" width="100%"/>
        </div>
        <div className="col-6">
          <img src={TR2} alt="Stabilizer angle 2" width="100%"/>
        </div>
      </div>
    </div>
    <Footer/>
  </MainLayout>
)

export default TR6
