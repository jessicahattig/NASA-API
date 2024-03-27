import React, { useState } from 'react';

function Picture() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [picture, setPicture] = useState([]);
  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json()
      }
    })
      .then((jsonifiedResponse) => {
          picture(jsonifiedResponse.results)
          setIsLoaded(true)
        })
      .catch((error) => {
        setError(error)
        setIsLoaded(true)
      });
    }, []) 
    if (error) {
      return <h1>Error: {error}</h1>;
    } else if (!isLoaded) {
      return <h1>...Loading...</h1>;
    } else {
      return (
        <React.Fragment>
          <h1>Picture of The Day! </h1>
          <ul>
            {picture.map((article, index) =>
              <li key={index}>
                <h3>{article.title}</h3>
                <p>{article.abstract}</p>
              </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
}

export default Picture;





