import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch, //switch no longer supported in newer versions
  Route,
  Link
} from "react-router-dom";
import {
  Grid, List, ListItem
} from '@material-ui/core';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Bookshelf from './components/Bookshelf/Bookshelf';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-176552765-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Grid container spacing={8}>
              <Grid item sm={2}>
                <nav>
                  <List className="navigationMenu">
                    <ListItem >
                      <Link to="/">Home</Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/projects">Projects</Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/bookshelf">Bookshelf</Link>
                    </ListItem>
                  </List>
                </nav>
              </Grid>
              <Grid item sm={9}>
                <Switch>
                  <Route path="/projects">
                    <Projects />
                  </Route>
                  <Route path="/bookshelf">
                    <Bookshelf />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </Grid>
            </Grid>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
