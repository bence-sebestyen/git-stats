import LanguageChart from "./LanguageChart";
import type { IRepository } from "../types";
import ActivityChart from "./ActivityChart";
import StatCard from "./StatCard";
import { Star, GitFork } from "lucide-react";
import { useMemo } from "react";

interface Props {
  repos: IRepository[];
}

function Dashboard({ repos }: Props) {
  const totalStars = useMemo(() => {
    return {
      stars: repos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0),
      forks: repos.reduce((acc, repo) => acc + (repo.forks_count || 0), 0),
    };
  }, [repos]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 mx-15 p-5 my-10">
      <div className="md:col-span-5 flex items-center justify-center gap-5 mx-auto glass p-6">
        <LanguageChart repos={repos} />
        <div className="h-full  flex flex-col justify-around items-center p-4">
          <StatCard title="Stars" value={totalStars.stars} Icon={Star} />
          <StatCard title="Forks" value={totalStars.forks} Icon={GitFork} />
        </div>
      </div>
      <div className="md:col-span-7 p-6 flex items-center justify-center glass">
        <ActivityChart repos={repos} />
      </div>
    </div>
  );
}

export default Dashboard;
