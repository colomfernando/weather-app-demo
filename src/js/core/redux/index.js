import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import weather from 'core/redux/weather';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(weather, composeEnhancers(applyMiddleware(thunk)));

export default store;
