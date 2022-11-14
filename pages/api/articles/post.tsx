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

export async function createArticle(
  _title: string,
  _content: string
): Promise<any> {
  var data = JSON.stringify({
    title: _title,
    content: _content,
  });
  var config = {
    method: "post",
    url: `${process.env.NEXT_PUBLIC_API_URL}/articles/createArticle`,
    headers: {
      Authorization:
        "Bearer " + localStorage.getItem("accessToken_APIbackoffice"),
      "Content-Type": "application/json",
    },
    data: data,
  };

  const response = await axios(config).catch(async function (error) {
    if (error.response.data.errors === undefined) {
      if (error.response.data.message === "401 jwt expired") {
        await refreshAccessToken();
        return await createArticle(_title, _content);
      }
      return { error: errorListArticle(error.response.data.message) };
    }
  });
  return response;
}

export async function updateArticle(
  _id: string,
  _title: string,
  _content: string
): Promise<any> {
  var data = JSON.stringify({
    id: _id,
    title: _title,
    content: _content,
  });
  var config = {
    method: "post",
    url: `${process.env.NEXT_PUBLIC_API_URL}/articles/updateArticle`,
    headers: {
      Authorization:
        "Bearer " + localStorage.getItem("accessToken_APIbackoffice"),
      "Content-Type": "application/json",
    },
    data: data,
  };
  const response = await axios(config).catch(async function (error) {
    if (error.response.data.errors === undefined) {
      if (error.response.data.message === "401 jwt expired") {
        await refreshAccessToken();
        return await updateArticle(_id, _title, _content);
      }
      return { error: errorListArticle(error.response.data.message) };
    }
  });
  return response;
}

