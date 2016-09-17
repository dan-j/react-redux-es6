import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  // make courseReducer available via state.courses rather than state.courseReducer
  // also using ES6 'short-hand property name' -- equivalent to `courses: courses`
  courses,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
