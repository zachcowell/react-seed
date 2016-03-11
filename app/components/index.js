import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './App';
import DetailedBarExample from './Examples/DetailedBarExample';
import DianaMountains from './Examples/DianaMountains';
import ExamplesList from './ExamplesList';

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={DianaMountains} />
        <Route path="/examples" component={ExamplesList}/>
        <Route path="/detailed" component={DetailedBarExample}/>
        <Route path="/diana-mountains" component={DianaMountains}/>
      </Route>
    </Router>
  , document.getElementById('app')
);
