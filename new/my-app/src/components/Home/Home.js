import React from 'react';
import './Home.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

const profilePicture = require('../../assets/headshot.png');
const firstName = "M 124.8 39.8 L 124.8 71 L 116 71 L 116 41.8 A 42.951 42.951 0 0 0 115.804 37.538 Q 115.293 32.432 113.45 29.65 A 8.279 8.279 0 0 0 107.409 25.914 A 12.372 12.372 0 0 0 105.7 25.8 A 15.16 15.16 0 0 0 99.994 26.943 A 18.395 18.395 0 0 0 98.55 27.6 Q 95 29.4 92.25 32.45 Q 89.5 35.5 88.3 39.5 L 88.3 71 L 79.5 71 L 79.5 18.8 L 87.5 18.8 L 87.5 30 Q 89.6 26.3 92.9 23.6 Q 96.2 20.9 100.4 19.4 Q 104.6 17.9 109.2 17.9 A 20.389 20.389 0 0 1 112.494 18.152 Q 114.348 18.456 115.88 19.126 A 11.6 11.6 0 0 1 116.75 19.55 Q 119.8 21.2 121.55 24.15 A 19.069 19.069 0 0 1 123.276 28.023 A 24.888 24.888 0 0 1 124.05 31.1 A 43.542 43.542 0 0 1 124.692 36.339 A 54.141 54.141 0 0 1 124.8 39.8 Z M 56.6 41.8 L 56.6 38 A 16.126 16.126 0 0 0 56.135 34.017 A 11.241 11.241 0 0 0 53 28.55 Q 49.4 25.1 42.8 25.1 Q 38.5 25.1 34.55 26.65 Q 30.723 28.152 26.475 30.92 A 62.523 62.523 0 0 0 26.2 31.1 L 23 24.9 A 46.553 46.553 0 0 1 28.738 21.516 A 37.887 37.887 0 0 1 33.2 19.65 Q 38.3 17.9 43.8 17.9 A 29.07 29.07 0 0 1 50.412 18.609 Q 55.617 19.824 59.247 23.121 A 18.564 18.564 0 0 1 59.6 23.45 A 18.21 18.21 0 0 1 64.761 32.805 A 27.428 27.428 0 0 1 65.4 38.9 L 65.4 61 Q 65.4 62.6 66.05 63.35 Q 66.7 64.1 68.2 64.2 L 68.2 71 A 64.686 64.686 0 0 1 67.274 71.136 Q 66.909 71.187 66.578 71.228 A 34.452 34.452 0 0 1 65.95 71.3 Q 65.005 71.399 64.407 71.4 A 7.571 7.571 0 0 1 64.4 71.4 A 8.982 8.982 0 0 1 62.614 71.234 Q 61.574 71.023 60.78 70.543 A 4.605 4.605 0 0 1 59.75 69.7 A 7.735 7.735 0 0 1 58.713 68.286 A 5.63 5.63 0 0 1 58 66.1 L 57.8 62.8 A 21.916 21.916 0 0 1 50.078 69.051 A 26.151 26.151 0 0 1 48.9 69.6 Q 43.4 72 38 72 Q 32.8 72 28.7 69.85 A 17.036 17.036 0 0 1 24.094 66.382 A 15.68 15.68 0 0 1 22.3 64.05 Q 20 60.4 20 55.9 A 14.695 14.695 0 0 1 20.804 50.969 A 13.107 13.107 0 0 1 22.85 47.25 Q 25.7 43.6 30.7 41.6 A 27.085 27.085 0 0 1 36.647 40.011 A 37.09 37.09 0 0 1 42.3 39.6 Q 45.8 39.6 49.7 40.15 A 39.782 39.782 0 0 1 53.267 40.812 A 29.027 29.027 0 0 1 56.6 41.8 Z M 9 71 L 0 71 L 0 0 L 9 0 L 9 71 Z M 56.6 54.3 L 56.6 47.8 Q 53.5 46.6 50.1 45.95 Q 46.7 45.3 43.4 45.3 A 27.889 27.889 0 0 0 39.095 45.613 Q 35.273 46.211 32.55 47.95 Q 28.4 50.6 28.4 55.2 A 9.442 9.442 0 0 0 29.434 59.46 A 11.375 11.375 0 0 0 29.75 60.05 A 9.91 9.91 0 0 0 32.579 63.15 A 12.425 12.425 0 0 0 33.75 63.9 Q 36.4 65.4 40.3 65.4 Q 44.4 65.4 48.1 63.75 Q 51.8 62.1 54 59.6 A 14.428 14.428 0 0 0 55.249 57.92 A 11.785 11.785 0 0 0 55.9 56.75 A 9.651 9.651 0 0 0 56.269 55.888 Q 56.6 54.988 56.6 54.3 Z";
const lastName = "M 158.7 41.8 L 158.7 73 L 149.9 73 L 149.9 43.8 A 40.442 40.442 0 0 0 149.69 39.528 Q 149.155 34.503 147.25 31.7 A 8.554 8.554 0 0 0 141 27.9 A 12.377 12.377 0 0 0 139.4 27.8 A 13.767 13.767 0 0 0 130.753 30.854 A 17.921 17.921 0 0 0 129.8 31.65 A 20.394 20.394 0 0 0 124.393 39.57 A 25.198 25.198 0 0 0 123.7 41.6 L 123.7 73 L 114.9 73 L 114.9 43.8 A 42.132 42.132 0 0 0 114.7 39.538 Q 114.259 35.219 112.847 32.563 A 10.108 10.108 0 0 0 112.3 31.65 A 8.427 8.427 0 0 0 106.136 27.904 A 12.472 12.472 0 0 0 104.5 27.8 Q 99.3 27.8 94.95 31.55 A 19.358 19.358 0 0 0 89.71 38.905 A 24.581 24.581 0 0 0 88.8 41.5 L 88.8 73 L 80 73 L 80 20.8 L 88 20.8 L 88 32 A 25.568 25.568 0 0 1 92.201 26.313 A 22.097 22.097 0 0 1 96.3 23.05 A 21.261 21.261 0 0 1 107.005 19.912 A 25.524 25.524 0 0 1 107.8 19.9 Q 114.3 19.9 118.2 23.45 Q 122.1 27 123 32.6 A 31.006 31.006 0 0 1 126.61 27.437 A 23.457 23.457 0 0 1 131.5 23.15 A 20.228 20.228 0 0 1 141.909 19.92 A 24.582 24.582 0 0 1 142.9 19.9 A 20.389 20.389 0 0 1 146.194 20.152 Q 148.048 20.456 149.58 21.126 A 11.6 11.6 0 0 1 150.45 21.55 Q 153.5 23.2 155.3 26.15 A 19.192 19.192 0 0 1 157.085 30.023 A 24.856 24.856 0 0 1 157.9 33.1 Q 158.7 37.1 158.7 41.8 Z M 48.6 73 L 0 73 L 0 2 L 9 2 L 9 65 L 48.6 65 L 48.6 73 Z M 65.8 73 L 57 73 L 57 20.8 L 65.8 20.8 L 65.8 73 Z M 65.8 11 L 57 11 L 57 0 L 65.8 0 L 65.8 11 Z";
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
  { company: "Otter", role: "SWE & PM", url: "https://withotter.com/", time: "2021-2022" },
  { company: "Tesla", role: "Product Management Intern", url: "https://www.tesla.com", time: "2021" }
]

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="bodyContainer">
          <div className="name">
          <h1 class="intro_hello">
            Hi! I'm Brian Lian
            <span class="wave">👋</span>
          </h1>

            
          </div>
          <Typewriter
            options={{
              strings: ['Minnesota ⇄ California', 'Future samoyed owner', 'Coffee lover'],
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriter",
              cursorClassName: "cursor",
              delay: 60
            }}
          />
          <p style={{ textAlign: 'center' }}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ianclim/">LinkedIn</a>
            &nbsp;|&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/IanCLim">Twitter</a>
            &nbsp;|&nbsp;
            <a href="mailto:ianlim@stanford.edu">Email</a>
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
                <a target="_blank" rel="noopener noreferrer" href="https://www.stanford.edu/">Stanford University</a>
                &nbsp;studying Computer Science + Neuroscience. I'm currently working on a project to help seniors age in place and helping out at&nbsp;
                <a target="_blank" rel="noopener noreferrer" href="https://joininteract.com/">Interact</a>.
                I was previously at a startup called 
                <a target="_blank" rel="noopener noreferrer" href="https://withotter.com/blog-posts/series-a"> Otter</a>
                &nbsp;as their first software engineer and product manager. 
              </p>
              <p>
                At Stanford, I'm doing research on a wearable EMG device to control external interfaces under the&nbsp;
                <a target="_blank" rel="noopener noreferrer" href="https://shape.stanford.edu/">Shape Lab</a>. 
                I helped start <a target="_blank" rel="noopener noreferrer" href="https://stanfordbci.com/">Stanford BCI</a> 
                &nbsp;in 2021, Stanford's first student organization dedicated to building non-invasive brain-computer interface hardware and software.
                I'm also on the&nbsp;
                <a target="_blank" rel="noopener noreferrer" href="https://treehacks.com/">TreeHacks</a>
                &nbsp;organizing team and Stanford's club basketball team.
                Ever since I was young, I've been curious about how things work.
                I'm most interested in learning about neural interfaces, distributed organizations, and financial infrastructure.
              </p>
              <p>
                Some of my favorite classes at Stanford:
                <a target="_blank" rel="noopener noreferrer" href="https://explorecourses.stanford.edu/search?q=EE+124%3A+Introduction+to+Neuroelectrical+Engineering&filter-coursestatus-Active=on&view=catalog&academicYear=20102011"> EE124: </a>
                Introduction to Neuroelectrical Engineering,
                <a target="_blank" rel="noopener noreferrer" href="https://explorecourses.stanford.edu/search?view=catalog&filter-coursestatus-Active=on&page=0&catalog=&q=CS56N"> CS56N: </a>
                Great Discoveries and Inventions in Computing with Professor John Hennessy,
                <a target="_blank" rel="noopener noreferrer" href="https://explorecourses.stanford.edu/search?view=catalog&filter-coursestatus-Active=on&q=THINK%2068:%20Our%20Genome&academicYear=20192020"> Think68: </a>
                Our Genome with Dr. Gilbert Chu,
                <a target="_blank" rel="noopener noreferrer" href="http://web.stanford.edu/class/cs107/"> CS107: </a>
                Computer Organization and Systems with Lecturer Nick Troccoli.
              </p>
              <p>
                A few friends in the BCI space and I recently wrote a Twitter thread reviewing the most important BCI advancements/news from 2021 (<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/IanCLim/status/1483517120499511299?s=20">link to thread</a>).
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
                        - {experience.role} at&nbsp;
                        <a target="_blank" rel="noopener noreferrer" href={experience.url}>{experience.company}</a>
                        &nbsp;[{experience.time}]
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
            Made by Ian Lim
          </div>
          <div>
            Source code for this website can be found on my&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ianclim/ianlim.com">GitHub</a>.
          </div>
          <div>
            Built using&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">React</a>
            ,&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.framer.com/api/motion/">Framer Motion</a>
            ,&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://material-ui.com/">Material UI</a>
            ,&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://danmarshall.github.io/google-font-to-svg-path/">Google font to SVG path</a>
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