import Head from "next/head";
import Image from "next/image";
import React from "react";
import { IconTextButton } from "../components/buttons/buttons";
import { FiLogIn } from "react-icons/fi";
import { MdCreate } from "react-icons/md";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mainIndex">
      <div className="imageWText">
        <Image
          src="/image.png"
          alt="Picture of the author"
          width={70}
          height={70}
          className=""
        />
        <h1 className="h1Index">API BackOffice</h1>
      </div>
      <div className="frame">
        <div className="frameBlock">
          <p className="message">The server is running successfully</p>
          <Link href="/signin">
            <IconTextButton
              icon={
                <MdCreate
                  style={{
                    color: "white",
                  }}
                />
              }
              text="Open the administration"
              cssDiv="iconButtonDiv"
              cssText="textButton"
              ClickFonction={() => {}}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
