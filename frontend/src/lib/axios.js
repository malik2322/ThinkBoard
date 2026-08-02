// import axios from "axios";

// const BASE_URL =
//   import.meta.env.NODE_ENV === "development"
//     ? "http://localhost:5001/api"
//     : import.meta.env.VITE_API_URL;

// const api = axios.create({
//   baseURL: BASE_URL,
// });

// export default api;


import axios from "axios";

console.log("MODE:", import.meta.env.MODE);
console.log("API:", import.meta.env.VITE_API_URL);

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default api;