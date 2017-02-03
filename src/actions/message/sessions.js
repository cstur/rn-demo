import {API_ROOT} from '../../constants/config';
//import { Schemas } from '../../utils/schema';
//import { normalize } from 'normalizr';
import isEmpty from 'lodash/isEmpty';

import {
  SESSIONS_REQUEST,
  SESSIONS_SUCCESS,
  SESSIONS_FAILURE
} from '../../constants/ActionTypes'

function sessionsRequest() {
  return {
    type: SESSIONS_REQUEST,
  }
}

function sessionsSuccess(payload) {
  /*
  const normalized = normalize(payload.data,Schemas.CATEGORY_ARRAY);
  return {
    type: CATEGORIES_SUCCESS,
    entities:normalized.entities
  }*/
  return {
    type: SESSIONS_SUCCESS,
    entities:[{name:'abc',sectionID:1},{name:'222',sectionID:2}]
  }
}

function sessionsFailure(error) {
  return {
    type: SESSIONS_FAILURE,
    error: error
  }
}

export function fetchSessions() {

  /*const url = API_ROOT + '/categories';*/
  const url = 'http://baidu.com'
  return function (dispatch,getState) {

    if(!isEmpty(getState().entities.sessions)) {
      return;
    }

    dispatch(sessionsRequest());
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch(sessionsSuccess(json));
      })
      .catch(error => dispatch(sessionsFailure(error)))
  };
}
