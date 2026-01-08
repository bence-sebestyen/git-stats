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
      className={`flex items-center justify-center transition-all duration-300 ${
        isCompact
          ? "p-2 sm:p-4 gap-2 sm:gap-3 flex-1 min-w-[100px]"
          : "gap-3 md:gap-6 w-full sm:w-fit p-3 sm:p-5 glass"
      }`}
    >
      <div className="flex-shrink-0 flex items-center justify-center p-1.5 md:p-2 bg-purple-500/10 rounded-lg text-purple-400 border border-purple-500/20">
        <Icon
          strokeWidth={2}
          className={
            isCompact ? "w-4 h-4 sm:w-5 sm:h-5" : "w-5 h-5 sm:w-7 sm:h-7"
          }
        />
      </div>

      <div className="flex flex-col min-w-[60px] sm:min-w-[72px]">
        <span
          className={`leading-none font-bold font-mono transition-all ${
            isCompact ? "text-sm sm:text-base" : "text-lg md:text-xl"
          }`}
        >
          {value}
        </span>
        <span className="text-[10px] md:text-xs uppercase tracking-wider font-bold mt-1 text-slate-500 truncate">
          {title}
        </span>
      </div>
    </div>
  );
}

export default StatCard;
