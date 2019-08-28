import React from 'react'

import MainLayout from './../components/main-layout.js'
import Nav from './../components/nav.js'
import Footer from './../components/footer.js'

import './../styles/style.css'

import OverviewImage from './../assets/Capstone/Stomach_Overview.JPG'
import FourModules from './../assets/Capstone/4_modules.png'
import PMotionBrainstorm from './../assets/Capstone/p_motion_brainstorm.png'
import BSnake from './../assets/Capstone/b_snake.jpg'
import FixtureGIF from './../assets/Capstone/straight_fixture.gif'
import PMotion2 from './../assets/Capstone/pmotion_2.gif'
import Propagation from './../assets/Capstone/propagation.png'
import StomachMold from './../assets/Capstone/stomach_mold.png'
import JStomach from './../assets/Capstone/JshapeStomach.jpg'
import CapstoneVideo from './../assets/Capstone/capstone.mp4'


const SeniorCapstone = (props) => (
  <MainLayout>
    <Nav/>
    <div className="main" id="top">
      <div className="title-container">
        <h1>Senior Capstone: Simulated Stomach for Evaluating Medication Retention</h1>
        <p className="subtitle">July 2018 - December 2018 <span className="vertical-seperator"></span> Senior Capstone Team Member</p>
        <p className="subtitle">Faculty Advisor: Dr. Carol Livermore</p>
        <p className="subtitle">Industry Sponsor: <a href="https://lyndra.com/">Lyndra Therapeutics</a></p>
      </div>
      <img src={OverviewImage} alt="Stomach Overview" width="80%" />
      <h2>Project Summary</h2>
      <p>Northeastern’s mechanical engineering curriculum finishes with a Senior Capstone Design Project. On behalf of Lyndra Therapeutics, myself and four other senior engineering students developed a first of its kind artificial stomach which simulates the mechanical and chemical environment inside the human stomach. We were awarded the “Extra Mile Award” for delivering a complete and functional system to Lyndra after the six-month capstone term. A provisional patent has been filed for the stomach device.</p>
      <p>Lyndra’s problem statement was to design an anatomically representative environment capable of simulating the digestive forces in a human stomach. This required solutions for creating a dimensionally accurate stomach (the stomach bag), simulating the motion of the pyloric sphincter and peristaltic waves, and control systems for temperature and fluid flow. These four different modules can be seen highlighted in the final CAD of the system below.</p>
      <img src={FourModules} alt="The 4 Mechanical Modules" width="100%" />
      <h2>My Role</h2>
      <p>Understanding the ambitious scope of this project with respect to the six-month development cycle, the team realized that project management would be key to success. Although all team members contributed to all aspects of the project, each individual took primary responsibility for one section and secondary responsibility for another. My primary focus was the peristaltic motion mechanism and my secondary focus was the stomach bag. I will focus on describing these two modules for the rest of this page.</p>
      <h2>Peristaltic Motion</h2>
      <p>Peristaltic motion describes the involuntary muscular contractions that occur throughout the gastrointestinal tract and assist digestion. These muscular contractions are often described as peristaltic waves. In order to meet Lyndra’s request of accurately simulating the mechanical digestive forces in a stomach our team had to develop a mechanism to recreate these forces. Through a literature review on stomach physiology and discussions with Lyndra, our team eventually came to the design requirements listed below:</p>
      <ul class="bulleted-list">
        <li>Achieve longitudinal and radial motion to constrict around and propagate down the stomach bag simultaneously.</li>
        <li>Constrict concentrically around the stomach bag to achieve uniform pressure and accurately mimic the physiological process.</li>
        <li>Achieve an occlusion range from 0-100%, meaning the ability to decrease the cross-sectional diameter of the stomach bag to zero.</li>
        <li>Limit the amount of pinch points to avoid tearing the stomach bag.</li>
        <li>Propagate down and constrict around the stomach at physiologically representative speeds.</li>
      </ul>
      <p>Initial sketches of the constriction and propagation mechanisms can be seen in the top and bottom rows respectively of the image below.</p>
      <img src={PMotionBrainstorm} alt="Peristaltic Motion Brainstorm" width="80%" />
      <p>Using a design decision matrix the bearing snake mechanism was selected as the superior constriction mechanism design. The design consists of two symmetrical pin-in-slot mechanisms that, when oriented opposite each other, constrict the bearing snakes around a singular point. I designed the linkages and their slots by conducting a kinematic analysis in solidworks. The bearing snakes consisted of 25 radial bearings loaded along an elastic spring steel core. The first iteration of the design can be seen in the image below.</p>
      <img src={BSnake} alt="Bearing Snake" width="60%" />
      <p>A straight silicone tube was cast in order to test this first iteration. The video below shows the bearings snakes were able to simultaneously constrict and move up and down the bag, accomplishing our major design goals.</p>
      <img src={FixtureGIF} alt="Straight Fixture" width="25%" />
      <p>This first design showed great promise, but the major flaws were in the robustness of the 3D printed parts and the large amounts of friction between the pins and slots. A second iteration of the mechanism was developed to solve these issues. The linkages were machined from aluminum and the slot plates were printed from a much stronger, carbon fiber reinforced, material to increase strength and wear resistance. To reduce the friction in the slots, radial bearings were added to the pins. For control, I designed a cable system which enabled one linear actuator to operate both bearing snakes simultaneously. The updated version of the peristaltic motion mechanism can be seen in the video below. The original kinematic sketch is positioned below the constriction mechanism. I used a motion tracking software to validate the concentricity of the device, which was determined to be +/- 0.080”.</p>
      <img src={PMotion2} alt="2nd iteration of Peristaltic Motion" height="50%" />
      <p>To move the peristaltic constriction mechanism along the stomach bag, I designed the device to be mounted about a pivot point at the center of the ark of curvature of the stomach. A linear actuator was attached to a lever arm on the same shaft to move the peristaltic mechanism along the bottom 150mm of the stomach, as indicated by the literature. I used a kinematic sketch in solidworks to determine the proper attachment points for the linear actuator. I developed motion profiles that related the linear speed of the actuator to the rate at which the peristaltic wave would move down the stomach. These profiles were then implemented in the control of our system via Python. The linear actuator and subsequent rotational motion are illustrated in the image below.</p>
      <img src={Propagation} alt="Propagation" width="50%" />
      <h2>Stomach Bug</h2>
      <p>A major part of this project was developing an enclosure that was anatomically representative of the human stomach. The dimensions of the desired stomach bag were defined during our literature review at the beginning of the project. I used these dimensions to design a CAD model of the stomach core. The mold was then designed around this model.</p>
      <p>Several mold designs were considered, but eventually a split mold with a datumed core was determined to be the best choice. The CAD model (left) and finished product (right) can be seen in the image below.</p>
      <img src={StomachMold} alt="Stomach Mold" width="80%" />
      <p>Acetal resin was chosen for the outer shells due to its ease of machining and dimensional stability. The complex curves were cut using a CNC mill and then I completed all of the rest of the required cuts using manual tools including a bridgeport mill, bandsaw, and grinder. The core was 3D printed from an ABS material and then sealed with a varnish to prevent any material from leaking into the core during casting. I developed the 6-way datums at the top and bottom of the core to allow accurate fixturing of the core within the outer shells. The shells were aligned to each other with high precision pins. RTV silicone was chosen as the material for casting the stomach due to its high chemical and wear resistance and the ability to cast it at room temperature. I designed the mold to be filled from the bottom and vent at the top to prevent any cavitation. This mold design was able to consistently produce stomach bags with uniform wall thickness. The final product can be seen in the image below.</p>
      <img src={JStomach} alt="J-Shaped Stomach" width="50%" />
      <h2>Conclusion</h2>
      <p>After just 6-months of development, we were able to provide Lyndra with a complete and operational system that will allow them to conduct comprehensive in-vitro testing for the first time. The system is able to continuously cycle through multiple digestive cycles and simulate physiologically representative gastric motility. The system was delivered to Lyndra’s offices and a provisional patent has been filed for the device. A video of device’s peristaltic motion can be seen below.</p>
      <video width="100%" controls>
        <source src={CapstoneVideo} type="video/mp4" />
        Video is not supported in this browser
      </video>
      <h2 className="margin-0">Skills Developed</h2>
      <ul className="bulleted-list">
        <li>Concept ideation</li>
        <li>Design research</li>
        <li>Project management</li>
        <li>Rapid prototyping</li>
        <li>Mechanical design</li>
        <li>Control system design</li>
        <li>Python</li>
        <li>CNC and manual machining</li>
        <li>Silicone molding and casting</li>
      </ul>
    </div>
    <Footer/>
  </MainLayout>
)

export default SeniorCapstone
