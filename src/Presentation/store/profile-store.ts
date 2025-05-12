import { create } from "zustand/react";

export interface ProfileState {
  name: string;
  email: string;
}

export const useProfileStore = create<ProfileState>()((set, get) => ({
  name: "John Doe",
  email: "john@doe.com",
}));
