import authReducers from './authReducers';
import projectReducers from './projectReducers';
import { combineReducers } from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducers,
    project: projectReducers,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer
