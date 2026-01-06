export interface IUser {
  login: string;
  avatar_url: string;
  name: string | null;
  bio: string | null;
  location: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface IRepository {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
}
