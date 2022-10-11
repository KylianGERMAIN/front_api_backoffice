export function errorlist(error: String) {
  switch (error) {
    case "404 user not found":
      return "Your account does not exist";
    case "403 badpassword":
      return "Your password is wrong";
    case "500 error while searching for your account in the database":
      return "Error with de database";
    default:
      break;
  }
}
