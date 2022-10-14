/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { MdCreate } from "react-icons/md";
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
    <div className="w-screen h-screen flex">
      <div className="w-full md:w-1/2 grid ">
        <div className="grid content-center justify-center ">
          <div className="px-10 sm:w-[400px]">
            <div className="pb-10">
              <p className="text-3xl font-bold pb-8">Welcome back</p>
              <p className="text-sm text-gray-500">
                Welcome back! Please enter your details
              </p>
            </div>
            <div className="pb-5 grid">
              <label className="text-sm text-gray-500" htmlFor="first">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
                className="border-gray-200 w-full rounded h-[40px] border-2 placeholder:text-sm p-2"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="pb-5 grid">
              <label className="text-sm text-gray-500" htmlFor="last">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={Password}
                className="border-gray-200 w-full rounded h-[40px] border-2 placeholder:text-sm p-2"
                type="password"
                id="first"
                name="first"
                placeholder="•••••••"
              />
            </div>
            {/* <p className="text-sm text-gray-500 text-left pb-8">
              <a className="text-[#4535B3] cursor-pointer">Forgot password</a>
            </p> */}

            <p className="w-full text-sm text-red-600 font-bold">{Error}</p>
            {Loading === false ? (
              <Button
                text="Sign in"
                cssDiv="cursor-pointer flex space-x-2 items-center border-none hover:bg-[#7C54D5] bg-[#4535B3]  border-2 rounded-lg p-2 justify-center mt-2"
                cssText="text-white"
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
                cssDiv="cursor-pointer flex space-x-2 items-center border-none hover:bg-[#7C54D5] bg-[#4535B3]  border-2 rounded-lg p-2 justify-center mt-2"
                cssText="text-white"
                ClickFonction={async () => {}}
                icon={
                  <Image src="/loading.svg" alt="next" width={25} height={25} />
                }
              />
            )}
            <p className="text-sm text-gray-500 text-center pt-4">
              Don't have an account?{" "}
              <Link href="/signup">
                <a className="text-[#4535B3] cursor-pointer">Sign up</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <SignVisuel src={"/image.png"} alt={"Picture of the author"} />
    </div>
  );
}
