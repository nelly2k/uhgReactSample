import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Router } from "react-router-dom";
import { Provider } from 'react-redux';
import history from './common/history';

import { Store, createStore, combineReducers } from 'redux';
import App from "./components/app"
import rootReducer from './components/reducer';

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

const store: Store<any> = createStore(rootReducer, persistedState)

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  })

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <Router history={history}>
            <App />
            </Router>
        </BrowserRouter>
    </Provider>, document.getElementById("root")
);
