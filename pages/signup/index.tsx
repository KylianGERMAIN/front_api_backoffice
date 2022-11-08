import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Button, IconButton } from "../../components/buttons/buttons";
import { signUpAPI } from "../api/auth/sign";
import { useRouter } from "next/router";
import { errorVoidInput } from "../../components/error/sign/signError";
import { SignVisuel } from "../../components/sign/signVisuel";

export default function Register() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const [Loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <div className="mainSignin">
      <div className="partSign">
        <div className="containerSign">
          <div className="containerTitle">
            <p className="title">Welcome</p>
            <p className="description">Welcome! Please enter your details</p>
          </div>
          <div className="inputContainer">
            <label className="label" htmlFor="first">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={Email}
              className="input"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="inputContainer">
            <label className="label" htmlFor="last">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={Password}
              className="input"
              type="password"
              id="first"
              name="first"
              placeholder="•••••••"
            />
          </div>
          <p className="errorMessage">{Error}</p>
          {Loading === false ? (
            <Button
              text="Sign up"
              cssDiv="buttonDiv"
              cssText="buttonText"
              ClickFonction={async () => {
                if (Email != "" && Password != "") {
                  setLoading(true);
                  setError("");
                  setError(await signUpAPI(Email, Password));
                  setLoading(false);
                  if (Error === "") {
                    router.push("/home");
                  }
                } else {
                  errorVoidInput(Email, Password, setError);
                }
              }}
              icon={undefined}
            />
          ) : (
            <IconButton
              text=""
              cssDiv="buttonDiv"
              cssText="buttonText"
              ClickFonction={async () => {}}
              icon={
                <Image src="/loading.svg" alt="next" width={25} height={25} />
              }
            />
          )}
          <p className="noAccount">
            Already have an account?{" "}
            <Link href="/signin">
              <a className="link">Sign in</a>
            </Link>
          </p>
        </div>
      </div>
      <SignVisuel src={"/image.png"} alt={"Picture of the author"} />
    </div>
  );
}
