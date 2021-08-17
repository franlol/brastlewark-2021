import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import Home from './pages/Home/Home';
import store from './store/store';

import '@fontsource/roboto';
import NoMatch from './pages/NoMatch/NoMatch';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>

      <BrowserRouter >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gnome/:id" component={() => <h1>asd</h1>} />
          <Route exact path="*" component={NoMatch} />
        </Switch>
      </BrowserRouter >

    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
