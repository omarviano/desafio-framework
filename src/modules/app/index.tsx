import React, { lazy, Suspense } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

const Albums = lazy(
  () =>
    import(
      /* webpackChunkName: "Albums" */
      /* webpackPrefetch: true */
      './albums'
    ),
);

const Posts = lazy(
  () =>
    import(
      /* webpackChunkName: "Posts" */
      /* webpackPrefetch: true */
      './posts'
    ),
);

const Todos = lazy(
  () =>
    import(
      /* webpackChunkName: "ToDos" */
      /* webpackPrefetch: true */
      './todos'
    ),
);

const App: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <div>
      APP / {path}
      <Suspense fallback={<div>Carregando</div>}>
        <Switch>
          <Route path={`${path}/albums`} exact component={Albums} />
          <Route path={`${path}/posts`} component={Posts} />
          <Route path={`${path}/todos`} component={Todos} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
