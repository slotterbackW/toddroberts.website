import React from 'react'

import MainLayout from './../components/main-layout.js'
import Nav from './../components/nav.js'
import Footer from './../components/footer.js'

import CameraCrane from './../assets/videography/camera crane.jpg'

const TEDxBoulder = (props) => (
  <MainLayout>
    <Nav/>
    <div className="main" id="top">
      <div className="title-container">
        <h1>TEDx Boulder</h1>
        <p className="subtitle">2014<span className="vertical-seperator"></span>Assistant Videographer</p>
      </div>
      <img src={CameraCrane} alt="Todd holding a camera" width="100%"/>
      <p>In the spring of 2014 I completed a 2 week internship with a Colorado based video company called Enhancer Creative. During that time I was part of a 6 person video team who filmed TEDxBoulder. We filmed 15 speakers and performers and then I spent the next 6 months (as time allowed) editing all of the footage to be released on the TEDx youtube page. TED talks are a great way to communicate new and creative ideas and it was a great opportunity to get to help with this spread of knowledge. Below are the direct links to a few of my favorite speakers from the event:</p>
      <ul>
        <li>Music as a Visual Art: <a href="https://youtu.be/k7ngnWJ6Hks" target="_blank">https://youtu.be/k7ngnWJ6Hks</a></li>
        <li>Owning your Duality <a href="https://youtu.be/zYhgy5ouYLM" target="_blank">https://youtu.be/zYhgy5ouYLM</a></li>
        <li>Playlist of all 15 videos: <a href="https://www.youtube.com/watch?v=BR9dbjubfuU&list=PLhV8pUp3pnpcvYnuISfPKmV-orU0Q9Rms" target="_blank">https://www.youtube.com/watch?v=BR9dbjubfuU&list=PLhV8pUp3pnpcvYnuISfPKmV-orU0Q9Rms</a></li>
      </ul>
    </div>
    <Footer/>
  </MainLayout>
)

export default TEDxBoulder
