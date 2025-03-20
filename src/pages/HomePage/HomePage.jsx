import css from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import fetchDataTrending from "../../tmdbApi";
import { useEffect, useState } from "react";
export default function HomePage() {
  // const [listMovies, setListMovies] = useState([]);
  // const [loader, setloader] = useState(false);
  // const [error, setError] = useState(false);
  // useEffect(() => {}, []);
  return (
    <div className={css.section}>
      <MovieList />
    </div>
  );
}
