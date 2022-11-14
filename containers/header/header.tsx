import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdArrowDropdown, IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Button, IconTextButton } from "../../components/buttons/buttons";

import Image from "next/image";
import { AiFillDashboard } from "react-icons/ai";
import { Fragment } from "react";
import { useRouter } from "next/router";

interface Props {}

const Header = ({}: Props) => {
  const { asPath } = useRouter();
  const router = useRouter();

  return (
    <Popover className={"burgerMenu"}>
      <div className="headerspace">
        <a href="/home?pagination=1">
          <div className="logoContainer">
            <Image
              src="/image.png"
              alt="Picture of the author"
              width={40}
              height={40}
              objectFit="contain"
              className="img"
            />
            <p className="pTitle">API BackOffice</p>
          </div>{" "}
        </a>
        <Popover.Button className="openButton">
          <GiHamburgerMenu size={30} color={"#4535B3"} />
        </Popover.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transform transition ease-in-out duration-500 sm:duration-700'"
        enterFrom="translate-y-full"
        enterTo="translate-y-0"
        leave="transform transition ease-in-out duration-500 sm:duration-700"
        leaveFrom="translate-y-0"
        leaveTo="translate-y-full"
      >
        <Popover.Panel className="panel" focus>
          <Popover.Button className="closeButton bg-white rounded-md p-2 inline-flex text-gray-400 hover:bg-gray-100">
            <AiOutlineClose className="" size={20} />
          </Popover.Button>
          <div className="ulElement">
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
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
