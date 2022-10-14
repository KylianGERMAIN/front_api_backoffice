/* eslint-disable react/no-unescaped-entities */

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getArticle } from "../api/articles/get";

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    var promiseB = getArticle().then(function (result) {
      console.log(result);
    });
  }, []);

  return <div className="w-screen h-screen flex">home</div>;
}
