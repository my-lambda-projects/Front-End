import {axiosWithAuth} from '../utils/axiosWithAuth';

export const GET_EVENTS_LOADING = 'GET_EVENTS_LOADING';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_FAILURE = 'GET_EVENTS_FAILURE';

export const GET_EVENT_BY_ID_LOADING = 'GET_EVENT_BY_ID_LOADING';
export const GET_EVENT_BY_ID_SUCCESS = 'GET_EVENT_BY_ID_SUCCESS';
export const GET_EVENT_BY_ID_FAILURE = 'GET_EVENT_BY_ID_FAILURE';

export const ADD_EVENT_LOADING = 'ADD_EVENT_LOADING';
export const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS';
export const ADD_EVENT_FAILURE = 'ADD_EVENT_FAILURE';

export const DELETE_EVENT_LOADING = 'DELETE_EVENT_LOADING';
export const DELETE_EVENT_SUCCESS = 'DELETE EVENT_SUCCESS';
export const DELETE_EVENT_FAILURE = 'DELETE_EVENT_FAILURE';

export const EDIT_EVENT_LOADING = 'EDIT_EVENT_LOADING';
export const EDIT_EVENT_SUCCESS = 'EDIT_EVENT_SUCCESS';
export const EDIT_EVENT_FAILURE = 'EDIT_EVENT_FAILURE';

export const getOrganizerEvents = (user_id) => (dispatch) => {
  dispatch({ type: GET_EVENTS_LOADING });
  axiosWithAuth()
    .get(`api/events/organizer/${user_id}`)
    .then((res) => dispatch({ type: GET_EVENTS_SUCCESS, payload: res.data }))
    .catch((err) => {
      console.log("Error from Action:", err);
      dispatch({
        type: GET_EVENTS_FAILURE,
        // payload: err.response.data.message,
        payload: err,
      });
      
    });
};

export const getEventId = (eventId) => (dispatch) => {
  console.log('test');
  dispatch({ type: GET_EVENT_BY_ID_LOADING });
  axiosWithAuth()
    .get(`api/events/${eventId}`)
    ///api/events/:event_id
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_EVENT_BY_ID_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: GET_EVENT_BY_ID_FAILURE,
        payload: err,
      });
    });
};

export const addEvent = (newEvent) => (dispatch) => {
  dispatch({ type: ADD_EVENT_LOADING });
  console.log(newEvent);
  axiosWithAuth()
    .post('api/events', newEvent)
    .then((res) => dispatch({ type: ADD_EVENT_SUCCESS, payload: res.data }))
    .catch((err) => {
      dispatch({
        type: ADD_EVENT_FAILURE,
        payload: err,
      });
    });
};
export const deleteEvent = (event_id) => (dispatch) => {
  dispatch({ type: DELETE_EVENT_LOADING });
  axiosWithAuth()
    .delete(`api/events/${event_id}`)
    ///api/events/:event_id
    .then((res) => dispatch({ type: DELETE_EVENT_SUCCESS, payload: res.data }))
    .catch((err) => {
      dispatch({
        type: DELETE_EVENT_FAILURE,
        payload: err,
      });
    });
};
export const editEvent = (event_id, editedEvent) => (dispatch) => {
  //console.log(event_id);
  dispatch({ type: EDIT_EVENT_LOADING });
  axiosWithAuth()
    .put(`api/events/${event_id}`, editedEvent)
    .then((res) => dispatch({ type: EDIT_EVENT_SUCCESS, payload: res.data }))
    .catch((err) => {
      dispatch({
        type: EDIT_EVENT_FAILURE,
        payload: err,
      });
    });
};

