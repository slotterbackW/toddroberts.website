import React from 'react'

import MainLayout from './../components/main-layout.js'
import Nav from './../components/nav.js'
import Footer from './../components/footer.js'

import Chair1 from './../assets/furniture/chair1.mp4'
import Chair2 from './../assets/furniture/chair2.mp4'
import ShelfDesign from './../assets/furniture/shelf design.JPG'
import ShelfFinished from './../assets/furniture/shelf finished.jpg'

const Furniture = (props) => (
  <MainLayout>
  <Nav/>
  <div className="main" id="top">
    <div className="title-container">
      <h1>Custom Furniture</h1>
    </div>
    <h2>Wall Hanging Chair</h2>
    <p>In my senior of high school I took Design and Engineering, a class where we were tasked with designing an affordable, foldable, and functional chair. We had to work with a partner to design the chair and then create a presentation, which included a price break down and feasibility analysis to convince our professor to allow us to build it . Then we created full scale technical drawings, multiple prototypes, and finally the finished product shown below. During this project I gained more hands on assembly experience and a better understanding of the engineering design process.</p>
    <div className="row">
      <div className="col-6">
        <video width="90%" controls>
          <source src={Chair1} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="col-6">
        <video width="90%" controls>
          <source src={Chair2} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <h2 id="CAD">Bookshelf</h2>
    <p>My Boston apartment has some rather interesting ceiling architecture and is not conducive to traditional IKEA furniture. Instead of leaving my things piled on the floor, I designed and built a bookshelf that would fit the tight triangular space next to my desk. I measured the space and then used Solidworks to visualize and design how my shelf was going to fit.</p>
    <div className="row">
      <div className="col-7">
        <img src={ShelfDesign} alt="Shelf design" width="100%"/>
      </div>
      <div className="col-5">
        <img src={ShelfFinished} alt="Finished shelf" width="100%"/>
      </div>
    </div>
  </div>
  <Footer/>
</MainLayout>
)

export default Furniture
