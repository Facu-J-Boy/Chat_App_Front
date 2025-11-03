import { create } from 'zustand';

type CurrentUser = {
  id: number;
  name: String;
  userName: String;
  email: String;
  password: String;
  profile_image: null | String;
};

type SessionState = {
  isLoggedIn: boolean;
  sessionLoading: boolean;
  currentUser: null | CurrentUser;
};

type SessionAction = {
  isLogged: (loggedIn: boolean) => void;
  setSessionLoading: (loading: boolean) => void;
  setUser: (user: CurrentUser) => void;
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
