import { combineReducers } from 'redux';

import { firstreduce } from './reducers';
import { secondreducers } from './secondreducers';


const rootReducer = combineReducers({ firstreduce , secondreducers });

export default rootReducer;