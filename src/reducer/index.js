import { combineReducers } from 'redux';
import { ratedIdioms } from './ratedIdioms';
import { idioms } from './idioms';

const tidiomsApp = combineReducers({
  ratedIdioms,
  idioms,
});

export default tidiomsApp;
