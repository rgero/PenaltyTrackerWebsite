import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

//Components
import PenaltyTracker from '../components/PenaltyTracker';
import NotFoundPage from '../components/NotFoundPage';


export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={PenaltyTracker} exact={true}/>
        <Route component={NotFoundPage} />
        
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
