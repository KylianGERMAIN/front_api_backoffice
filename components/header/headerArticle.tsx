/* eslint-disable react/no-unescaped-entities */

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MdArticle } from "react-icons/md";

interface Props {
  totalArticle: string;
}

export default function HeaderArticles({ totalArticle }: Props) {
  const router = useRouter();

  return (
    <div className=" headerTotal">
      <p className="pLabel">Total Articles</p>
      <div className="totalAndIcon">
        <p className="pNumber">{totalArticle}</p>
        <MdArticle size={20} color={"#4535B3"} />
      </div>
    </div>
  );
}
