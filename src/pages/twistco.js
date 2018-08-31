import React from 'react'

import MainLayout from './../components/main-layout.js'
import Nav from './../components/nav.js'
import Footer from './../components/footer.js'

import twistcoLogo from '../assets/twistco/twistCoLogo.png'
import twistcoMovie from '../assets/twistco/Twist & Co Demo.mp4'
import nestedLevels from '../assets/twistco/Nested Levels.JPG'
import compressedTwist from '../assets/twistco/compressed-twist.jpg'
import fullyExtended from '../assets/twistco/fully-extended-twist.jpg'
import fullyExtendedBottom from '../assets/twistco/fully-extended-bottom-twist.JPG'

const TwistCo = (props) => (
  <MainLayout>
    <Nav/>
    <div className="main" id="top">
    <div className="title-container">
      <img src={twistcoLogo} width="22%" alt="Twist & Co Logo"/>
      <p className="subtitle">Fall 2016<span className="vertical-seperator"></span>Lead Engineer</p>
    </div>
    <video width="90%" controls>
      <source src={twistcoMovie} type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
    <p><b>Project Summary:</b> In the fall of 2016 I was hired as an engineering consultant by a group of business students who were building a consumer product company called “Twist & Co” for a product development class. Below is the summary of the company's background that they used for their final presentation.</p>
    <p>“Twist & Co. began as an idea for how to make the experience of milk and cookies less messy and more efficient. As one visionary noted, “when the milk level gets lower, I have to reach my hand further into the cup to in order to dip my cookie!” While this sounded like a ridiculous problem to address, it began a line of questioning that ultimately resulted in Twist & Co. designing the world’s greatest food delivery packaging system.  We asked ourselves “what if packaged food and cooking experiences could be improved as a result of better packaging and technology?” At the onset, we recruited a talented mechanical engineer with whom we have worked with to develop novel, nested-level technology that literally elevates the food experience to another level.  With potentially numerous applications in business and consumer products, Twist & Co. is excited to pursue its mission of taking packaged food experiences to the next level.”</p>
    <img src={nestedLevels} width="45%" alt="Twist Technology CAD"/>
    <p><b>My Role: </b>When I was brought on to the project the team had moved past the milk and cookies idea and was trying to market a new chip canister with a raisable base to Pringles. They had some early sketches and concepts, but it was my job to design and construct a working prototype as well as advise on hypothetical large scale manufacturing processes. This initially sounded like a simple design challenge, but it became apparent to the financial team that the product would only be marketable to Pringles if it did not disrupt their current manufacturing process. This meant that the cardboard walls of the tube could not be modified and the design had to be entirely self contained to the base. In order to get around this I eventually came up with the “nested-level” technology. It works by having two sets of interlocking, concentric rings. The inner (green) set, which is connected to the (yellow) dial the consumer spins, has angled slots which allow for rotational and vertical movement. The outer (red) rings have vertical slots which prevents the chip platform from rotating and forces the torsional movement from the consumer to be translated into vertical movement. I designed a model in SolidWorks and then had it 3D printed. When fully compressed the system is just over an inch tall, but can expand to 7 times that height. The unit also could be glued into the base of the Pringles can in the same manner that the current metal plate. The initial design worked surprisingly well, but needed some dimensional adjustments due to the tolerance of the printer. I eventually made two full size prototypes for demonstration purposes at their presentations. I also created drawings which they used to obtain injection molding quotes from manufacturers in the United States and China.</p>
    <h2 id="CAD">CAD</h2>
    <div className="row">
      <div className="col-4">
        <img src={compressedTwist} alt="Twist technology in its compressed form"/>
      </div>
      <div className="col-4">
        <img src={fullyExtended} alt="Twist technology in its fully extended form"/>
      </div>
      <div className="col-4">
        <img src={fullyExtendedBottom} alt="View of fully extended twist technology from the base"/>
      </div>
    </div>
    </div>
    <Footer/>
  </MainLayout>
)

export default TwistCo
