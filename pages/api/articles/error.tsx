export function errorListArticle(error: String) {
  switch (error) {
    case "401 jwt expired":
      return "Your Json Web Token has expired";
    case "401 jwt invalid":
      return "Your Json Web Token is invalid";
    case "403 pagination is not a number or is inferior at 1":
      return "The pagination is not a number or is inferior at 1";
    case "404 user not found":
      return "Your account does not exist";
    case "500 error when calculating the number of articles":
      return "Error when calculating the number of articles";
    default:
      return "500 Other";
  }
}
