import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Fl0unI-Iy0OWIsxJmH3jFtVa9vH3dBz21y6EjUD7b6k",
  },
});
