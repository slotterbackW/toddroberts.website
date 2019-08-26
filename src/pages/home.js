import React from 'react'
import { Link } from 'react-router'

import MainLayout from './../components/main-layout.js'
import Nav from './../components/nav.js'
import Footer from './../components/footer.js'

import HawaiiPhoto from './../assets/todd_hawaii.JPG'
import XMaxPhoto from './../assets/XMax/XMax_Profile.JPG'
import PointdexterPhoto from './../assets/Pointdexter/Pointdexter.JPG'
import CapstonePhoto from './../assets/Capstone/CapstoneTeam.jpg'

const Home = (props) => (
  <MainLayout>
    <Nav/>
    <div className="main">
      <h1>Todd Roberts</h1>
      <p>I am a Mechanical Engineering student at Northeastern University whose strong suits are creative prototyping, mechanical design, and hands on assembly. I grew up in southern Maryland eating the best crab cakes in the world and constantly tinkering with anything I could get my hands on. My love for building and understanding how products work, coupled with my ability to pick up new skills quickly, developed into a passion for engineering. When I am not working towards my degree I can be found skateboarding, playing soccer, or making short films with friends. I am also heavily involved with Enabling Engineering, a student run club in which I design and build low-cost devices that improve the lives of individuals with physical or cognitive disabilities.</p>
      <img src={HawaiiPhoto} width="90%" alt="Todd Profile"/>
      <h2>Featured Projects</h2>
      <div className="row">
        <div className="col-4">
          <Link to="/Enabling_Engineering/X-Max#top" className="featured-project-link">
            <img src={XMaxPhoto} alt="XMax Project" width="100%"/>
            <h3>XMax</h3>
          </Link>
        </div>
        <div className="col-4">
          <Link to="/Professional_Experience/Liberating_Technologies_Inc/Pointdexter#top" className="featured-project-link">
            <img src={PointdexterPhoto} alt="Pointdexter Project" width="100%"/>
            <h3>Liberating Technologies Inc.</h3>
          </Link>
        </div>
        <div className="col-4">
          <Link to="/Enabling_Engineering/X-Max#top" className="featured-project-link">
            <img src={CapstonePhoto} alt="Capstone Project" width="100%"/>
            <h3>Capstone</h3>
          </Link>
        </div>
      </div>
    </div>
    <Footer/>
  </MainLayout>
)

export default Home
