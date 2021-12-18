import React, {useEffect, useState} from 'react';
import {reqApi} from './api';
import {reqTypes} from "./api/api.constants";

const App = function () {
  const [movies, setMovies] = useState([{title: '123'}]);
  useEffect(() => {
    void getMovies();
  })

  const getMovies = async () => {
    const pizda: any = await reqApi(reqTypes.GET, 'movie-list');

    if (pizda.statusCode === 200) {
      setMovies(pizda.data);
    }
  }

  return (
    <div className="App">
      {movies.map((movie, index) => (
          <div key={index}>{movie.title}</div>
        )
      )}
    </div>
  );
};

export default App;
