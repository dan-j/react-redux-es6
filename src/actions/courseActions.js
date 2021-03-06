import * as actions from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall} from './ajaxStatusActions';

function loadCoursesSuccess(courses) {
  return {type: actions.LOAD_COURSES_SUCCESS, courses};
}

function updateCourseSuccess(course) {
  return {type: actions.UPDATE_COURSE_SUCCESS, course};
}

function createCourseSuccess(course) {
  return {type: actions.CREATE_COURSE_SUCCESS, course};
}

export function loadCourses() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCourse(course) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) :
        dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      throw(error);
    });
  };
}
