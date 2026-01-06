import type { IUser } from "../types";
import { MapPin, FolderGit2, User, UserPlus, CalendarPlus } from "lucide-react";
import StatCard from "./StatCard";

interface Props {
  profileInfo: IUser;
}

function UserDetails({ profileInfo }: Props) {
  return (
    <div className="mx-auto p-6 max-w-5xl flex items-center justify-center">
      <div className="flex infocard flex-col lg:flex-row items-center justify-between gap-10 justify-center pb-5 border-purple-500/50">
        <div className="flex flex-col md:flex-row items-center gap-6 flex-1 p-3">
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
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          <StatCard
            title="Followers"
            value={profileInfo.followers}
            Icon={User}
          />
          <StatCard
            title="Following"
            value={profileInfo.following}
            Icon={UserPlus}
          />
          <StatCard
            title="Repositories"
            value={profileInfo.public_repos}
            Icon={FolderGit2}
          />
          <StatCard
            title="Created"
            value={profileInfo.created_at.substring(0, 4)}
            Icon={CalendarPlus}
          />
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
