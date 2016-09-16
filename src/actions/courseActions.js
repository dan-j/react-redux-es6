import * as actions from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function createCourse(course) {
  return {type: actions.CREATE_COURSE, course};
}

function loadCoursesSuccess(courses) {
  return {type: actions.LOAD_COURSES_SUCCESS, courses}
}

export function loadCourses() {
  return function (dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}
