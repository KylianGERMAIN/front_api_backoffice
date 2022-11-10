/* eslint-disable react/no-unescaped-entities */

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getArticle } from "../api/articles/get";
import Layout from "../../components/layout/layout";
import HeaderArticles from "../../components/header/headerArticle";
import { FaSearch } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { IconButton } from "../../components/buttons/buttons";
import { ArticleFrame } from "../../containers/home/articleFrame";
import { Article } from "../../interface/article";
import { deleteArticle } from "../api/articles/post";
import { Modal } from "../../containers/modal/modal";

export default function Home() {
  const router = useRouter();
  const [totalArticle, setTotalArticle] = useState("");
  const [search, setSearch] = useState("");
  const [Articles, setArticles] = useState<Article[]>();
  const [isLoading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);

  if (isLoading === true) {
    var querySearch = "";
    if (router.query.search) {
      querySearch = router.query.search as string;
    }
    getArticle(querySearch).then(function (result) {
      if (result.error == undefined) {
        setTotalArticle(result.data.meta.pagination.total);
        var article: Article[] = [];
        for (var i = 0; i != result.data.data.length; i++) {
          article.push({
            key: result.data.data[i].date,
            title: result.data.data[i].title,
            content: result.data.data[i].content,
            date: result.data.data[i].date,
            id: result.data.data[i].id,
          });
        }
        setArticles(article);
        setLoading(false);
      }
    });
  }

  async function removeArticle(str: string) {
    console.log(str);
    var result = await deleteArticle(str);
    console.log(result);
    if (!result.error) {
      setArticles((current: any) => current.filter((i: any) => i.id !== str));
      setLoading(true);
    }
  }

  async function searchArticle() {
    router.query.search = search;
    router.push(router);
    setLoading(true);
  }

  return (
    <Layout lang={undefined}>
      <div className="mainHome">
        {isLoading === false ? (
          <>
            <div className="containerHome">
              <Modal status={modal} setStatus={setModal} />
              <div className="containerHeader">
                <HeaderArticles totalArticle={totalArticle} />
                <div className="searchContainer">
                  <div className="searchLabel">
                    <p className="pLabel">Recherche</p>
                    <FaSearch size={13} color={"#4535B3"} />
                  </div>

                  <div className="searchInputContainer">
                    <input
                      className="searchInput"
                      type="text"
                      id="last"
                      name="last"
                      onChange={(e) => setSearch(e.target.value)}
                      value={search}
                      placeholder="Votre recherche"
                    />
                    <IconButton
                      text=""
                      cssDiv="iconButtonDiv"
                      cssText="textButton"
                      ClickFonction={async () => {
                        searchArticle();
                      }}
                      icon={<FaSearch size={13} color={"white"} />}
                    />
                  </div>
                </div>
              </div>
              <div className="tableMain">
                <div className="tableContainer">
                  <div className="topTable">
                    <p>All Articles</p>
                    <button
                      onClick={() => {
                        setModal(true);
                      }}
                    >
                      <AiOutlinePlus size={13} color={"grey"} /> New article
                    </button>
                  </div>
                  <table className="table" width="325" cellSpacing="0">
                    <thead>
                      <tr>
                        <th className="columnHeader">
                          <input type="checkbox" id="scales" name="scales" />
                        </th>
                        <th className="columnHeader">Date</th>
                        <th className="columnHeader">Title</th>
                        <th className="columnHeader">Description</th>
                        <th className="columnHeader">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Articles != undefined
                        ? Articles.map((element: any, key: any) => (
                            <ArticleFrame
                              key={key}
                              title={element.title}
                              content={element.content}
                              date={element.date}
                              id={element.id}
                              removeArticle={removeArticle}
                            />
                          ))
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="loading">
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
