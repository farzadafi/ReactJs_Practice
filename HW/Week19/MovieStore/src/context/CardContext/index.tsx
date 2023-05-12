import {createContext, ReactNode, useContext, useReducer} from "react";
import {initialState} from "@/reducer/CardReducer";
import {MovieReducer} from "@/reducer";
import {Movie} from "@/interfaces/Movie";

const MoviesContext = createContext(initialState)

interface Props {
  children : ReactNode
}

export const MovieProvider = ({children}:Props) => {
  const [state, dispatch] = useReducer(MovieReducer, initialState);

  const addMovie = (movie : Movie) => {
    const updateMovies = [...state.movies, movie]

    dispatch({
      type: "ADD_TO_MOVIES",
      payload: {
        movies: updateMovies
      }
    });
  };

  const value = {
    movies: state.movies,
    addMovie,
  };
  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>;
}

export const useMovie = () => {
  const context = useContext(MoviesContext);

  if (context === undefined)
    throw new Error("naser eat you!!");

  return context;
};