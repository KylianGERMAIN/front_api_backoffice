export const errorVoidInput = (Email, Password, setError) => {
  if (Email == "" && Password == "") {
    setError("Please do not leave the email and password fields empty");
    return;
  }
  if (Email == "") {
    setError("Please do not leave the email field empty");
  }
  if (Password == "") {
    {
      setError("Please do not leave the password field empty");
    }
  }
};
