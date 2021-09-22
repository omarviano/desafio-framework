import React from 'react';
import ReactModal from 'react-modal';

import { ModalTitle, CloseModalButton } from './styles';
import { ModalProps } from './props';

ReactModal.setAppElement('#root');

const Modal: React.FC<ModalProps> = ({
  title,
  open,
  toggle,
  size = 'md',
  children,
}) => {
  return (
    <ReactModal
      closeTimeoutMS={300}
      isOpen={open}
      onRequestClose={toggle}
      overlayClassName="modal-overlay"
      className={`modal-content ${size}`}
    >
      <CloseModalButton onClick={toggle}>Fechar modal</CloseModalButton>
      {title && <ModalTitle>{title}</ModalTitle>}

      {children}
    </ReactModal>
  );
};

export default Modal;
