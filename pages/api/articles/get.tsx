import axios, { AxiosResponse } from "axios";
import { errorListArticle } from "./error";
import { refreshAccessToken } from "../token";

export async function getArticle(): Promise<any> {
  var config = {
    method: "get",
    url: `${process.env.NEXT_PUBLIC_API_URL}/articles/getArticles`,
    headers: {
      Authorization:
        "Bearer " + localStorage.getItem("accessToken_APIbackoffice"),
      "Content-Type": "application/json",
    },
  };

  const response = await axios(config).catch(async function (error) {
    console.log(error);
    if (error.response.data.errors === undefined) {
      if (error.response.data.message === "401 jwt expired") {
        await refreshAccessToken();
        return await getArticle();
      }
      return { error: errorListArticle(error.response.data.message) };
    }
  });
  return response;
}
