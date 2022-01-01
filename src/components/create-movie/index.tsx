import {Input} from "../input";
import {MovieModel} from "../../models/movie-list/movie-list.model";
import {createMovie} from "../../services/movies/movies.api";
import styles from './index.module.scss';
import React from "react";

export const CreateMovie = (props: {movies: MovieModel[], updateMovies: React.Dispatch<React.SetStateAction<MovieModel[]>>}) => {

  const formedMovie = async (e: any) => {
    e.preventDefault();
    const movieInfo: MovieModel = {
      title: e.target.title.value,
      rating: e.target.rating.value,
      image: '123'
    }

    const movie = await createMovie(movieInfo);

    if (movie.statusCode === 200 || movie.statusCode === 201) {
      props.updateMovies([...props.movies, movieInfo]);
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