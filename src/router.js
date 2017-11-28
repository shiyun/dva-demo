import React from 'react';
import { Router, Route, Switch, Redirect, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic'

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history, app }) {
  const noFoundPage = dynamic({
    app,
    component: () => import('./routes/NoFound/index'),
  });

  const routes = [
    {
      path: '/summary',
      // models: () => [import('./models/summary')],
      component: () => import('./routes/Summary'),
    }, {
      path: '/login',
      models: () => [import('./models/login')],
      component: () => import('./routes/Login'),
    }, {
      path: '/main/:page',
      models: () => [import('./models/main')],
      component: () => import('./routes/Main/index'),

    }, {
      path: '*',
      component: () => import('./routes/NoFound/index'),
    },
  ];

  return (
    <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/login" />)} />
          {
            routes.map(({ path, ...dynamics }, key) => (
              <Route key={key}
                exact
                path={path}
                component={dynamic({
                  app,
                  ...dynamics,
                })}
              />
            ))
          }
          <Route component={noFoundPage} />
        </Switch>
    </ConnectedRouter>
  );
}

export default RouterConfig;
