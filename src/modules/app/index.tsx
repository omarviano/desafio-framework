import React, { lazy, Suspense } from 'react';
import {
  NavLink,
  Route,
  Switch,
  useRouteMatch,
  Redirect,
} from 'react-router-dom';

import { ReactComponent as Logo } from 'assets/svg/logo-frwk.svg';

import { Container, Sidebar, Page } from './styles';

const Albums = lazy(
  () =>
    import(
      /* webpackChunkName: "albums" */
      /* webpackPrefetch: true */
      './albums'
    ),
);

const Posts = lazy(
  () =>
    import(
      /* webpackChunkName: "posts" */
      /* webpackPrefetch: true */
      './posts'
    ),
);

const Todos = lazy(
  () =>
    import(
      /* webpackChunkName: "todos" */
      /* webpackPrefetch: true */
      './todos'
    ),
);

const App: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Container>
      <Sidebar>
        <Logo />

        <NavLink to={`${path}/albums`}>Álbuns</NavLink>
        <NavLink to={`${path}/posts`}>Posts</NavLink>
        <NavLink to={`${path}/todos`}>Todos</NavLink>
      </Sidebar>

      <Page>
        <Suspense fallback={<div>Carregando...</div>}>
          <Switch>
            <Route
              exact
              path={`${path}`}
              render={() => <Redirect to={`${path}/albums`} />}
            />
            <Route path={`${path}/albums`} component={Albums} />
            <Route path={`${path}/posts`} component={Posts} />
            <Route path={`${path}/todos`} component={Todos} />
          </Switch>
        </Suspense>
      </Page>
    </Container>
  );
};

export default App;
