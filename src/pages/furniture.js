import React, { Component } from 'react';

import MainLayout from './../components/main-layout.js'
import Nav from './../components/nav.js'
import Footer from './../components/footer.js'

export default class Furniture extends Component {
  render() {
    return (
      <MainLayout>
        <Nav/>
        <p>Furniture</p>
        <Footer/>
      </MainLayout>
    );
  }
}
