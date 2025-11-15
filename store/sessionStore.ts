import { create } from 'zustand';
import { UserInterface } from '../interfaces';

type SessionState = {
  isLoggedIn: boolean;
  sessionLoading: boolean;
  currentUser: null | UserInterface;
};

type SessionAction = {
  isLogged: (loggedIn: boolean) => void;
  setSessionLoading: (loading: boolean) => void;
  setUser: (user: UserInterface) => void;
};

export const useSessionStore = create<SessionState & SessionAction>(
  (set) => ({
    isLoggedIn: false,
    sessionLoading: false,
    currentUser: null,
    isLogged: (loggedIn) => set(() => ({ isLoggedIn: loggedIn })),
    setSessionLoading: (loading) =>
      set(() => ({ sessionLoading: loading })),
    setUser: (user) => set(() => ({ currentUser: user })),
  })
);
