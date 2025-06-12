import { create } from "zustand";

interface WishlistState {
  items: string[];
  add: (id: string) => void;
  remove: (id: string) => void;
  toggle: (id: string) => void;
  isInWishlist: (id: string) => boolean;
}

export const useWishlistStore = create<WishlistState>((set, get) => ({
  items: [],
  add: (id) =>
    set((state) => ({
      items: state.items.includes(id) ? state.items : [...state.items, id],
    })),
  remove: (id) =>
    set((state) => ({ items: state.items.filter((item) => item !== id) })),
  toggle: (id) => (get().items.includes(id) ? get().remove(id) : get().add(id)),
  isInWishlist: (id) => get().items.includes(id),
}));
