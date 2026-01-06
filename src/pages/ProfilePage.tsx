import { useState, useEffect } from "react";
import { githubService } from "../services/githubService";
import { useParams } from "react-router-dom";
import type { IRepository, IUser } from "../types";
import UserDetails from "../components/UserDetails";
import RepoList from "../components/RepoList";

function ProfilePage() {
  const { username } = useParams<{ username: string }>();
  const [profileInfo, setProfileInfo] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState<IRepository[]>([]);

  useEffect(() => {
    if (username) {
      async function fetchData() {
        try {
          setLoading(true);
          const [userData, reposData] = await Promise.all([
            githubService.getUser(username!),
            githubService.getRepos(username!),
          ]);
          setProfileInfo(userData);
          setRepos(reposData);
        } catch (error) {
          console.error("Error: ", error);
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    }
  }, [username]);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] gap-6">
        <div className="border-4 border-purple-500/20 border-t-purple-500 w-16 h-16 rounded-full animate-spin"></div>
        <h1 className="animate-pulse text-2xl">Scanning git history...</h1>
      </div>
    );
  if (!profileInfo) return <h1>User not found or an error occured.</h1>;

  return (
    <div>
      <UserDetails profileInfo={profileInfo} />
      <RepoList repos={repos} />
    </div>
  );
}

export default ProfilePage;
