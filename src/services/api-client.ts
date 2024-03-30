import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5cb785ad626945528df32f97f16dc1a4",
  },
});
