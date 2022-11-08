/* eslint-disable react/no-unescaped-entities */

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getArticle } from "../api/articles/get";
import Layout from "../../components/layout/layout";
import HeaderArticles from "../../components/header/headerArticle";
import { FaSearch } from "react-icons/fa";
import { IconButton } from "../../components/buttons/buttons";
import { ArticleFrame } from "../../containers/home/articleFrame";

export default function Home() {
  const router = useRouter();
  const [totalArticle, setTotalArticle] = useState(null);
  const [Articles, setArticles] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getArticle().then(function (result) {
      if (result.error == undefined) {
        setTotalArticle(result.data.meta.pagination.total);
        setLoading(false);

        var article = [];
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
      }
    });
  }, []);

  function removeArticle(str: String) {
    console.log(Articles);
    // setArticles((current) => {
    //   current.filter((Article) => {
    //     console.log(Article);
    //     // Article.id !== str;
    //   });
    // });
  }

  return (
    <Layout lang={undefined}>
      <div className="mainHome">
        {isLoading === false ? (
          <>
            <div className="containerHome">
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
                      placeholder="Votre recherche"
                    />
                    <IconButton
                      text=""
                      cssDiv="iconButtonDiv"
                      cssText="textButton"
                      ClickFonction={async () => {}}
                      icon={<FaSearch size={13} color={"white"} />}
                    />
                  </div>
                </div>
              </div>
              <div className="tableMain">
                <div className="tableContainer">
                  <p>All Articles</p>
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
                      {Articles.map((element: any, key: any) => (
                        <ArticleFrame
                          key={element.date}
                          title={element.title}
                          content={element.content}
                          date={element.date}
                          id={element.id}
                          removeArticle={removeArticle}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </Layout>
  );
}
