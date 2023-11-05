import axios from "axios";

// const {VUE_APP_API_KEY} = process.env;
// const VUE_APP_API_KEY = "http://localhost:3001"
const VUE_APP_API_KEY = "https://clumsy-tan-garb.cyclic.app"

const user = JSON.parse(localStorage.getItem("user"));
const TOKEN = user && user.accessToken;

export const publicRequest = axios.create({
  baseURL: VUE_APP_API_KEY,
});

export const userRequest = axios.create({
  baseURL: VUE_APP_API_KEY,
  headers: { 'authorization' : `Bearer ${TOKEN}` },
});