import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Authentication = lazy(() => import('modules/authentication'));
const App = lazy(() => import('modules/app'));

const Routes: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route path="/" exact component={Authentication} />
      <Route path="/app" component={App} />
    </Switch>
  </Suspense>
);

export default Routes;
