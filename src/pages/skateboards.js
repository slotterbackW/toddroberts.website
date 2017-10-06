import React from 'react'

import MainLayout from './../components/main-layout.js'
import Nav from './../components/nav.js'
import Footer from './../components/footer.js'

import HawaiiBoard from './../assets/skateboards/Hawaii Board 960X540.png'
import HoldingBoard from './../assets/skateboards/Pass The Vibes 960X1440.jpg'
import UmbrellaBoard from './../assets/skateboards/Umbrella Board 960X540.png'

const Skateboards = (props) => (
  <MainLayout>
  <Nav/>
  <div className="main" id="top">
    <div className="title-container">
      <h1>Custom Skateboards</h1>
    </div>
    <p>I grew up working on home projects with my dad in our wood shop, and learning how to skateboard on the concrete pad just outside of it. As time went on I figured out that I could combine these two hobbies and started building my own boards. Below are some examples of boards I have made. I cut and shaped the painted boards from pre pressed 7-ply maple blanks and then did the graphics with a combination of spray paint and paint pens. In order to quickly and consistently round the edges of the boards I bought a handheld router and then made a custom guide that could follow the multidimensional curves. I created the chevron board entirely from scratch, including cutting the bottom veneer, glueing and pressing the plies, and shaping.</p>
    <div className="row">
      <div className="col-12">
        <img src={HoldingBoard} alt="Twist technology in its fully extended form" width="100%"/>
      </div>
    </div>
    <div className="row">
      <div className="col-6">
        <img src={HawaiiBoard} alt="Twist technology in its compressed form" width="100%"/>
      </div>
      <div className="col-6">
        <img src={UmbrellaBoard} alt="View of fully extended twist technology from the base" width="100%"/>
      </div>
    </div>
  </div>
  <Footer/>
</MainLayout>
)

export default Skateboards
