import { create } from "zustand";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useAuthModal = create<Props>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAuthModal;
