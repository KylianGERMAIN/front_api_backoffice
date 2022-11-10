import React, { useEffect, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { Button } from "../../components/buttons/buttons";

interface Props {
  status: boolean;
  setStatus: any;
}

export function Modal({ status, setStatus }: Props) {
  if (status) {
    return (
      <div className="modal">
        <div className="container">
          <div className="topBar">
            <h1>Ajouter un Article</h1>
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
                //   onChange={(e) => setSearch(e.target.value)}
                //   value={search}
              />
            </div>

            <div className="input">
              <label>Contenu</label>
              <textarea rows={4} cols={50} />
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
                ClickFonction={async () => {}}
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
