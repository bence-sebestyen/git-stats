import { useState } from "react";
import type { IRepository } from "../types";
import RepoCard from "./RepoCard";

interface Props {
  owner?: string;
  repos: IRepository[];
}

function RepoList({ owner, repos }: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="flex justify-end mt-5">
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a repo..."
          className="input p-3 w-1/2 sm:w-64 md:w-80 lg:w-96 glass focus:border-purple-500/50 outline-none transition-all"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 my-10">
        {filteredRepos.map((repo) => (
          <RepoCard
            key={repo.id}
            owner={owner}
            name={repo.name}
            description={repo.description}
            language={repo.language}
            stars={repo.stargazers_count}
          />
        ))}
      </div>
    </div>
  );
}

export default RepoList;
