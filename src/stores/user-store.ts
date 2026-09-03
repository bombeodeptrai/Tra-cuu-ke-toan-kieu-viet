import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  username: string | null;
  login: (name: string) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      username: 'Nhân viên Kiểu Việt',
      login: (name: string) => set({ username: name.trim() }),
      logout: () => set({ username: 'Nhân viên Kiểu Việt' }),
    }),
    {
      name: 'kv-user-storage',
    }
  )
);
