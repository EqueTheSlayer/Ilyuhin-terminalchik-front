import {MovieModel} from "../../models/movie-list/movie-list.model";
import styles from "./index.module.scss";

export const MovieList = (props: {movies: MovieModel[]}) => {
  return (
    <div>
      {props.movies.map((movie, index) => (
        <div key={index} className={styles.Movie}>
          <div className={styles.Title}>[{movie.title}]</div>
          <div>[{movie.rating}]</div>
        </div>
      ))}
    </div>
  )
}