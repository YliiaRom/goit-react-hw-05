import { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import css from "./MoviesPage.module.css";
import { fetchDataWithSearch } from "../../tmdbApi";
import MovieList from "../../components/MovieList/MovieList";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";

export default function MoviesPage() {
  const valueRef = useRef();
  const location = useLocation();

  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const [gallery, setGallery] = useState([]);
  // const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(false);

  //search
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  //use-debounce
  const [valueQueryWithDebounce] = useDebounce(query, 1000);
  //target
  const changeSearchText = (event) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (event.target.value !== "") {
      newSearchParams.set("query", event.target.value);
    } else {
      newSearchParams.delete("query");
    }
    setSearchParams(newSearchParams);
  };
  // export async function fetchDataWithSearch(query, page) {}
  useEffect(() => {
    async function getValueApi() {
      try {
        setError(false);
        setLoader(true);

        const response = await fetchDataWithSearch(
          valueQueryWithDebounce,
          page
        );

        const data = response.results;
        setGallery(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getValueApi();
  }, [valueQueryWithDebounce]);
  // const valueRef = useRef();
  // const location = useLocation();

  // const [gallery, setGallery] = useState([]);
  // const [query, setQuery] = useState("");
  // const [page, setPage] = useState(1);
  // const [visible, setVisible] = useState(false);

  // function initialValues() {
  //   setQuery("");
  //   setPage(1);
  //   setGallery([]);
  // }
  // function newValues(newQuery) {
  //   setQuery(newQuery);
  //   setPage(1);
  //   setGallery([]);
  // }

  // function handleSubmit(event) {
  //   try {
  //     event.preventDefault();

  //     const form = event.target;
  //     const valueQuery = event.target.elements.query.value.trim();
  //     if (!valueQuery) return;

  //     if (valueQuery !== query) {
  //       newValues(valueQuery);
  //     } else {
  //       setPage((prevPage) => prevPage + 1);
  //     }
  //     if (query == valueQuery) {
  //       async function getSecondFetch() {
  //         try {
  //           const response = await fetchDataWithSearch(query, page);
  //           const data = response.results;
  //           setGallery((prevData) => [...prevData, ...data]);
  //         } catch {
  //           console.log(error);
  //         }
  //       }
  //       getSecondFetch();
  //     }
  //   } catch (error) {
  //     console.log(`Error in mivies page - ${error}`);
  //   }
  // }
  // useEffect(() => {
  //   if (query) {
  //     async function getValueApi() {
  //       try {
  //         const response = await fetchDataWithSearch(query, page);
  //         const data = response.results;

  //         if (!data.length) {
  //           valueRef.current.value = "";
  //           initialValues();
  //           return;
  //         } else {
  //           setGallery((prevGallery) => {
  //             return [...prevGallery, ...data];
  //           });
  //           setPage((prevPage) => prevPage + 1);
  //         }
  //       } catch (error) {
  //         console.log(`data error - ${error}`);
  //       }
  //     }
  //     getValueApi();
  //   }
  // }, [query]);

  return (
    <>
      <div>
        <div className={css.conteiner}>
          <input type="text" value={query} onChange={changeSearchText} />
        </div>

        {loader && <p>loader......</p>}
        {error && <p>error with connection..</p>}
        {gallery.length > 0 && <MovieList value={gallery} />}
        {/* <h2> MoviesPage</h2>
        <form action="#" onSubmit={handleSubmit}>
          <div className={css.conteiner}>
            <input
              ref={valueRef}
              type="text"
              name="query"
              placeholder="Search movies..."
              // value={query}
              // onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button type="submit" className={css.btn}>
            Submit
          </button>
        </form>
        <div>
          {gallery.length > 0 && (
            <ul className={css.list}>
              {gallery.map((item, index) => {
                return (
                  <li key={`${item.id}-${index}`}>
                    <Link
                      to={`/movies/${item.id}`}
                      state={location}
                      className={css.link}
                    >
                      <span>{item.title}</span>
                      <span>- ({item.release_date || "-"})</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div> */}
      </div>
    </>
  );
}
