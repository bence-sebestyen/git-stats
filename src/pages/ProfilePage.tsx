import { useState, useEffect } from "react";
import { githubService } from "../services/githubService";
import { useParams } from "react-router-dom";
import type { IUser } from "../types";
import UserDetails from "../components/UserDetails";

function ProfilePage() {
  const { username } = useParams<{ username: string }>();
  const [profileInfo, setProfileInfo] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (username) {
      async function fetchData() {
        try {
          setLoading(true);
          const res = await githubService.getUser(username!);
          setProfileInfo(res);
        } catch (error) {
          console.error("Error: ", error);
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    }
  }, [username]);

  if (loading) return <h1>Loading data...</h1>;
  if (!profileInfo) return <h1>User not found or an error occured.</h1>;

  return (
    <div>
      <UserDetails profileInfo={profileInfo} />
    </div>
  );
}

export default ProfilePage;
