import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index'

const composeEnhancers = (typeof window !== 'undefined' && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_) || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

export default store;
