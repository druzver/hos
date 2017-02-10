import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducers/reduser'
import {composeWithDevTools} from 'remote-redux-devtools'

const composeEnhancers = composeWithDevTools({
    realtime: true,
    hostname: '192.168.8.119',
    port: 5678
});

const initialState = {};

let store = createStore(reducer, initialState, composeEnhancers(
    applyMiddleware(thunk)
));

module.exports = store;