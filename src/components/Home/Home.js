import React from 'react';
import './Home.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import CanvasGrid from './CanvasGrid'; // Import the new CanvasGrid component


const profilePicture = require('../../assets/headshot_square.JPG');
const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(0, 0, 0, 0)"
  },
  visible: {
    pathLength: 1,
    fill: "rgba(0, 0, 0, 1)"
  }
}

const experiences = [
  {
    emoji: "💸", company: "Scotiabank", role: "Product Owner Intern", url: "https://www.scotiabank.com/ca/en/personal.html", time: "2023",
    description: "managing internal platform product"
  },
  {
    emoji: "🤖", company: "Stealth Startup", role: "Product Management Intern", url: "https://en.wikipedia.org/wiki/Stealth_startup", time: "2023",
    description: "building data product MVP + strategized execution roadmap"
  },
  {
    emoji: "🍊", company: "Tangerine", role: "SWE Intern", url: "https://www.tangerine.ca/en/about-us", time: "2023",
    description: "modernizing Open APIs + updating microservices on cloud for scalability"
  },
  {
    emoji: "💼", company: "Buf", role: "Business Operations Analyst", url: "https://buf.build/", time: "2022",
    description: "kept the lights on (financials, SOC2, IT/HR systems) + built forward-looking things for growth (analytics)"
  },
  {
    emoji: "💵", company: "Scotiabank", role: "Data Scientist Intern", url: "https://www.scotiabank.com/ca/en/personal.html", time: "2021",
    description: "created data tooling to find money laundering incidents faster and more effectively"
  },
]




class Home extends React.Component {











  render() {
    return (
      <div>

        <div className="name">

          <br></br>
          <CanvasGrid id="canvas" /> {/* Place the CanvasGrid component here */}
          <h1 className="intro_hello">HEY THERE <br></br>I'M BRIAN LIAN</h1>

        </div>
        <div className="bodyContainer">






          <br></br>

          <hr></hr>

          <Typewriter
            options={{
              strings: ['Toronto ⇄ London ⇄ Lyon', 'Future goldendoodle owner', 'Former coffee addict', 'NBA stathead'],
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriter",
              cursorClassName: "cursor",
              delay: 60
            }}
          />
          <p style={{ textAlign: 'center' }}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/brian-lian/">LinkedIn</a>
            &nbsp;|&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/brianlian38">Github</a>
            &nbsp;|&nbsp;
            <a href="mailto:bLian.hba2024@ivey.ca">Email</a>
          </p>
          <div className="bodyText">
            <Box mt={3}>
              <h2 className="bodyTitle">
                <span className="wave">👋</span>So you must be wondering who I am ...
              </h2>
              <motion.div
                animate={{ scale: 2 }}
                transition={{ duration: 0.5 }}
              />
              <p>
                ...or maybe you're just stumbling across this by accident. Or possibly a stalker here on purpose👀 Either way, welcome!
              </p>
              <p>
                I'm a senior at&nbsp;
                <a target="_blank" rel="noopener noreferrer" href="https://www.ivey.uwo.ca/">Ivey Business School</a>
                &nbsp;and&nbsp;
                <a target="_blank" rel="noopener noreferrer" href="https://www.uwo.ca/">Western University</a>
                &nbsp;studying Computer Science + Business. I recently completed a thesis on politicial financial data aggregation, built cool things at a data startup,
                and solved platform problems at a digital bank.

                <br></br><br></br>
                I was previously at a series B startup called
                <a target="_blank" rel="noopener noreferrer" href="https://buf.build/"> Buf</a>
                &nbsp;as a business operations analyst wearing many hats and building for success (employee #25)!
              </p>
              <p>
                Building up the community around me is something I'm deeply passionate about - I scratch this itch as a board director and former co-chair of&nbsp;
                <a target="_blank" rel="noopener noreferrer" href="https://hackthe6ix.com//">Hack the 6ix</a>
                &nbsp;, Toronto’s largest summer hackathon.
              </p>

              <p>
                <b>|</b> <i>Best described as “a first-round pick for a trivia contest, NBA fantasy management, or a board of directors.”</i>
              </p>
              <br></br><br></br>
              <h2 className="bodyTitle">
                <b>To sum me up in a mission statement</b>
              </h2>
              <p className='center_content'>

                <u>I'm obsessed with doing what it takes to get the right stuff built... <br></br>
                  as long as it truly improves the lives of others.</u>
              </p>
              <br></br>
              <p>
                Most personal websites are the same.<br></br>

                So let's get to the goods.
              </p>
              <br></br>
              <h2 className="bodyTitle">
                <b>My Values</b>
              </h2>
              <p>
                aka what you get when you work with me.
              </p>


              <div class="container">
                <div class="section">
                  <hr></hr>
                  <h2 className='smallBodyTitle'>Data Driven</h2>
                  <p>Cliche but I mean it. <br></br>
                    My key to building useful things is understanding
                    the root issues behind the scenes - be it crunching the numbers or conducting the interviews.<br></br>
                    I even wrote a thesis on data pipelines to track hidden congressional finances.

                  </p>
                </div>
                <div class="section">
                  <hr></hr>
                  <h2 className='smallBodyTitle'>Documentation Freak</h2>
                  <p>Maybe it's my short-term memory or tech debt trauma, but I implement a healthy practice of tracking exactly what is going on always.<br></br>
                    This means reduced team frustrations and pretty nice holistic debriefs/reflections. <br></br>Take a look at mine from <a target="_blank" rel="noopener noreferrer" href="https://dailyvis.com/posts/quantified-self-why-i-track-my-life-in-data/">tracking my own life</a>.
                  </p>
                </div>
                <div class="section">
                  <hr></hr>
                  <h2 className='smallBodyTitle'>CEO of What I Do</h2>
                  <p>I’m big into ownership and making sure my projects succeed and have a positive impact.<br></br>
                      To do this I lean on my innate curiosity to find how to best grow/contribute - even if it may be unconventional.
                      <br></br>
                      It's also where I draw my passion and energy from! </p>
                </div>
              </div>



              <Box mb={-2} mt={5}>
                <h2 className="bodyTitle">
                  Professional Experiences (at a glance)
                </h2>
              </Box>
              <List>
                {experiences.map((experience, index) => {
                  return (
                    <ListItem>
                      <ListItemText>
                        {experience.emoji} {experience.role} at&nbsp;
                        <a target="_blank" rel="noopener noreferrer" href={experience.url}>{experience.company}</a>
                        &nbsp;[{experience.time}] <br />
                        &#xbb; {experience.description}
                      </ListItemText>
                    </ListItem>
                  )
                })
                }
              </List>

            </Box>



          </div>
        </div>
        <div className="footer">
          <Divider />
          <div>&nbsp;</div>
          <div>
            Made by Brian Lian - Minimalist & Clean
          </div>
          <div>
            Source code found here:&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/brianlian38/brianlian38.github.io">GitHub</a>.
          </div>
          <div>
            Built using&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">React</a>
            ,&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.framer.com/api/motion/">Framer Motion</a>
            ,&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://material-ui.com/">Material UI</a>
            ,&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.theleagueofmoveabletype.com/raleway">League of Moveable Type</a>
            ,&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/tameemsafi/typewriterjs#readme">TypewriterJS</a>
          </div>
        </div>
      </div>
    );
  }









}

export default Home;