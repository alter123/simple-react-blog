import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';  
import thunk from 'redux-thunk';
import { rootReducer } from './components/Redux';

const middleware = [thunk]
const store = createStore( rootReducer, {}, applyMiddleware( ...middleware ))

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
 document.getElementById('root'));

serviceWorker.unregister();
