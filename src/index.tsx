import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home/Home';
import store from './store/store';

import '@fontsource/roboto';
import NoMatch from './pages/NoMatch/NoMatch';
import Details from './pages/Details/Details';
import Favourites from './pages/Favourites/Favourites';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>

      <BrowserRouter >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favourites" component={Favourites} />
          <Route exact path="/gnome/:id" component={Details} />
          <Route exact path="*" component={NoMatch} />
        </Switch>
      </BrowserRouter >

    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
