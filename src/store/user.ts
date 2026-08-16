import { create } from "zustand";

type User = {
  status?: string;
  [key: string]: unknown;
};

type UserStore = {
  user: User;
  removeUser: () => void;
  updateUser: (userInfo: User) => void;
};

const useUser = create<UserStore>((set) => ({
  user: {},
  removeUser: () => set({ user: {} }),
  updateUser: (userInfo) => {
    console.log("store:", userInfo);
    return set({ user: userInfo });
  },
}));

export default useUser;
