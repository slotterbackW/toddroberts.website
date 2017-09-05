import React, { Component } from 'react';

import MainLayout from './../components/main-layout.js'
import Nav from './../components/nav.js'
import Footer from './../components/footer.js'

export default class DOTS extends Component {
  render() {
    return (
      <MainLayout>
        <Nav/>
        <p>DOTS</p>
        <Footer/>
      </MainLayout>
    );
  }
}
