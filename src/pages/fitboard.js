import React from 'react'

import MainLayout from './../components/main-layout.js'
import Nav from './../components/nav.js'
import Footer from './../components/footer.js'

import FITBoardHeader from './../assets/FITBoard/FITBoard_img1.jpeg'
import FITBoardCAD from './../assets/FITBoard/FITBoard_CAD.JPG'
import FITBoardProduct from './../assets/FITBoard/FITBoard_product.jpeg'
import FITBoardLogo from './../assets/FITBoard/fitboard_logo.png'
import RegameLogo from './../assets/FITBoard/regame_logo.png'
import EnablingLogo from './../assets/FITBoard/enabling_engineering_logo.png'


const FITBoard = (props) => (
  <MainLayout>
    <Nav/>
    <div className="main" id="top">
      <div className="title-container">
        <ul className="inline margin-0">
          <li className="padding-l-r-25"><img className="margin-0" src={FITBoardLogo} alt="FITBoard Logo" width="100%"/></li>
          <li className="padding-l-r-25"><img className="margin-0" src={RegameLogo} alt="Regame Laboratory Logo" width="100%"/></li>
          <li className="padding-l-r-25"><img className="margin-0" src={EnablingLogo} alt="Enabling Engineering Logo" width="100%"/></li>
        </ul>
        <h1>Fun Interactive Therapy Board</h1>
        <p className="subtitle">September 2016 - May 2019 <span className="vertical-seperator"></span> Mechanical Design Engineer</p>
      </div>
      <img src={FITBoardHeader} alt='A young child using FITBoard' width="60%"/>
      <p><b>Project Summary:</b> Children with physical and/or developmental disabilities participate in physical therapy and occupational therapy activity programs over extended periods to learn new skills and maintain strength and range of motion. Amount of practice is the biggest factor predicting rehabilitation success, but children find it challenging to adhere to boring activity programs. Lack of practice leads to functional deterioration and reduced quality of life. Using technologies such as virtual reality (VR) gaming systems in rehabilitation motivates children to enhance practice dosage. However, many VR systems are expensive and inaccessible to young children or those with significant disabilities. To address this issue, game design principles have been used to integrate the advantages of VR into an accessible, low-cost physical toy. The FITBoard (Fun, Interactive Therapy Board) is a rehabilitation tool consisting of a tablet and boards with touch keys to control sounds, videos or games. The FITBoard can motivate children to engage in repetitive practice of functional head, body, arm or leg movements, depending on its configuration.
      The FITBoard’s usability is being determined in a sample of children, parents, and therapists in two rehabilitation settings.</p>
      <img src={FITBoardProduct} width="60%" alt="FITboard in its completed state"/>
      <p><b>My Role: </b>When I started working with Northeastern University's ReGame-VR Laboratory and Dr. Danielle Levac on this project the concept was finalized, but they had just started tackling the physical design process. My primary role was to take their initial sketches and design and fabricate a real, functioning prototype. The main mechanical design criteria were that the device could easily fold up into a briefcase for transportation, be relatively lightweight, and inexpensive. I also had to work closely with the electrical and software engineering teams to ensure that my designs would integrate smoothly with their systems. I designed lightweight foldable boards using friction hinges and laser cut acrylic panels for the top half of the brief case. For the bottom half I designed a rail system out of extruded aluminum and 3D printed sliders. Not only did this make the unit compact, but it also stiffened the entire brief-case allowing the use of a much cheaper and otherwise flimsy case. I created the “touch keys” out of laser cut acrylic and then designed and 3D printed hinges to mount them over the electrical switches. A later addition to the project was the need for the user to be able to activate the device with their head. The switch positions needed to be extremely flexible in order to accommodate users of varying heights and different exercises, but still rigid enough to resist the force of actuation. To accomplish this I used a stiff ball joint and copper pipe and then designed custom sliders to allow the button assembly to be quickly and easily moved to any position on the pipe. I also designed the button assembly. I printed all of the custom components using university 3D printers. I also worked with the university machine shop to modify the briefcase and cut and tap the extruded aluminum.</p>
      <p>We are currently working on version 2 of the FITBoard. The main mechanical update is an increase in flexibility of size. With the newer version therapists will be able to provide the patient with up to double the amount of game space, allowing them to give the patient more complex tasks. They will also be able to fold the board into any variation of smaller sizes and the board will still be functional. For more information about FITBoard or Northeastern's ReGame-VR Lab please visit these respective links:</p>
      <a href="https://fitboardneu.wordpress.com/">https://fitboardneu.wordpress.com/</a><br/>
      <a href="http://www.northeastern.edu/regamevrlab/">http://www.northeastern.edu/regamevrlab/</a>
      <h2 id="CAD">CAD</h2>
      <p>This is the CAD model I created for version 2 of the FITBoard. The full opened arm on the left side demonstrates the maximum expansion capabilities of the device. The closed arm on the right shows that the device is still functional even if there is not space to expand the arms at all. The key component behind the flexibility of this device is a series of friction hinges which I sourced from McMaster-Carr. They allow the touch panel arm to be moved quickly to any position, but then provide enough resistance to prevent motion during gameplay.</p>
      <img src={FITBoardCAD} alt="FITBoard in CAD" width="80%"/>
    </div>
    <Footer/>
  </MainLayout>
)

export default FITBoard
