import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoMdArrowDropdown, IoMdSettings } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BiDuplicate } from "react-icons/bi";
import {
  Button,
  IconButton,
  IconTextButton,
} from "../../components/buttons/buttons";
import { MdCreate } from "react-icons/md";
import { useRouter } from "next/router";
import { deleteArticle } from "../../pages/api/articles/post";

interface Props {
  title: string;
  content: string;
  date: string;
  id: string;
  removeArticle: any;
  //   icon: any;
  //   cssDiv: string;
  //   cssText: string;
  //   ClickFonction: (text: string | JSX.Element) => void;
}

export function ArticleFrame({
  date,
  title,
  content,
  id,
  removeArticle,
}: Props) {
  return (
    <tr className="rowTable">
      <td className="tdElement">
        <input type="checkbox" id="scales" name="scales" />
      </td>
      <td className="tdElement">{new Date(parseInt(date)).toLocaleString()}</td>
      <td className="tdElement">{title}</td>
      <td className="tdElement">{content}</td>
      <td className="tdElement">
        <div className="containerAction">
          <IconButton
            text={""}
            icon={<BiDuplicate color={"#4535B3"} size={20} />}
            cssDiv={""}
            cssText={""}
            ClickFonction={() => console.log("delete")}
          />
          <IconButton
            text={""}
            icon={<RiDeleteBin5Fill color={"#4535B3"} size={20} />}
            cssDiv={"pr-4"}
            cssText={""}
            ClickFonction={() => {
              removeArticle(id);
              // deleteArticle(id);
            }}
          />
        </div>
      </td>
    </tr>
  );
}
