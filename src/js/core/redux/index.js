import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import weather from 'core/redux/weather';

const composeEnhancers =
	process.env.NODE_ENV === 'development'
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: null || compose;
const store = createStore(weather, composeEnhancers(applyMiddleware(thunk)));

export default store;
