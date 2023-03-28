export const errorVoidInput = (
    Email: string,
    Password: string,
    setError: any
) => {
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
