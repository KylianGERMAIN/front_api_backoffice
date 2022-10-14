import Head from "next/head";
import Image from "next/image";
import React from "react";
import { IconTextButton } from "../components/buttons/buttons";
import { FiLogIn } from "react-icons/fi";
import { MdCreate } from "react-icons/md";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-200 w-screen h-screen grid content-center justify-center">
      <div className="flex items-center content-center justify-center w-screen pb-5">
        <Image
          src="/image.png"
          alt="Picture of the author"
          width={70}
          height={70}
          className=""
        />
        <h1 className="text-center mt-2 font-bold text-xl">API BackOffice</h1>
      </div>
      <div className="flex justify-center">
        <div className="bg-white md:w-[600px] border-[#4535B3] border-t-4">
          <div className="items-center justify-between p-4 md:p-4">
            <p className="text-center font-bold py-4 md:pt-4 pb-10">
              The server is running successfully
            </p>
            <Link href="/signin">
              <a>
                <IconTextButton
                  icon={
                    <MdCreate
                      style={{
                        color: "white",
                      }}
                    />
                  }
                  text="Open the administration"
                  cssDiv="cursor-pointer flex space-x-2 items-center border-[#4535B3] hover:bg-[#4e3ec9] bg-[#4535B3]  border-2 rounded-lg px-2 justify-center mt-2"
                  cssText="text-white"
                  ClickFonction={() => {}}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
