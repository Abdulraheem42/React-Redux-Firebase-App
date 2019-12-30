import authReducers from './authReducers';
import projectReducers from './projectReducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducers,
    project: projectReducers
});

export default rootReducer
