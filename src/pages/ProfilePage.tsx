import { useState, useEffect, useEffectEvent } from "react";
import { githubService } from "../services/githubService";
import { useParams } from "react-router-dom";
import type { IUser } from "../types";

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

  return (
    <div>
      <p>Statistics for {username}</p>
    </div>
  );
}

export default ProfilePage;
