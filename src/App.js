import React, { Component } from 'react';
import {Route,HashRouter,Switch,Redirect} from "react-router-dom";
import logo from './logo.svg';
import Index from './routes/home/Index';
import './App.css';
import './test.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Index}></Route>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
