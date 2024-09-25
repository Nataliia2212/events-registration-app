import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const fetchEvents = () => API.get("/api/events");

export const fetchUsers = () => API.get("/api/users");

export const createUser = (userData) => API.post("/users", userData);

export const fetchFilms = async () => {
  const { data } = await axios.get("trending/movie/day", {
    params: {
      api_key: "be10d348a4d2768bca02d2487e67ca9d",
    },
  });
  return data.results;
};

export const fetchFilmById = async (id) => {
  const { data } = await axios.get(`movie/${id}`, {
    params: {
      api_key: "be10d348a4d2768bca02d2487e67ca9d",
    },
  });
  return data;
};
