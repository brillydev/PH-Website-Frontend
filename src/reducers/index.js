import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import sessionReducer from './session';
import flashReducer from './flash';

export default combineReducers({
	sessionState: sessionReducer,
	flashState: flashReducer,
	routerState: routerReducer
});
