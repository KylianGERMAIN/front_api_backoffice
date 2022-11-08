import axios, { AxiosResponse } from "axios";
import { errorListArticle } from "./error";
import { refreshAccessToken } from "../token";

export async function deleteArticle(uuid: string): Promise<any> {
  var data = JSON.stringify({
    id: uuid,
  });
  var config = {
    method: "post",
    url: `${process.env.NEXT_PUBLIC_API_URL}/articles/deleteArticle`,
    headers: {
      Authorization:
        "Bearer " + localStorage.getItem("accessToken_APIbackoffice"),
      "Content-Type": "application/json",
    },
    data: data,
  };

  const response = await axios(config).catch(async function (error) {
    console.log(error);
    if (error.response.data.errors === undefined) {
      if (error.response.data.message === "401 jwt expired") {
        await refreshAccessToken();
        return await deleteArticle(uuid);
      }
      return { error: errorListArticle(error.response.data.message) };
    }
  });
  return response;
}
