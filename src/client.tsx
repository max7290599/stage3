import * as React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, Store } from 'redux';
import store from './redux/store';
import { renderApp } from './renderApp';

function run(store?: Store) {
  hydrate(
    // renderApp(),

    // (
    //   <BrowserRouter>
    //     { renderApp() }
    //   </BrowserRouter>
    // ),

    (
      <Provider store={store}>
        <BrowserRouter>
          { renderApp() }
        </BrowserRouter>
      </Provider> 
    ),

    document.getElementById('root'),
  );
}

run(store);
