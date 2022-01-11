import React, {useEffect, useMemo, useState} from 'react';
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

const App = function () {
  const [movies, setMovies] = useState<MovieModel[]>([]);
  const [commandsExecuted, setCommandsExecuted] = useState<string[]>([])
  const terminal = useAppSelector((state => state.terminalInput.value));
  const CommandToNode = useMemo(() => {
    return {
      [`${Commands.SET} movie_list`]: <CreateMovie updateMovies={setMovies}/>,
      [`${Commands.SHOW} movie_list`]: <MovieList movies={movies}/>,
      'error': <ErrorCommand command={terminal}/>
    }
  }, [movies]);

  const CommandNodes = useMemo(() => {
    return commandsExecuted.map(command => CommandToNode[command])
  }, [commandsExecuted]);

  const getMovies = async () => {
    const movies: any = await getMovieList();

    if (movies.statusCode === 200) {
      setMovies(movies.data);
    }
  }

  useEffect(() => {
    void getMovies();
  }, []);

  return (
    <div className={styles.App}>
      <div>
        <Loading/>
        <TerminalInput onExecuteCommand={setCommandsExecuted}/>
        {CommandNodes}
      </div>
    </div>
  );
};

export default App;
