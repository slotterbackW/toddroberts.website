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
      <p>Welcome! I am a driven problem solver and engineer with a passion for assistive technology. I grew up in southern Maryland eating the best crab cakes in the world and constantly tinkering with anything I could get my hands on. My early love for building legos and generally understanding how things work grew into a strong interest in engineering.</p>
      <p>Throughout my undergraduate career at Northeastern University I was heavily involved in the student club Enabling Engineering developing low cost devices for individuals with physical or cognitive disabilities. I also conducted research on physical therapy devices and orthoses, and during my third and final co-op worked for a prosthetic and orthotic R&D company. In my senior year, I completed my capstone design project with Lyndra Therapeutics, a pharmaceutical company tackling the massive problem of medication non-adherence. Over the course of 6 months I worked on a team of 5 students to develop an anatomically representative stomach environment capable of replicating the digestive forces in a human stomach. At the end of our project a provisional patent was filed for the novel technology and the device was delivered to the sponsor allowing them to speed up the development of their therapeutic technology. Observing the impact engineering can have on individual lives through these experiences has cemented my desire to work in the assistive technology industry.</p>
      <p>I am currently continuing my education as a mechanical engineering graduate student at the University of California, Berkeley. I am focusing on biomechanics in an attempt to further my knowledge of how to safely and effectively assist the human body. When I am not in class I can be found skateboarding, playing soccer, or making videos with friends. This website highlights some of my personal, academic, and professional experiences and projects. Please have a look around!</p>
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
