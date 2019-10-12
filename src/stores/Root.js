import { createStore, combineReducers } from 'redux';
import launchCollection from './LaunchCollectionReducer';
import rocketInfo from './RocketReducer';

const rootReducer = combineReducers({
  launchCollection,
  rocketInfo,
});

const store = createStore(rootReducer);

export default store;
