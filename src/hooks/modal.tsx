import { useState } from 'react';

interface Modal {
  open: boolean;
  toggle(): void;
}

const useModal = (): Modal => {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(state => !state);
  }

  return {
    open,
    toggle,
  };
};

export default useModal;
