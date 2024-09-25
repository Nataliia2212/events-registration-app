import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const fetchEvents = () => API.get("/api/events");

export const fetchEventById = (id) => API.get(`/api/events/${id}`);

export const registerUser = (data) => API.post("/api/users/register", data);

export const fetchUsers = (id) => API.get(`/api/users/${id}`);

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
