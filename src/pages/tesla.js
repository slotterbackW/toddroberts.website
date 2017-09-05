import React, { Component } from 'react';

import MainLayout from './../components/main-layout.js'
import Nav from './../components/nav.js'
import Footer from './../components/footer.js'

export default class Tesla extends Component {
  render() {
    return (
      <MainLayout>
        <Nav/>
        <p>TESLA</p>
        <Footer/>
      </MainLayout>
    );
  }
}
