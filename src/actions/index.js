import * as c from './ActionTypes';

export const getTodaysPictureSuccess = (picture) => ({
  type: c.GET_TODAYS_PICTURE_SUCCESS,
  picture
});

export const getTodaysPictureFailure = (error) => ({
  type: c.GET_TODAYS_PICTURE_FAILURE,
  error
});