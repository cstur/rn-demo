import {API_ROOT} from './../constants/config';
//import { Schemas } from './../utils/schema';
//import { normalize } from 'normalizr';
import isEmpty from 'lodash/isEmpty';

import {
  MESSAGES_REQUEST,
  MESSAGES_SUCCESS,
  MESSAGES_FAILURE,
} from '../constants/ActionTypes';

function messagesRequest() {
  return {
    type: MESSAGES_REQUEST
  }
}

function messagesSuccess(payload) {
  //const normalized = normalize(payload.data,Schemas.TIMING_ARRAY);
  return {
    type: MESSAGES_SUCCESS,
    entities:{messages:payload}
  }
}

function messagesFailure(error) {
  return {
    type: MESSAGES_FAILURE,
    error: error
  }
}

export function fetchMessages() {
  var url = API_ROOT +'/messages';
  return (dispatch,getState) => {
    // if(!isEmpty(getState().entities.timings)) {
    //   return;
    // }
    dispatch(messagesRequest());
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch(messagesSuccess(json))
      })
      .catch((err)=> {
        dispatch(messagesFailure(err));
      })
  }
}
