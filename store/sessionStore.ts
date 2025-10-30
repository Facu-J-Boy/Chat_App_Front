import { create } from 'zustand';

type SessionState = {
  isLoggedIn: boolean;
};

type SessionAction = {
  isLogged: () => void;
};

export const useSessionStore = create<SessionState & SessionAction>(
  (set) => ({
    isLoggedIn: false,
    isLogged: () => set((state) => ({ isLoggedIn: true })),
  })
);
