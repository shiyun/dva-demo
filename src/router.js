import React from 'react';
import { Router, Route, Switch, Redirect, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic'

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/summary',
      // models: () => [import('./models/summary')],
      component: () => import('./routes/Summary'),
    },{
      path: '/login',
      models: () => [import('./models/login')],
      component: () => import('./routes/Login'),
    },{
      path: '/main',
      models: () => [import('./models/main')],
      component: () => import('./routes/Main/index'),
    },
  ]
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
        </Switch>
    </ConnectedRouter>
  );
}

export default RouterConfig;
