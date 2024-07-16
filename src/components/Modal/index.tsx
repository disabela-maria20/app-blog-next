import React from 'react';

interface IModalProps {
  nameModal: String
  children: React.ReactNode
}

const Modal: React.FC<IModalProps> = ({ nameModal, children }) => {
  return (
    <>
      <article>
        <input className="modal-state" id={`${nameModal}`} type="checkbox" />
        <div className="modal w-screen">
          <label className="modal-overlay" htmlFor={`${nameModal}`}></label>
          <div className="modal-content flex w-full flex-col gap-5 p-7">
            <label htmlFor={`${nameModal}`} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
            {children}
          </div>
        </div>
      </article>
    </> 
  );
};

export default Modal;
