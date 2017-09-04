import { combineReducers } from 'redux';
import {
  projects,
  project,
} from './projects/reducers';

const reducers = combineReducers({
  projects,
  project,
});

export default reducers;
