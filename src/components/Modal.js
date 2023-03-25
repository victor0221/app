import React, { useState } from "react";
import "./Styles/StyleModal.css";

export default function Modal({children, closeBtn, openBtn, emptyMsg}) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    if (modal) {
      document.body.style.overflow = 'auto'; // re-enable main page scrollbar
    } else {
      document.body.style.overflow = 'hidden'; // disable main page scrollbar
    }
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  
  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        {openBtn}
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            {children}
            <button onClick={toggleModal}>
              {closeBtn}
            </button>
          </div>
        </div>
      )}
    </>
  );
}