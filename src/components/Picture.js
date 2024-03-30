import React, { useEffect, useReducer } from 'react';
import todaysPictureReducer from './../reducers/picture-of-the-day-reducer';
import { getTodaysPictureFailure, getTodaysPictureSuccess } from './../actions/index';

const initialState = {
  isLoaded: false,
  todaysPicture: null,
  error: null
};

function Picture() {
  const [state, dispatch] = useReducer(todaysPictureReducer, initialState);

  useEffect(() => {
    // const currentDate = new Date().toISOString().split('T')[0];
    const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`;

    fetch(apiURL)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then((jsonifiedResponse) => {
        const action = getTodaysPictureSuccess(jsonifiedResponse);
        dispatch(action);
      })
      .catch((error) => {
        const action = getTodaysPictureFailure(error.message);
        dispatch(action);
      });
  }, []);

  const { error, isLoaded, todaysPicture } = state;

  if (error) {
    return <h1>Error: {error}</h1>;
  } else if (!isLoaded) {
    return <h1>...Loading...</h1>;
  } else {
    return (
      <React.Fragment>
        <ul>
          <h1>Picture of The Day!</h1>
        
        <p>{${date}}</p>
        </ul>
      </React.Fragment>
    );
  }
}

export default Picture;
