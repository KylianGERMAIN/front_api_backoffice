import axios from "axios";
import { errorListAuth } from "./auth/error";

export async function refreshAccessToken(): Promise<string> {
  var config = {
    method: "get",
    url: `${process.env.NEXT_PUBLIC_API_URL}/auth/refreshaccesstoken`,
    headers: {
      Authorization:
        "Bearer " + localStorage.getItem("accessToken_APIbackoffice"),
      "Content-Type": "application/json",
    },
  };

  const response = await axios(config)
    .then(function (response) {
      localStorage.setItem(
        "accessToken_APIbackoffice",
        response.data.accessToken
      );
      return "";
    })
    .catch(function (error) {
      if (error.response.data.errors === undefined) {
        return errorListAuth(error.response.data.message);
      } else {
        return errorListAuth(error.response.data.errors[0].msg);
      }
    });
  return response;
}
