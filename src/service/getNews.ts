import axios, { AxiosResponse } from "axios";
import { DataNews } from "../Types/dataNews.type";

const NEWS_API_BASE_URL = "https://newsapi.org/v2";
const NEWS_API_KEY = "5a8e8f9449db47c3af8d1b38d82eb835";

// interface NewsData {
//   // Definisikan tipe data sesuai dengan res.data yang diharapkan dari API
//   status: string;
//   articles?: Array<string>; // Sesuaikan ini dengan struktur data yang diterima dari API
//   category: string;
// }

interface GetNewsOptions {
  searchQuery?: string;
}

export const getNews = async ({
  searchQuery = "technology",
}: GetNewsOptions): Promise<DataNews | undefined> => {
  try {
    /* To see available path options
    go to News API docs
    https://newsapi.org/docs/endpoints */
    const path = "/everything";
    const query = `?q=${searchQuery}&apiKey=${NEWS_API_KEY}`;
    const endpointURL = `${NEWS_API_BASE_URL}${path}${query}&pageSize=40`;

    const res: AxiosResponse<DataNews> = await axios.get(endpointURL);
    console.log(res);

    if (res.status === 200) {
      const additionalObj = {
        category: searchQuery,
      };
      const restData = { ...res.data, ...additionalObj };

      return restData;
    }
  } catch (error) {
    console.error("Error getting Tech News: ", error);
  }

  return undefined;
};
