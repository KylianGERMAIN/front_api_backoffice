import axios from "axios";
import { errorListAuth } from "./error";

export async function signInAPI(
  email: String,
  password: String
): Promise<string> {
  try {
    var data = JSON.stringify({
      email: email,
      password: password,
    });
    var config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios(config).then(function (response) {
      localStorage.setItem(
        "refreshToken_APIbackoffice",
        response.data.refreshToken
      );
      localStorage.setItem(
        "accessToken_APIbackoffice",
        response.data.accessToken
      );
    });
    return "";
  } catch (error: any) {
    console.log(error);
    if (error.response.data.errors === undefined) {
      return errorListAuth(error.response.data.message);
    } else {
      return errorListAuth(error.response.data.errors[0].msg);
    }
  }
}

export async function signUpAPI(
  email: String,
  password: String
): Promise<string> {
  try {
    var data = JSON.stringify({
      email: email,
      password: password,
    });

    var config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios(config).then(function (response) {
      localStorage.setItem(
        "refreshToken_APIbackoffice",
        response.data.refreshToken
      );
      localStorage.setItem(
        "accessToken_APIbackoffice",
        response.data.accessToken
      );
    });

    return "";
  } catch (error: any) {
    if (error.response.data.errors === undefined) {
      return errorListAuth(error.response.data.message);
    } else {
      return errorListAuth(error.response.data.errors[0].msg);
    }
  }
}
