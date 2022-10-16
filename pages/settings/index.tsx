/* eslint-disable react/no-unescaped-entities */

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getArticle } from "../api/articles/get";
import Layout from "../../components/layout/layout";

export default function Settings() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // getArticle().then(function (result) {
    //   if (result.error == undefined) {
    //     setData(result.data.data);
    //     setLoading(false);
    //   }
    // });
  }, []);

  return (
    <Layout lang={undefined}>
      <div className="w-full h-full flex">
        {/* {isLoading === false ? (
          <div className="bg-gray-100 h-screen">{data[1].id}</div>
        ) : (
          ""
        )} */}
      </div>
    </Layout>
  );
}
