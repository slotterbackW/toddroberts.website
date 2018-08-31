import React from 'react'

import MainLayout from './../components/main-layout.js'
import Nav from './../components/nav.js'
import Footer from './../components/footer.js'

import HawaiiPhoto from './../assets/todd_hawaii.JPG'

const Home = (props) => (
  <MainLayout>
    <Nav/>
    <div className="main">
      <h1>Todd Roberts</h1>
      <img src={HawaiiPhoto} width="90%" alt="Todd Profile"/>
      <p>I am a Mechanical Engineering student at Northeastern University whose strong suits are creative prototyping, mechanical design, and hands on assembly. I grew up in southern Maryland eating the best crab cakes in the world and constantly tinkering with anything I could get my hands on. My love for building and understanding how products work, coupled with my ability to pick up new skills quickly, developed into a passion for engineering. When I am not working towards my degree I can be found skateboarding, playing soccer, or making short films with friends. I am also heavily involved with Enabling Engineering, a student run club in which I design and build low-cost devices that improve the lives of individuals with physical or cognitive disabilities.</p>
    </div>
    <Footer/>
  </MainLayout>
)

export default Home
