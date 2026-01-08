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
    <div className="grid grid-cols-1 md:grid-cols-12 max-w-7xl mx-auto p-4 md:px-6 gap-6 my-8">
      <div className="md:col-span-12 lg:col-span-6 xl:col-span-5 flex flex-col sm:flex-row items-center justify-around gap-6 glass p-6 overflow-hidden">
        <div className="w-full flex justify-center">
          <LanguageChart repos={repos} />
        </div>
        <div className="w-full flex flex-row sm:flex-col md:flex-row lg:flex-col min-[850px]:gap-12 min-[900px]:gap-24 lg:gap-4 justify-center gap-4 p-2">
          <StatCard title="Stars" value={totalStars.stars} Icon={Star} />
          <StatCard title="Forks" value={totalStars.forks} Icon={GitFork} />
        </div>
      </div>
      <div className="md:col-span-12 lg:col-span-6 xl:col-span-7 p-6 flex items-center justify-center glass overflow-hidden min-h-[300px] md:min-h-0">
        <ActivityChart repos={repos} />
      </div>
    </div>
  );
}

export default Dashboard;
