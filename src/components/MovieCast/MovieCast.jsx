import { useEffect, useState } from "react";
import { fetchDataCredits } from "../../tmdbApi";
import css from "./MovieCast.module.css";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

export default function MovieCast() {
  const [value, setValue] = useState([]);
  const location = useLocation();

  const url = location.pathname;
  function extractNumbersFromUrl(url) {
    return Array.from(url)
      .filter((char) => !isNaN(char) && char !== " ")
      .join("")
      .toString();
  }
  const id = extractNumbersFromUrl(url);

  useEffect(() => {
    async function getDataCredits() {
      const response = await fetchDataCredits(id);
      const data = response.cast.slice(0, 5);

      setValue(data);
    }
    getDataCredits();
  }, []);

  return (
    <>
      <h2>MovieCast</h2>
      {value.length > 0 && (
        <ul key={`movie-${id}`} className={css.list}>
          {value.map((item, index) => (
            <li key={`${item.id}-${index}`}>
              <h3>{item.name}</h3>
              <div className={css.boxImg}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
