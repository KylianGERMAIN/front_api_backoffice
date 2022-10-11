/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { MdCreate } from "react-icons/md";
import Link from "next/link";
import { Button, IconButton } from "../../components/buttons/buttons";
import { signIn } from "../api/sign";

export default function Login() {
  var date = new Date().toLocaleDateString("fr-FR");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState("");

  return (
    <div className="w-screen h-screen flex">
      <div className="w-full md:w-1/2 grid ">
        <div className="grid content-center justify-center">
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
              className="border-gray-200 rounded h-[40px] border-2 placeholder:text-sm p-2"
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
              className="border-gray-200 rounded h-[40px] border-2 placeholder:text-sm p-2"
              type="password"
              id="first"
              name="first"
              placeholder="•••••••"
            />
          </div>
          <p className="text-sm text-gray-500 text-left pb-8">
            <a className="text-[#4535B3] cursor-pointer">Forgot password</a>
          </p>

          <p className="text-sm text-red-600 font-bold">{Error}</p>
          <Button
            text="Sign in"
            cssDiv="cursor-pointer flex space-x-2 items-center border-none hover:bg-[#7C54D5] bg-[#4535B3]  border-2 rounded-lg p-2 justify-center mt-2"
            cssText="text-white"
            ClickFonction={async () => {
              setError(await signIn(Email, Password));
            }}
            icon={undefined}
          />
          <p className="text-sm text-gray-500 text-center pt-4">
            Don't have an account?{" "}
            <Link href="/signup">
              <a className="text-[#4535B3] cursor-pointer">Sign up</a>
            </Link>
          </p>
        </div>{" "}
      </div>
      <div className="hidden w-1/2 bg-gray-200 md:grid content-center justify-center">
        <div className="relative w-full max-w-lg">
          <Image
            src="/image.png"
            alt="Picture of the author"
            width={150}
            height={150}
            className=""
          />
        </div>
      </div>
    </div>
  );
}
