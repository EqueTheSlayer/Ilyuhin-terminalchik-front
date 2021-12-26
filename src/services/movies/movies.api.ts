import {reqApi} from "../../api";
import {reqTypes} from "../../api/api.constants";
import {MovieModel} from "../../models/movie-list/movie-list.model";
import {Response} from "../../api/api.type";

export const getMovieList = ():Promise<Response<MovieModel[]>> => {
  return reqApi(reqTypes.GET, 'movie-list');
}

export const createMovie = (movie: MovieModel) => {
  return reqApi(reqTypes.POST, 'movie-list', movie);
}