import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import App from './App';
import myApp from './reducers';
import * as serviceWorker from './serviceWorker';


let store = createStore(myApp);

function render() {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
