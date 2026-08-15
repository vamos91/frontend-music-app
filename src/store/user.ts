import { create } from "zustand";

const useUser = create((set) => ({
  user: {},
  counter: 0,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  removeUser: () => set({ user: {} }),
  updateUser: (userInfo) => {
    console.log("store:", userInfo);
    return set({ bears: userInfo });
  },
}));

export default useUser;
