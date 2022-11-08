import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Button, IconButton } from "../../components/buttons/buttons";
import { signInAPI } from "../api/auth/sign";
import { useRouter } from "next/router";
import { errorVoidInput } from "../../components/error/sign/signError";
import { SignVisuel } from "../../components/sign/signVisuel";

export default function Login() {
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
            <p className="title">Welcome back</p>
            <p className="description">
              Welcome back! Please enter your details
            </p>
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
          {/* <p className="text-sm text-gray-500 text-left pb-8">
              <a className="text-[#4535B3] cursor-pointer">Forgot password</a>
            </p> */}

          <p className="errorMessage">{Error}</p>
          {Loading === false ? (
            <Button
              text="Sign in"
              cssDiv="buttonDiv"
              cssText="buttonText"
              ClickFonction={async () => {
                if (Email != "" && Password != "") {
                  setLoading(true);
                  setError("");
                  setError(await signInAPI(Email, Password));
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
            Don&#39;t have an account?{" "}
            <Link href="/signup">
              <span className="link">Sign up</span>
            </Link>
          </p>
        </div>
      </div>
      <SignVisuel src={"/image.png"} alt={"Picture of the author"} />
    </div>
  );
}
