import React, {useEffect, useState} from 'react';
import {MovieList} from "./components/movie-list";
import {getMovieList} from "./services/movies/movies.api";
import {CreateMovie} from "./components/create-movie";
import {MovieModel} from "./models/movie-list/movie-list.model";
import styles from "./index.module.scss";
import {Loading} from "./components/loading";
import {TerminalInput} from "./components/terminal-input";
import {useAppSelector} from "./redux/hooks";
import {Commands} from "./models/Commands";
import {ErrorCommand} from "./components/error-command";

let moviesDefaultValue: MovieModel[] = [];

const App = function () {
  const [movies, setMovies] = useState(moviesDefaultValue);
  const terminal = useAppSelector((state => state.terminalInput.value));

  useEffect(() => {
    void getMovies();
  }, []);

  const getPossibleCommands = () => {
    if (terminal[0] !== '') {
      return Object.values<string>(Commands).includes(terminal[0]);
    }

    return true
  }

  const getMovies = async () => {
    const movies: any = await getMovieList();

    if (movies.statusCode === 200) {
      setMovies(movies.data);
    }
  }

  return (
    <div className={styles.App}>
      <div>
        <Loading/>
        <TerminalInput/>
        {!getPossibleCommands() && <ErrorCommand command={terminal[0]}/>}
        {terminal[0] === Commands.SET && terminal[1] === 'movie_list' && <CreateMovie movies={movies} updateMovies={setMovies}/>}
        {terminal[0] === Commands.SHOW && terminal[1] === 'movie_list' && <MovieList movies={movies}/>}
      </div>
    </div>
  );
};

export default App;
