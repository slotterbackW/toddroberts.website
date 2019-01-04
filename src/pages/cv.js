import React from 'react'

import MainLayout from './../components/main-layout.js'
import Nav from './../components/nav.js'
import Footer from './../components/footer.js'

import CVPDF from './../assets/Todd Roberts CV_2019.pdf'

const CV = (props) => (
  <MainLayout>
    <Nav/>
    <div className="main" id="top">
    <div className="title-container">
        <h1>Curriculum Vitae</h1>
      </div>
      <iframe src={CVPDF} alt="Curriculum Vitae" height="1200px" title="Curriculum Vitae"></iframe>
    </div>
    <Footer/>
  </MainLayout>
)

export default CV;
