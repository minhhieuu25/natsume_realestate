import axios from "axios";
export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "ee96c35030mshc0b1ed53698ef64p1f9a47jsn0916cec152f9",
    },
  });

  return data;
};
