import type { IUser } from "../types";

interface Props {
  profileInfo: IUser;
}

function UserDetails({ profileInfo }: Props) {
  return (
    <div>
      <div>
        <img src={profileInfo.avatar_url} />
        <h1>{profileInfo.name}</h1>
        <h2>@{profileInfo.login}</h2>
        <p>{profileInfo.bio}</p>
        <p>{profileInfo.location}</p>
      </div>
      <div>
        <div>
          <span>Repositories</span>
          <span>{profileInfo.public_repos}</span>
        </div>
        <div>
          <span>Followers</span>
          <span>{profileInfo.followers}</span>
        </div>
        <div>
          <span>Following</span>
          <span>{profileInfo.following}</span>
        </div>
        <div>
          <span>Created</span>
          <span>{profileInfo.created_at}</span>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
