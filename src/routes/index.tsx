import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/skills" exact component={Home} />
      <Route path="/about" exact component={Home} />
      <Route path="/projects" exact component={Home} />
      <Route path="/contact" exact component={Home} />
    </Switch>
  </Router>
);

export default Routes;
