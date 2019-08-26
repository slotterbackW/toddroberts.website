import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import './styles/simple-grid.css'
import './styles/style.css'

import Home from './pages/home.js'
import SeniorCapstone from './pages/seniorcapstone.js'
import CV from './pages/cv.js'
import Pointdexter from './pages/pointdexter.js'
// import DOTS from './pages/dots.js'
// import NAVAIR from './pages/navair.js'
// import Tesla from './pages/tesla.js'
import FitBoard from './pages/fitboard.js'
import Furniture from './pages/furniture.js'
import PosturalReaching from './pages/postural-reaching.js'
import Skateboards from './pages/skateboards.js'
import TR6 from './pages/tr6.js'
import TwistCo from './pages/twistco.js'
import VideoEquipment from './pages/video-equipment.js'
import XMax from './pages/x-max.js'
import CSWA from './pages/cswa.js'
import EnablingEngineering from './pages/enabling-videography.js'
import TEDxBoulder from './pages/tedx-boulder.js'

const hashLinkScroll = () => {
    const { hash } = window.location;
    if (hash !== '') {
      // Push onto callback queue so it runs after the DOM is updated,
      // this is required when navigating from a different page so that
      // the element is rendered on the page before trying to getElementById.
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) element.scrollIntoView();
      }, 0);
    }
}

const routes = (
    <Router history={browserHistory} onUpdate={hashLinkScroll}>
        <Route path="/" component={Home}/>
        <Route path="/Senior_Capstone" component={SeniorCapstone}/>
        <Route path="/CV" component={CV}/>
        <Route path="/Professional_Experience/Liberating_Technologies_Inc/Pointdexter" component={Pointdexter}/>
        {
          // Not ready yet
          // <Route path="/Professional_Experience/DOTS" component={DOTS}/>
          // <Route path="/Professional_Experience/NAVAIR" component={NAVAIR}/>
          // <Route path="/Professional_Experience/Tesla" component={Tesla}/>
        }
        <Route path="/Enabling_Engineering/FitBoard" component={FitBoard}/>
        <Route path="/Enabling_Engineering/X-Max" component={XMax}/>
        <Route path="/Projects/Furniture" component={Furniture}/>
        <Route path="/Projects/Postural_Reaching" component={PosturalReaching}/>
        <Route path="/Projects/Skateboards" component={Skateboards}/>
        <Route path="/Projects/TR-6" component={TR6}/>
        <Route path="/Projects/Twist&Co" component={TwistCo}/>
        <Route path="/Projects/Video_Equipment" component={VideoEquipment}/>
        <Route path="/CAD_Samples/CSWA_Certification" component={CSWA}/>
        <Route path="/Videography/Enabling_Engineering" component={EnablingEngineering}/>
        <Route path="/Videography/TEDx_Boulder" component={TEDxBoulder}/>
        <Route path="*" component={Home}/>
    </Router>
)

ReactDOM.render(routes, document.getElementById('app'))
