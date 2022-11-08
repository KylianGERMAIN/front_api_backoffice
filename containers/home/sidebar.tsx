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
    <div>
      <div className="sidebarContainer">
        <div>
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
                    router.push("/home");
                  }}
                />
              </div>
            )}

            {asPath.includes("settings") ? (
              <div className="liElement">
                <div className="borderColor"></div>
                <IconTextButton
                  text={"Settings"}
                  icon={<IoMdSettings size={20} color={"#4535B3"} />}
                  cssDiv={"buttonDiv"}
                  cssText={"buttonTextSelected"}
                  ClickFonction={() => {}}
                />
              </div>
            ) : (
              <div className="liElement">
                <div className="borderNoColor"></div>
                <IconTextButton
                  text={"Settings"}
                  icon={<IoMdSettings size={20} />}
                  cssDiv={"buttonDiv"}
                  cssText={"buttonTextNotSelected"}
                  ClickFonction={() => {
                    router.push("/settings");
                  }}
                />
              </div>
            )}
          </div>
        </div>
        <div className="userContainer">
          <div className="profilSection">
            <ImPacman color="#4535B3" size={30} />
            <div className="">
              <p className="name">Kylian Germain</p>
              <span className="role">Admin</span>
            </div>
          </div>
          <div className="editSection">
            <IconTextButton
              icon={
                <MdCreate
                  style={{
                    color: "white",
                  }}
                />
              }
              text="Edit Account"
              cssDiv="iconButtonDiv"
              cssText="textButton"
              ClickFonction={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
