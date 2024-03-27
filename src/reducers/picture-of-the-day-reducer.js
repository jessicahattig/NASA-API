import * as c from '../actions/ActionTypes';

const todaysPictureReducer = (state, action) => {
  switch (action.type) {
    case c.GET_TODAYS_PICTURE_SUCCESS:
      return {
        ...state, 
        isLoaded: true,
        todaysPicture: action.todaysPicture
      };
    case c.GET_TODAYS_PICTURE_FAILURE:
      return {
        ...state,
        isLoaded: true,
        error: action.error
      };
    default:
      throw new Error(`There is no action matching ${action.type}.`);
  }
};

export default todaysPictureReducer;