import React from 'react';

interface IModalProps {
  onClose: () => void;
  children: React.ReactNode;
  isOpen: boolean
}

const Modal: React.FC<IModalProps> = ({ children, onClose, isOpen }) => {
  const isOpenModal = isOpen && 'opacity-100 visible'
  return (
    <div className={`modal ${isOpenModal}`}>
      <label className="modal-overlay" onClick={onClose}></label>
      <div className="modal-content flex flex-col gap-5">
        <label onClick={onClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
        {children}
      </div>
    </div>
  );
};

export default Modal;
