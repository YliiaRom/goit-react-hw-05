import axios from "axios";

//base_url file_size file_path

const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

//Trending movies - список найпопулярніших фільмів
const URL_trending =
  "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWJiYjM2YmFhZDQyYWRhZWZlZjQ3ZGNiMDk2YjE4YyIsIm5iZiI6MTc0MjI3NTE4My4wNjgsInN1YiI6IjY3ZDkwMjZmYzA1NjZhMTAwYTA4N2Y1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tsSYqzIwvbPkS8g9M5scF0XyRJqf7i9fkyW9CKg1MrU";
const BASE_URL = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization: `${API_TOKEN}`,
    Accept: "application/json",
  },
};

export default async function fetchDataTrending() {
  try {
    const { data } = await axios.get(URL_trending, options);
    return data;
  } catch (error) {
    console.error("Ошибка запроса:", error);
  }
}
//Search movie - пошук фільму за ключовим словом на сторінці фільмів
// const URL_SearchAPI =
//   "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

export async function fetchDataWithSearch(query, page) {
  try {
    // if (query === "") {
    //   return;
    // }
    // if (!query.trim()) {
    //   return null;
    // }
    const URL_SearchAPI = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;
    const { data } = await axios.get(URL_SearchAPI, options);
    return data;
  } catch (error) {
    console.log(`URL_SearchAPI error ${error} `);
    return null;
  }
}
//Movie details  - запит повної інформації про фільм для сторінки кінофільму
const URL_details =
  "https://api.themoviedb.org/3/movie/movie_id?language=en-US";
//'https://api.themoviedb.org/3/movie/777443?language=en-US'
export async function fetchDataDetails(id) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );

  return data;
}

//Movie credits - запит інформації про акторський склад для сторінки кінофільму
const URL_credits =
  "https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US";
//'https://api.themoviedb.org/3/movie/696506/credits?language=en-US'

export async function fetchDataCredits(id) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      options
    );

    return data;
  } catch (error) {
    console.log(`error in js credits- ${error}`);
  }
}
//Movie reviews - запит оглядів для сторінки кінофільму.
const URL_reviews =
  "https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1";
export async function fetchReviews(id) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
      options
    );

    return data;
  } catch (error) {
    console.log(`error reviews -${error}`);
  }
}
