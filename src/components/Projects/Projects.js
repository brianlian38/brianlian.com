import React from 'react';
import './Projects.css';


class Projects extends React.Component {
  render() {
    return (
      <div className="parent">
        <h1 className="header">
          Projects
        </h1>
        <p>
          I enjoy working on new products that either I or someone close to me would find valuable.
          I believe that the best way to learn about new concept, subject area, or piece of technology is to
          actually work on something that applies, builds on, leverages this new idea.
        </p>
        <p>
          I'm currently working on a thesis in political data space.
        </p>
        <p>
          Unfortunately, many of my projects can't be showcased here as they are (now) properties of various companies. 
          I am more than happy to discuss them further in a chat however, so reach out! I've touched on some really neat company sites, data pipelines, and analytic solutions.
        </p>
        <br/>
        <h2 className="subHeader">
          Previous projects:
        </h2>
        <h4 className="projectTitles" style={{ marginTop: -5 }}>
        [2022]&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/WesternGymBot">
            Western GyMBRo
          </a>
        </h4>
        <p>
          Tool to track and predict weight room numbers at Western University based off historical tweets from&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/WesternWeightRm">posted numbers.</a>
          &nbsp;I took over the project in 2022, looking to update the backend and migrate to a webapp.
        </p>
        <h4 className="projectTitles" style={{ marginTop: -5 }}>
        [Before 2022]&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://large-type.com/#coming%20soon!">
            To be added
          </a>
        </h4>
        <p>
          Due to some migration issues, projects prior to 2022 have yet to be uploaded from my previous site. Sit tight! 
        </p>
        
        <h4 className="projectTitles">
          [2020]&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/brianlian38/skin-lesion-analyzer">
            Skin lesion analyzer
          </a>
        </h4>
        <p>
          Artificial Intelligence powered model to identify and diagnose a given skin lesion as cancerous or benign. As my first foray into machine learning at university, not a bad start.
          Accuracy is something to be desired with ~80% correct predictions. 
        </p>

      </div>
    );
  }
}

export default Projects;