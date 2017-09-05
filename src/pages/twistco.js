import React, { Component } from 'react';

import MainLayout from './../components/main-layout.js'
import Nav from './../components/nav.js'
import Footer from './../components/footer.js'

export default class TwistCo extends Component {
  render() {
    return (
      <MainLayout>
        <Nav/>
        <p>TWIST & CO.</p>
        <Footer/>
      </MainLayout>
    );
  }
}
