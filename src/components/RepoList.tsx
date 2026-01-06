import { useState } from "react";
import type { IRepository } from "../types";
import RepoCard from "./RepoCard";

interface Props {
  repos: IRepository[];
}

function RepoList({ repos }: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col">
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a repo..."
        className="input p-3 max-w-1/4 ms-auto mr-10 mt-5"
      ></input>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-10">
        {filteredRepos.map((repo) => (
          <RepoCard
            key={repo.id}
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
