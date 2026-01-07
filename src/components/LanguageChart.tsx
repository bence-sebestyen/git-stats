import { Pie, PieChart, Cell, Tooltip } from "recharts";
import type { IRepository } from "../types";
import { useMemo } from "react";
import { languageColors } from "../utils/languageColors";

interface Props {
  repos: IRepository[];
}

function LanguageChart({ repos }: Props) {
  const data = useMemo(() => {
    const counts = repos.reduce((acc: Record<string, number>, repo) => {
      if (repo.language) {
        acc[repo.language] = (acc[repo.language] || 0) + 1;
      }
      return acc;
    }, {});

    return Object.entries(counts).map(([name, value]) => ({
      name,
      value,
    }));
  }, [repos]);

  return (
    <div className="relative w-fit h-fit flex items-center justify-center">
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="block w-full text-center text-slate-500 uppercase text-[10px] tracking-widest font-bold">
          Top
        </span>
        <span className="block w-full text-center text-white text-md font-extrabold tracking-tighter uppercase leading-none">
          Languages
        </span>
      </div>

      <PieChart
        width={200}
        height={200}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius="80%"
          outerRadius="100%"
          cornerRadius={10}
          paddingAngle={5}
          stroke="none"
        >
          {data.map((entry) => {
            const twClass = languageColors[entry.name] || "bg-[#808080]";
            const hexColor = twClass.substring(4, twClass.length - 1);
            return <Cell key={entry.name} fill={hexColor} />;
          })}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: "#0f172a",
            borderRadius: "12px",
            border: "1px solid #1e293b",
          }}
          itemStyle={{ color: "#f8fafc" }}
        />
      </PieChart>
    </div>
  );
}

export default LanguageChart;
