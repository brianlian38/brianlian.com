import React from 'react';
import './Home.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

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
  { emoji: "💸", company: "Scotiabank", role: "Product Owner Intern", url: "https://www.scotiabank.com/ca/en/personal.html", time: "2023", 
  description: "managing internal platform product"},
  { emoji: "🤖", company: "Stealth Startup", role: "Product Management Intern", url: "https://en.wikipedia.org/wiki/Stealth_startup", time: "2023", 
  description: "building data product MVP + strategized execution roadmap"},
  { emoji: "🍊", company: "Tangerine", role: "SWE Intern", url: "https://www.tangerine.ca/en/about-us", time: "2023", 
  description: "modernizing Open APIs + updating microservices on cloud for scalability"},
  { emoji: "💼", company: "Buf", role: "Business Operations Analyst", url: "https://buf.build/", time: "2022", 
  description: "kept the lights on (financials, SOC2, IT/HR systems) + built forward-looking things for growth (analytics)"},
  { emoji: "💵", company: "Scotiabank", role: "Data Scientist Intern", url: "https://www.scotiabank.com/ca/en/personal.html", time: "2021", 
  description: "created data tooling to find money laundering incidents faster and more effectively"},
]

class Home extends React.Component {
  
  componentDidMount() {





    
    const width = 500;
    const height = 500;
    const count = 19;
    const rowsize = 25;
    let dotsize = 6;
    const dotmin = 3;
    const dotsizebase = 6;

    const canvases = document.querySelectorAll(".CanvasDots");
    canvases.forEach((canvas) => {
      const ctx = canvas.getContext('2d');
      ctx.canvas.width = width;
      ctx.canvas.height = height;
      this.mouseOver(canvas, ctx, false);
      canvas.addEventListener('mousemove', (event) => this.mouseOver(canvas, ctx, event, true));
      canvas.addEventListener('mouseleave', (event) => this.mouseOver(canvas, ctx, event, false));
    });
  }

  mouseOver = (canvas, ctx, event, cursor) => {
    let PosX, PosY;
    if (cursor) {
      PosX = this.getPositionX(event);
      PosY = this.getPositionY(event);
    } else {
      PosX = -100;
      PosY = -100;
    }

    const LocX = canvas.getBoundingClientRect().left;
    const LocY = canvas.getBoundingClientRect().top;

    const GlobalX = PosX - LocX;
    const GlobalY = PosY - LocY;

    ctx.canvas.width = 1010;
    ctx.canvas.height = 500;

    const count = 99;
    const rowsize = 30;
    let dotsize = 6;
    const dotmin = 3;
    const dotsizebase = 6;

    let counter = 1;
    for (let ix = 4; ix <= count - 3; ix++) {
      for (let iy = 4; iy <= count - 3; iy++) {
        ctx.beginPath();
        const scaler = Math.hypot(GlobalX / rowsize - ix, GlobalY / rowsize - iy);
        dotsize = dotsizebase - scaler * 0.5;
        if (dotsize < dotmin) {
          dotsize = dotmin;
        }
        ctx.arc(rowsize * ix, rowsize * iy, dotsize, 0, 2 * Math.PI);
        counter = counter * 1;
        const nr = String(counter).charAt(2);
        ctx.strokeStyle = "#00be5a";
        
        /*
        if (nr <= 3) {
          ctx.strokeStyle = "#f05c2c";
        } else if (nr <= 6) {
          ctx.strokeStyle = "#1daeea";
        } else {
          ctx.strokeStyle = "#FFFFFF";
        }
        */

        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  };

  getPositionX = (event) => {
    const CursorX = event.clientX;
    return CursorX;
  };

  getPositionY = (event) => {
    const CursorY = event.clientY;
    return CursorY;
  };
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  render() {
    return (
      <div>

        <div className="bodyContainer">

        

        <div className="name">
          <canvas className="CanvasDots" ></canvas>
          <br></br>
          <h1 className="intro_hello">
            
            
            ---
            <span className="wave">👋</span>
          </h1>
        </div>



          <hr></hr>

          <Typewriter
            options={{
              strings: ['Toronto ⇄ London', 'Future goldendoodle owner', 'Coffee addict', 'NBA stathead'],
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
                So you must be wondering who I am ...
              </h2>
              <motion.div
                animate={{ scale: 2 }}
                transition={{ duration: 0.5 }}
              />
              <p>
                ...or maybe you're just stumbling across this by accident. Or possibly a stalker here on purpose👀 Either way, welcome! 
              </p>
              <p>
                I'm an undergrad at&nbsp;
                <a target="_blank" rel="noopener noreferrer" href="https://www.ivey.uwo.ca/">Ivey Business School</a>
                &nbsp;and&nbsp;
                <a target="_blank" rel="noopener noreferrer" href="https://www.uwo.ca/">Western University</a>
                &nbsp;studying Computer Science + Business. I'm currently working on a project aggregating polticial data, building cool things at a data startup, and 
                solving problems at a digital bank.
                I was previously at a series B startup called 
                <a target="_blank" rel="noopener noreferrer" href="https://buf.build/"> Buf</a>
                &nbsp;as a business operations analyst wearing many hats and building for success (employee #25)! 
              </p>
              <p>
                Ever since I was young, I've been curious about how to best make the lives of those around me better! Driven by this passion, 
                I have found that I love to tackle the problems others face head-on by building solutions. To this end, I’ve grown experiences in product, 
                full stack, data science, and business. Dually user focused and data driven, I'm always seeking to grow and apply my toolkit!
              
                I also love to build up my community around me, which I do as a board director and former co-chair of&nbsp;
                <a target="_blank" rel="noopener noreferrer" href="https://hackthe6ix.com//">Hack the 6ix</a>
                &nbsp;, Toronto’s largest summer hackathon. 
              </p>
              <p>
                You should know that I am a <b>huge</b> stathead. So much so, that I have been tracking my own daily statistics - inspired by
                <a target="_blank" rel="noopener noreferrer" href="http://feltron.com/FAR14.html"> Feltron</a>. Quantifying my self, has pushed me to be more meaningful in my day to day choices.
                The gleaned insights from my journey have 100% enriched my life experience. Check out 
                <a target="_blank" rel="noopener noreferrer" href="https://dailyvis.com/posts/quantified-self-why-i-track-my-life-in-data/"> this blog </a>
                as an excellent deep dive into the why and how.
              </p>
              <p>
                <b>|</b> <i>My humble claim to fame is making perfect boiled eggs and being on tv when I was 8 (ask me about it).</i>
              </p>
              <p>
                <b>Currently learning </b>golang, about financial infrastructure, and attempting the 75-hard challenge. 
              </p>
              <Box mb={-2} mt={5}>
                <h2 className="bodyTitle">
                  Professional experiences
                </h2>
              </Box>
              <List>
                {experiences.map((experience, index) => {
                  return (
                    <ListItem>
                      <ListItemText>
                        {experience.emoji} {experience.role} at&nbsp;
                        <a target="_blank" rel="noopener noreferrer" href={experience.url}>{experience.company}</a>
                        &nbsp;[{experience.time}] <br/>
                        &#xbb; {experience.description}
                      </ListItemText>
                    </ListItem>
                  )})
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