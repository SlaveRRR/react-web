import axios from "axios";
import { IResponseFilms } from "../components/FilmsTable/types";
const apiUrl = "https://api.kinopoisk.dev/v1.4/";
const apiKey = "Q1KQG8F-X2K4TP2-N3Y4TEM-G0TY6S7";

const api = axios.create({
   baseURL: apiUrl,
   headers: {
      "X-API-KEY": apiKey,
      "Content-Type": "application/json",
   },
});

class FilmsApi {
   async getFilms(page: number, limit: number) {
      const response = await api.get<IResponseFilms>(
         `movie?page=${page}&limit=${limit}&selectFields=id&selectFields=name&selectFields=year&selectFields=shortDescription&selectFields=movieLength&selectFields=poster&selectFields=rating&selectFields=genres&selectFields=releaseYears&type=movie&sortField=votes.kp&sortType=-1`,
      );
      if (response.status !== 200) {
         throw new Error(response.statusText);
      }
      return response.data;
   }
}
export const filmsApi = new FilmsApi();
