import { Link, useLocation } from "react-router-dom";
import fetchDataTrending from "../../tmdbApi";
import css from "./MovieList.module.css";

import { useState, useEffect } from "react";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
export default function MovieList({ value }) {
  // const [listMovies, setListMovies] = useState([]);
  // const [loader, setLoader] = useState(false);
  // const [error, setError] = useState(false);
  const location = useLocation();

  // useEffect(() => {
  //   async function getListTrending() {
  //     try {
  //       setError(false);
  //       setLoader(true);
  //       const data = await fetchDataTrending();
  //       if (data && data.results) {
  //         const rez = data.results;

  //         setListMovies((prevData) => {
  //           return [...prevData, ...rez];
  //         });
  //         // setListMovies(rez);
  //       }
  //     } catch (error) {
  //       setError(true);
  //       console.log(error);
  //     } finally {
  //       setLoader(false);
  //     }
  //   }
  //   getListTrending();
  // }, []);
  // useEffect(() => {}, [listMovies]);

  return (
    <>
      {/* {loader && <p>loader......</p>}
      {error && <p>error with connection..</p>}
      {listMovies.length > 0 && (
        <ul className={css.list}>
          {listMovies.map((item, index) => {
            return (
              <li key={`${item.id}-${index}`} className={css.item}>
                <p>
                  <Link
                    to={`/movies/${item.id}`}
                    className={css.link}
                    state={location}
                  >
                    {item.title}
                  </Link>
                </p>
              </li>
            );
          })}
        </ul>
      )} */}
      <div>
        <ul className={css.list}>
          {value.map((item, index) => {
            return (
              <li key={`${item.id}-${index}`} className={css.item}>
                <p>
                  <Link
                    to={`/movies/${item.id}`}
                    className={css.link}
                    state={location}
                  >
                    <span>
                      <span> {item.title}</span>
                      <span>-({item.release_date})</span>
                    </span>
                  </Link>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
