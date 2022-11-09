export function errorListAuth(error: String) {
  switch (error) {
    case "401 jwt expired":
      return "Your Json Web Token has expired";
    case "401 jwt invalid":
      return "Your Json Web Token is invalid";
    case "403 badpassword":
      return "Your password is wrong";
    case "403 Your email already exists":
      return "the email already exists";
    case "404 user not found":
      return "Your account does not exist";
    case "500 error while searching for your account in the database":
      return "Error with de database";
    case "500 error while generating the salt":
      return "error while encrypting your password";
    case "500 an error was detected when adding the user to the database":
      return "Error while adding your account to the database";
    case "Password need to be 6 length":
      return "Your password is too short";
    case "Email is wrongly formatted":
      return "Your email is wrongly formatted";
    default:
      return "";
  }
}
