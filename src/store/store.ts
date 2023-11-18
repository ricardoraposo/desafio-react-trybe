import { create } from 'zustand';
import { Type } from '../types';

type Filter = Type | 'recent' | 'favorites';

type Store = {
  filter: Filter;
  setFilter: (value: Filter) => void;
};

export const useNewsStore = create<Store>((set) => ({
  filter: 'recent',
  setFilter: (value: Filter) => set(() => ({ filter: value })),
}));
