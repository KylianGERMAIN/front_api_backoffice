/* eslint-disable react/no-unescaped-entities */

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getArticle } from "../api/articles/get";
import { SideBar } from "../../containers/home/sidebar";
import Layout from "../../components/layout/layout";
import { MdArticle } from "react-icons/md";
import HeaderArticles from "../../components/header/headerArticle";
import { FaSearch } from "react-icons/fa";
import { IconButton } from "../../components/buttons/buttons";

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [totalArticle, setTotalArticle] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getArticle().then(function (result) {
      if (result.error == undefined) {
        setData(result.data.data);
        setTotalArticle(result.data.meta.pagination.total);
        setLoading(false);
      }
    });
  }, []);

  return (
    <Layout lang={undefined}>
      <div className="w-full h-screen flex bg-white">
        <div className="bg-white h-full w-full  pt-10 pr-10">
          {isLoading === false ? (
            <div className="bg-gray-100 w-full h-full rounded-lg">
              <div className="flex p-5 space-x-5">
                <HeaderArticles totalArticle={totalArticle} />
                <div className=" bg-white p-2 w-full rounded-lg flex flex-col justify-between">
                  <div className="flex space-x-2 items-center">
                    <p className=" text-left text-xs text-gray-600">
                      Recherche
                    </p>
                    <FaSearch size={13} color={"#4535B3"} />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <input
                      className="border-2 w-full border-[#4535B3] rounded-lg placeholder-gray-300 pl-[8px] text-sm p-1  focus:outline-0"
                      type="text"
                      id="last"
                      name="last"
                      placeholder="Votre recherche"
                    />
                    <IconButton
                      text=""
                      cssDiv="cursor-pointer flex items-center border-none hover:bg-[#7C54D5] bg-[#4535B3]  border-2 rounded-lg h-full p-2 justify-center w-[60px]"
                      cssText="text-white"
                      ClickFonction={async () => {}}
                      icon={<FaSearch size={13} color={"white"} />}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </Layout>
  );
}
