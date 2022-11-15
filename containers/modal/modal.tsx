import React, { useEffect, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { Button } from "../../components/buttons/buttons";
import { createArticle } from "../../pages/api/articles/post";

interface Props {
  status: boolean;
  setStatus: any;
  setLoading: any;
}

export function Modal({ status, setStatus, setLoading }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (status) {
    return (
      <div className="modal">
        <div className="container">
          <div className="topBar">
            <h1>Add an Article</h1>
            <button>
              <AiOutlineClose
                size={20}
                onClick={() => {
                  setStatus(false);
                  setTitle("");
                  setContent("");
                }}
              />
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
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>

            <div className="input">
              <label>Contenu</label>
              <textarea
                rows={4}
                cols={50}
                onChange={(e) => setContent(e.target.value)}
                value={content}
              />
            </div>
            <div className="buttonContainer">
              <Button
                text="Cancel"
                cssDiv="buttonDiv"
                cssText="buttonText"
                ClickFonction={async () => {
                  setStatus(false);
                  setTitle("");
                  setContent("");
                }}
                icon={undefined}
              />

              <Button
                text="Create"
                cssDiv="buttonDiv"
                cssText="buttonText"
                ClickFonction={async () => {
                  if (title != "" && content != "") {
                    var result = await createArticle(title, content);
                    if (!result.error) {
                      setStatus(false);
                      setLoading(true);
                      setTitle("");
                      setContent("");
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
