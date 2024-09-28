import axios from "axios";

const { REACT_APP_API_URL } = process.env;

const API = axios.create({
  baseURL: REACT_APP_API_URL,
});

export const fetchEvents = () => API.get("/api/events");

export const fetchEventById = (id) => API.get(`/api/events/${id}`);

export const createEvent = (data) => API.post(`/api/events/`, data);

export const registerUser = (data) => API.post("/api/users/register", data);

export const fetchUsers = (id) => API.get(`/api/users/event/${id}`);

export const fetchUserById = (id) => API.get(`/api/users/${id}`);
