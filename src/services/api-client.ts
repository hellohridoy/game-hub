import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "719bae973a3a41e499ae13a9b467ea2f",
  },
});
