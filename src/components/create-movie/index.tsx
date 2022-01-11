import {Input} from "../input";
import {MovieModel} from "../../models/movie-list/movie-list.model";
import {createMovie} from "../../services/movies/movies.api";
import styles from './index.module.scss';
import React, {useState} from "react";

export const CreateMovie = (props: {updateMovies: React.Dispatch<React.SetStateAction<MovieModel[]>>}) => {
  const [createSuccess, setCreateSuccess] = useState<boolean>(false);
  const [newMovieTitle, setNewMovieTitle] = useState<string>()

  const formedMovie = async (e: any) => {
    e.preventDefault();
    const movieInfo: MovieModel = {
      title: e.target.title.value,
      rating: e.target.rating.value,
      image: '123'
    }

    const movie = await createMovie(movieInfo);

    if (movie.statusCode === 200 || movie.statusCode === 201) {
      setNewMovieTitle(movieInfo.title);
      movieCreateSuccess()
      props.updateMovies(prevState => [...prevState, movieInfo]);
      e.target.title.value = '';
      e.target.rating.value = '';
    }
  }

  const movieCreateSuccess = () => {
    setCreateSuccess(true);

    setTimeout(() => {
      setCreateSuccess(false);
    }, 1500);
  }

  return (
    <div>
      {!createSuccess && <form onSubmit={formedMovie} className={styles.Form}>
        <Input name={'title'} type={'text'} placeholder={'Название_'}/>
        <Input name={'rating'} type={'number'} max={10} step={0.1} placeholder={'Оценка_'}/>
        <button type={"submit"}>[Добавить фильм]</button>
      </form>}
      {createSuccess && <div>{newMovieTitle} был успешно добавлен</div>}
    </div>
  )
}