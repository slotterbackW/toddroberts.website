import React, { Component } from 'react';

import MainLayout from './../components/main-layout.js'
import Nav from './../components/nav.js'
import Footer from './../components/footer.js'

export default class TR6 extends Component {
  render() {
    return (
      <MainLayout>
        <Nav/>
        <p>TR-6</p>
        <Footer/>
      </MainLayout>
    );
  }
}
