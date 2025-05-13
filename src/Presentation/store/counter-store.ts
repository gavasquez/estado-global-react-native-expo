import { create } from 'zustand';

interface CounterState {
  count: number;
  increment: (value: number) => void;
}

export const useCounterStore = create<CounterState>()((set, get) => ({
  count: 0,
  increment: (value: number) => {
    set({ count: get().count + value });
  },
}));
