/* eslint-disable react/no-unescaped-entities */

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MdArticle } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

interface Props {
  totalArticle: string;
}

export default function HeaderArticles({ totalArticle }: Props) {
  const router = useRouter();

  return (
    <div className=" bg-white p-2 w-[200px] rounded-lg ">
      <p className=" text-left text-xs text-gray-600">Total Articles</p>
      <div className="flex justify-between items-center pt-2">
        <p className="text-xl font-bold">{totalArticle}</p>
        <MdArticle size={20} color={"#4535B3"} />
      </div>
    </div>
  );
}
