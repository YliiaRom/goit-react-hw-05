import css from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import fetchDataTrending from "../../tmdbApi";
import { useEffect, useState } from "react";
export default function HomePage() {
  const [listMovies, setListMovies] = useState([]);
  // const [listMovies, setListMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  // const [loader, setloader] = useState(false);
  // const [error, setError] = useState(false);
  // useEffect(() => {}, []);
  useEffect(() => {
    async function getListTrending() {
      try {
        setError(false);
        setLoader(true);
        const data = await fetchDataTrending();
        if (data && data.results) {
          const rez = data.results;

          setListMovies((prevData) => {
            return [...prevData, ...rez];
          });
          // setListMovies(rez);
        }
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    getListTrending();
  }, []);
  useEffect(() => {}, [listMovies]);
  return (
    <div className={css.section}>
      {loader && <p>loader......</p>}
      {error && <p>error with connection..</p>}

      {listMovies.length > 0 && (
        <>
          <h2> Trending today</h2> <MovieList value={listMovies} />
        </>
      )}
    </div>
  );
}
