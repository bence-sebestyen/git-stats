import type { IUser } from "../types";
const BASE_URL = "https://api.github.com";

export const githubService = {
  getUser: async (username: string): Promise<IUser> => {
    const response = await fetch(`${BASE_URL}/users/${username}`);
    if (!response.ok) {
      throw new Error("User not found");
    }
    return await response.json();
  },
};
