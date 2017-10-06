import React from 'react'

import MainLayout from './../components/main-layout.js'
import Nav from './../components/nav.js'
import Footer from './../components/footer.js'

const EnablingVideography = (props) => (
  <MainLayout>
    <Nav/>
    <div className="main" id="top">
      <div className="title-container">
        <h1>Enabling Engineering Interviews</h1>
      </div>
      <p>Apart from my engineering role in the student club Enabling Engineering, I have had the chance to use my videography skills to help the club. Last spring I filmed all of the active groups and created videos showcasing the work that they had accomplished and the end users they have helped. These videos have helped the club to spread awareness of our cause, recruit new members, and raise funds. Check out the Enabling Facebook page to view the videos I created.</p>
      <a href="https://www.facebook.com/EnablingEngineering/" target="_blank">https://www.facebook.com/EnablingEngineering/ </a>
    </div>
    <Footer/>
  </MainLayout>
)

export default EnablingVideography;
