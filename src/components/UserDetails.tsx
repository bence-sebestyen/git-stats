import type { IUser } from "../types";
import { MapPin, FolderGit2, User, UserPlus, CalendarPlus } from "lucide-react";
import StatCard from "./StatCard";

interface Props {
  profileInfo: IUser;
}

function UserDetails({ profileInfo }: Props) {
  return (
    <div className="mx-auto p-8 shadow-2xl">
      <div className="flex flex-col items-center gap-x-20 mb-10 justify-center">
        <img
          src={profileInfo.avatar_url}
          className="w-32 h-32 rounded-full object-cover shadow-lg shadow-purple-500/20"
          alt="Profile"
        />
        <div className="text-center">
          <h1 className="text-3xl font-bold">{profileInfo.name}</h1>
          <h2 className="text-purple-400 font-mono text-lg">
            @{profileInfo.login}
          </h2>
          <p className="mt-2 font-medium">{profileInfo.bio}</p>
          <p className="text-sm flex items-center justify-center gap-1 mt-1">
            {profileInfo.location && (
              <>
                <MapPin size={16} />
                {profileInfo.location}
              </>
            )}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          title="Repositories"
          value={profileInfo.public_repos}
          Icon={FolderGit2}
        />
        <StatCard title="Followers" value={profileInfo.followers} Icon={User} />
        <StatCard
          title="Following"
          value={profileInfo.following}
          Icon={UserPlus}
        />
        <StatCard
          title="Created"
          value={profileInfo.created_at.substring(0, 10)}
          Icon={CalendarPlus}
        />
      </div>
    </div>
  );
}

export default UserDetails;
