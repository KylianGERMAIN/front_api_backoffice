import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoMdArrowDropdown, IoMdSettings } from "react-icons/io";
import { AiFillDashboard } from "react-icons/ai";
import { Button, IconTextButton } from "../../components/buttons/buttons";
import { useRouter } from "next/router";

export function SideBar() {
  const { asPath } = useRouter();
  const router = useRouter();

  return (
    <div>
      <div className="sidebarContainer">
        <div>
          <a href="/home?pagination=1">
            <div className="logoContainer">
              <Image
                src="/image.png"
                alt="Picture of the author"
                width={80}
                height={80}
                objectFit="contain"
                className="img"
              />
              <div className="titleContainer">
                <p className="pTitle">API BackOffice</p>
                <IoMdArrowDropdown color="#4535B3" />
              </div>
            </div>
          </a>
          <div className="liContainer">
            {asPath.includes("home") ? (
              <div className="liElement">
                <div className="borderColor"></div>
                <IconTextButton
                  text={"Dashboard"}
                  icon={<AiFillDashboard size={20} color={"#4535B3"} />}
                  cssDiv={"buttonDiv"}
                  cssText={"buttonTextSelected"}
                  ClickFonction={() => {}}
                />
              </div>
            ) : (
              <div className="liElement">
                <div className="borderNoColor"></div>
                <IconTextButton
                  text={"Dashboard"}
                  icon={<AiFillDashboard size={20} />}
                  cssDiv={"buttonDiv"}
                  cssText={"buttonTextNotSelected"}
                  ClickFonction={() => {
                    router.push("/home?pagination=1");
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
