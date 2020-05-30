import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ToDoPage from '../pages/ToDoPage';

const Routes: React.FunctionComponent = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/todopage" component={ToDoPage} />
  </Switch>
)

export default Routes;


