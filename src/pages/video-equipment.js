import React from 'react'

import MainLayout from './../components/main-layout.js'
import Nav from './../components/nav.js'
import Footer from './../components/footer.js'

import Dolly1 from './../assets/video_equipment/dolly1.JPG'
import Dolly2 from './../assets/video_equipment/dolly2.JPG'
import Dolly3 from './../assets/video_equipment/dolly3.JPG'
import Stabilizer1 from './../assets/video_equipment/stabilizer1.jpg'
import Stabilizer2 from './../assets/video_equipment/stabilizer2.jpg'

const VideoEquipment = (props) => (
  <MainLayout>
    <Nav/>
    <div className="main" id="top">
      <div className="title-container">
        <h1>Video Equipment</h1>
      </div>
      <h2>Dolly</h2>
      <p>I wanted to obtain very smooth panning video shots, but could not afford to purchase a professional dolly. So I designed my own. The basic design is based on other homemade dollies I found on the internet, but I designed my own caster wheel system that allows the dolly to run on a straight or curved track. I made several sets of technical drawings and paper prototypes. Then I machined the real pieces out of aluminum. During the project I learned how to precisely drill, cut, and grind aluminum as well as use a riveter. </p>
      <div className="row">
        <div className="col-4">
          <img src={Dolly1} alt="Camera Dolly angle 1" width="100%"/>
        </div>
        <div className="col-4">
          <img src={Dolly2} alt="Camera Dolly angle 2" width="100%"/>
        </div>
        <div className="col-4">
          <img src={Dolly3} alt="Camera Dolly angle 3" width="100%"/>
        </div>
      </div>
      <h2>Handheld Stabilizer</h2>
      <p>I created this homemade stabilizer rig to allow me to capture handheld video and mount various accessories. The rig can handle cameras ranging in size from a GoPro to a DSLR and not only helps make a smoother shot, but also acts as a protective roll cage. I have used this rig to film everything from stationary interviews to high paced skateboarding.</p>
      <div className="row">
        <div className="col-6">
          <img src={Stabilizer1} alt="Stabilizer angle 1" width="100%"/>
        </div>
        <div className="col-6">
          <img src={Stabilizer2} alt="Stabilizer angle 2" width="100%"/>
        </div>
      </div>
    </div>
    <Footer/>
  </MainLayout>
)

export default VideoEquipment
