import {Input} from "../input";
import {useContext} from "react";
import {MoviesContext} from '../../App';
import {MovieModel} from "../../models/movie-list/movie-list.model";
import {createMovie} from "../../services/movies/movies.api";
import styles from './index.module.scss';

export const CreateMovie = (props: {movies: MovieModel[]}) => {
  const setUpdatedMovies = useContext(MoviesContext);

  const formedMovie = async (e: any) => {
    e.preventDefault();
    const movieInfo: MovieModel = {
      title: e.target.title.value,
      rating: e.target.rating.value,
      image: '123'
    }

    const movie = await createMovie(movieInfo);

    if (movie.statusCode === 200 || movie.statusCode === 201) {
      setUpdatedMovies.push(movieInfo);
      e.target.title.value = '';
      e.target.rating.value = '';
    }
  }

  return (
    <form onSubmit={formedMovie} className={styles.Form}>
      <Input name={'title'} type={'text'} placeholder={'Название_'}/>
      <Input name={'rating'} type={'number'} max={10} step={0.1} placeholder={'Оценка_'}/>
      <button type={"submit"}>[Добавить фильм]</button>
    </form>
  )
}