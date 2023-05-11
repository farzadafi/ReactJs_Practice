import {Movie} from "@/interfaces/Movie";

interface State {
  movies: Movie[];
  addMovie: (movie: Movie) => void;
}

export const initialState: State = {
  movies: [],
  addMovie: () => {
  }
};

interface Action {
  type: string;
  payload: {
    movies: Movie[]
  };
}

const MovieReducer = (state, action: Action) => { // :State here :)
  const {type, payload} = action;

  switch (type) {
  case "ADD_TO_MOVIES":
    return {
      ...state,
      movies: payload.movies
    };
  default:
    return false;
  }
};

export default MovieReducer;
