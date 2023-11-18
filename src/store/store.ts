import { create } from 'zustand';

type Store = {
  filter: string;
  setFilter: (value: string) => void;
};

export const useNewsStore = create<Store>((set) => ({
  filter: 'recent',
  setFilter: (value: string) => set(() => ({ filter: value })),
}));
