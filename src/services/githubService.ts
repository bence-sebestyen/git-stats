import type { IRepository, IUser } from "../types";
const BASE_URL = "https://api.github.com";

export const githubService = {
  getUser: async (username: string): Promise<IUser> => {
    const response = await fetch(`${BASE_URL}/users/${username}`);
    if (!response.ok) {
      throw new Error("User not found");
    }
    return await response.json();
  },

  getRepos: async (username: string): Promise<IRepository[]> => {
    const response = await fetch(
      `${BASE_URL}/users/${username}/repos?sort=updated`
    );
    if (!response.ok) {
      throw new Error("Repos not found");
    }
    return await response.json();
  },
};
