import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoMdArrowDropdown, IoMdSettings } from "react-icons/io";
import { AiFillDashboard } from "react-icons/ai";
import { ImPacman } from "react-icons/im";
import { Button, IconTextButton } from "../../components/buttons/buttons";
import { MdCreate } from "react-icons/md";
import { useRouter } from "next/router";

interface Props {
  //   text: string;
  //   icon: any;
  //   cssDiv: string;
  //   cssText: string;
  //   ClickFonction: (text: string | JSX.Element) => void;
}

export function SideBar() {
  const { asPath } = useRouter();
  const router = useRouter();

  return (
    <div className=" h-screen  min-w-[350px] flex flex-col justify-between">
      <div>
        <div className="flex h-24 items-center mt-10 pl-10 space-x-4">
          <Image
            src="/image.png"
            alt="Picture of the author"
            width={80}
            height={80}
            objectFit="contain"
            className="w-[80px]"
          />
          <div className="flex items-center">
            <p className="font-bold text-[#4535B3]">API BackOffice</p>
            <IoMdArrowDropdown color="#4535B3" />
          </div>
        </div>
        <div className="grid">
          <div className=" mt-10 space-y-5">
            {asPath.includes("home") ? (
              <div className="flex">
                <div className="bg-[#4535B3] block w-1 "></div>
                <IconTextButton
                  text={"Dashboard"}
                  icon={<AiFillDashboard size={20} color={"#4535B3"} />}
                  cssDiv={
                    "cursor-pointer  inline-flex items-center space-x-3 ml-11"
                  }
                  cssText={"text-[#4535B3] font-bold"}
                  ClickFonction={() => {}}
                />
              </div>
            ) : (
              <div className="flex">
                <div className="bg-white block w-1 "></div>
                <IconTextButton
                  text={"Dashboard"}
                  icon={<AiFillDashboard size={20} />}
                  cssDiv={
                    "cursor-pointer  inline-flex items-center space-x-3 ml-11"
                  }
                  cssText={"font-bold"}
                  ClickFonction={() => {
                    router.push("/home");
                  }}
                />
              </div>
            )}

            {asPath.includes("settings") ? (
              <div className="flex">
                <div className="bg-[#4535B3] block w-1 "></div>
                <IconTextButton
                  text={"Settings"}
                  icon={<IoMdSettings size={20} color={"#4535B3"} />}
                  cssDiv={
                    "cursor-pointer  inline-flex items-center space-x-3 ml-11"
                  }
                  cssText={"text-[#4535B3] font-bold"}
                  ClickFonction={() => {}}
                />
              </div>
            ) : (
              <div className="flex">
                <div className="bg-white block w-1 "></div>
                <IconTextButton
                  text={"Settings"}
                  icon={<IoMdSettings size={20} />}
                  cssDiv={
                    "cursor-pointer inline-flex items-center space-x-3 ml-11"
                  }
                  cssText={"font-bold"}
                  ClickFonction={() => {
                    router.push("/settings");
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-40  bg-[#fcfcfc] border-t">
        <div className="flex pl-10 items-center pt-5 space-x-4 pb-3">
          <ImPacman color="#4535B3" size={30} />
          <div className="">
            <p className="font-bold">Kylian Germain</p>
            <span className="text-gray-300">Admin</span>
          </div>
        </div>
        <div className="pl-10">
          <IconTextButton
            icon={
              <MdCreate
                style={{
                  color: "white",
                }}
              />
            }
            text="Edit Account"
            cssDiv="cursor-pointer text-sm flex space-x-2 items-center border-[#4535B3] hover:bg-[#4e3ec9] bg-[#4535B3]  border-2 rounded-lg px-2 justify-center mt-2 w-[150px]"
            cssText="text-white"
            ClickFonction={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
