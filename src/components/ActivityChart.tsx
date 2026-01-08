import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useMemo } from "react";
import type { IRepository } from "../types";

interface Props {
  repos: IRepository[];
}

function ActivityChart({ repos }: Props) {
  const data = useMemo(() => {
    const counts = repos.reduce((acc: Record<string, number>, repo) => {
      const year = new Date(repo.created_at).getFullYear();
      acc[year] = (acc[year] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(counts)
      .map(([year, count]) => ({
        name: year,
        count: count,
      }))
      .sort((a, b) => Number(a.name) - Number(b.name));
  }, [repos]);

  if (data.length === 0) return null;

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center gap-2 px-5">
        <div>
          <h2 className="text-xl font-bold text-white leading-none">
            Activity Over Time
          </h2>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Based on repository creation dates
          </p>
        </div>
      </div>

      <div className="w-full h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#1e293b"
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b", fontSize: 12 }}
              dy={10}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b", fontSize: 12 }}
              allowDecimals={false}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                borderRadius: "12px",
                border: "1px solid #334155",
                color: "#f8fafc",
              }}
              itemStyle={{ color: "#a855f7" }}
            />

            <Area
              type="monotone"
              dataKey="count"
              stroke="#a855f7"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorCount)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ActivityChart;
