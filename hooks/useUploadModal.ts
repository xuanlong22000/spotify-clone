import { create } from "zustand";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useUploadModal = create<Props>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useUploadModal;
