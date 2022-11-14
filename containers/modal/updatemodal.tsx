import React, { useEffect, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { Button } from "../../components/buttons/buttons";
import { createArticle, updateArticle } from "../../pages/api/articles/post";

interface Props {
  status: boolean;
  setStatus: any;
  setLoading: any;
  title: string;
  content: string;
  id: string;
  setUpdateTitle: any;
  setUpdateContent: any;
}

export function UpdateModal({
  status,
  setStatus,
  setLoading,
  title,
  content,
  id,
  setUpdateTitle,
  setUpdateContent,
}: Props) {
  if (status) {
    return (
      <div className="modal">
        <div className="container">
          <div className="topBar">
            <h1>Modifer un Article</h1>
            <button>
              <AiOutlineClose size={20} onClick={() => setStatus(false)} />
            </button>
          </div>

          <div className="content">
            <div className="input">
              <label>Titre</label>
              <input
                className="searchInput"
                type="text"
                id="last"
                name="last"
                onChange={(e) => setUpdateTitle(e.target.value)}
                value={title}
              />
            </div>

            <div className="input">
              <label>Contenu</label>
              <textarea
                rows={4}
                cols={50}
                onChange={(e) => setUpdateContent(e.target.value)}
                value={content}
              />
            </div>
            <div className="buttonContainer">
              <Button
                text="Annuler"
                cssDiv="buttonDiv"
                cssText="buttonText"
                ClickFonction={async () => setStatus(false)}
                icon={undefined}
              />

              <Button
                text="Créer"
                cssDiv="buttonDiv"
                cssText="buttonText"
                ClickFonction={async () => {
                  if (title != "" && content != "") {
                    var result = await updateArticle(id, title, content);
                    if (!result.error) {
                      setStatus(false);
                      setLoading(true);
                    }
                  }
                }}
                icon={undefined}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
