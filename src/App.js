import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';
import { Home } from "./pages/Home";
import { Experience } from './pages/Experience';
import { Projects } from './pages/Projects';
import { Blog } from "./pages/Blog";

const history = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/blog" component={Blog} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
