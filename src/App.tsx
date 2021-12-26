import React, {useEffect, useState} from 'react';
import {MovieList} from "./components/movie-list";
import {getMovieList} from "./services/movies/movies.api";
import {CreateMovie} from "./components/create-movie";
import {MovieModel} from "./models/movie-list/movie-list.model";
import styles from "./index.module.scss";

let moviesDefaultValue: MovieModel[] = [{
  title: '123',
  _id: '1232131212',
  image: '13213121312',
  rating: 1
}];

export const MoviesContext = React.createContext(moviesDefaultValue);

const App = function () {
  const [movies, setMovies] = useState(moviesDefaultValue);

  useEffect(() => {
    void getMovies();
  }, []);

  useEffect(() => {
    setMovies(moviesDefaultValue)
  }, [MoviesContext])

  const getMovies = async () => {
    const movies: any = await getMovieList();

    if (movies.statusCode === 200) {
      moviesDefaultValue = movies.data;
      setMovies(moviesDefaultValue);
    }
  }

  return (
    <div className={styles.App}>
      <div>
        <MoviesContext.Provider value={moviesDefaultValue}>
          <CreateMovie movies={movies}/>
          <MovieList movies={movies}/>
        </MoviesContext.Provider>
      </div>
    </div>
  );
};

export default App;
