import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string | number;
  Icon: LucideIcon;
  variant?: "full" | "compact";
}

function StatCard({ title, value, Icon, variant }: Props) {
  const isCompact = variant === "compact";

  return (
    <div
      className={`flex items-center justify-center ${
        isCompact ? "p-4 gap-3 flex-1" : "gap-6 w-fit p-5 glass"
      }`}
    >
      <div className="flex items-center justify-center p-2 bg-purple-500/10 rounded-lg text-purple-400 border border-purple-500/20">
        <Icon size={isCompact ? 20 : 28} strokeWidth={2} />
      </div>
      <div className="flex flex-col w-18">
        <span
          className={`leading-none font-bold font-mono ${
            isCompact ? "text-md" : "text-xl"
          }`}
        >
          {value}
        </span>
        <span className="text-xs uppercase tracking-wider font-bold mt-1 text-slate-500">
          {title}
        </span>
      </div>
    </div>
  );
}

export default StatCard;
