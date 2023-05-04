import React from 'react';
import './Projects.css';

const applywithapi = require('../../assets/applywithapi_demo.png');
const prototype1 = require('../../assets/prototype_v0.1.png');
const prototype2 = require('../../assets/prototype_v0.2.png');

class Projects extends React.Component {
  render() {
    return (
      <div className="parent">
        <h1 className="header">
          Projects
        </h1>
        <p>
          I enjoy working on new products that either I or someone close to me would find valuable.
          I believe that often the best way to learn about new concept, subject area, or piece of technology is to
          actually work on something that applies, builds on, leverages this new idea.
        </p>
        <p>
          I'm currently working on a project in the elder care space.
        </p>
        <br/>
        <h2 className="subHeader">
          Previous projects:
        </h2>
        <h4 className="projectTitles" style={{ marginTop: -5 }}>
        [2021]&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://www.loom.com/share/ac3896defa504094b64883ea0a0d39fe">
            Compare open source GitHub projects
          </a>
        </h4>
        <p>
          Tool to compare open source GitHub projects based on number of stars, forks, and other metrics.
        </p>
        <h4 className="projectTitles" style={{ marginTop: -5 }}>
        [2020]&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://www.loom.com/share/34dd747e38424abe8040508f6ef8d6d1">
            Apply with API
          </a>
        </h4>
        <p>
          Apply with API is a tool to enable any company to accept job applications through an API POST request. 
        </p>
        <img src={applywithapi} alt="Apply with API demo" className="applyWithApiImage" />
        <h4 className="projectTitles">
          [2017] Early stroke detection wearable device
        </h4>
        <p>
          I worked on a very, very early prototype for a wearable device for early stroke detection with one of my classmates.
          Identifying stroke outside of a professional medical environment is very difficult for most people. One of the most common tests for stroke outside of the hospital
          is called the&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Pronator_drift">pronator drift</a>
          &nbsp;test during which the patient extends both arms out in front of them, parallel to the ground, for 15-30 seconds with their palms facing up.
          If the patient's arm drifts downward and/or the palm pronates, the patient is said to have pronator drift in which one side of the body is weaker than the other.
          For the average person without any medical background, recognizing that someone else is experiencing pronator drift is highly subjective and
          prone to misinterpretation.
        </p>
        <p>
          Therefore, we focused on quantifying the pronator drift test to give a more accurate output and interpretation of a patient's pronator drift test results.
          We ended up buying some rudimentary parts — accelerometer, Bluetooth low energy module, and microcontroller — to
          build the device quickly and inexpensively. We built a v0.5 of the project which was able to gather accelerometer data and transmit it through
          a cable connection to a laptop but ultimately didn't build out the wireless connection. Ultimately, we'd hoped to have built out the feature to recommend whether
          a patient should go to the hospital or not based on previous stroke patients in a similar demographic and with similar results.
        </p>
        <div className="wearableImages">
          <div >
            <h5 className="prototypeText">
              Prototype v0.1
            </h5>
            <img src={prototype1} alt="prototype v0.1" />
          </div>
          <div>
            <h5 className="prototypeText">
              Prototype v0.2
          </h5>
            <img src={prototype2} alt="prototype v0.2" />
          </div>
        </div>
        <h4 className="projectTitles">
          [2016] Marketplace that connects local businesses with consumers
        </h4>
        <p>
          A few friends and I decided to create a better discount aggregator from local businesses. The other discount programs that existed in our area were primarily used
          as fundraising tactics without actually providing much value to the end user. In one month, we performed customer interviews, partnered with 14 companies, received dozens of pre-orders, and launched our product.
          We sold door-to-door three days a week and used a number of growth tactics (some of which worked better than others) such as selling at local trade shows, convincing the
          director of a local choir performance to let us give a quick pitch during intermission, and starting an affiliate program. In about 3 months, we had 250+ users, grossed
          $8,000+, and donated all $5,000 of our profits to a local charity.
        </p>
        <h4 className="projectTitles">
          [2016] Nonprofit to help young entrepreneurs build their ideas
        </h4>
        <p>
          Our nonprofit, Generation MN, had the mission of inspiring and supporting young entrepreneurs to build something they love. We raised $4,000+ to organize
          five events over the course of a year, our flagship event being&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://www.eventbrite.com/e/techstars-startup-weekend-twin-cities-105-107-tickets-48171461137#">Startup Weekend</a>
          &nbsp;where we hosted ~25 people who built out an idea during the 54 hour event.
        </p>

      </div>
    );
  }
}

export default Projects;