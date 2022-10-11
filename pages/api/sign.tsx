import axios from "axios";
import { errorlist } from "./error";

export async function signIn(email: String, password: String): Promise<string> {
  console.log(email, password);
  var data = JSON.stringify({
    email: email,
    password: password,
  });

  var config = {
    method: "post",
    url: "http://localhost:10000/auth/login",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvZ2luQGhvdG1haWwuY29tIiwiaWQiOiJkN2U4ZTczNC1mNmJiLTQ0ZTItOGQ0Mi0zMjFiOTI5MGMzNDIiLCJpYXQiOjE2NjQ4Nzk0MDAsImV4cCI6MTY2NDg4MTIwMH0.JuEPoIKbfm5AeS7QmzjKLKWLtK9XFDz1jU5ur-3bEEc",
      "Content-Type": "application/json",
    },
    data: data,
  };

  const response = await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      localStorage.setItem(
        "refreshToken_APIbackoffice",
        response.data.refreshToken
      );
      localStorage.setItem(
        "accessToken_APIbackoffice",
        response.data.accessToken
      );
      return "";
    })
    .catch(function (error) {
      return errorlist(error.response.data.message);
    });
  return response;
}
