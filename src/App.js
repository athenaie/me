import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import theme from "./components/material-ui/theme";

import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Trivia from "./containers/Trivia/Trivia";
import Volunteering from "./containers/Trivia/Volunteering/Volunteering";
import Library from "./containers/Trivia/Library/Library";
import Hiking from "./containers/Trivia/Hiking/Hiking";
import Projects from "./containers/Projects/Projects";


class App extends Component {
  state = {
    loaded: false
  }
  
  handleLoaded = () => {
    this.setState({loaded: true});
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/trivia/volunteering" component={Volunteering}/>
            <Route path="/trivia/library" component={Library}/>
            <Route path="/trivia/hiking" component={Hiking}/>
            <Route path="/trivia" component={Trivia}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/" component={Home}/>
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
