import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string | number;
  Icon: LucideIcon;
}

function StatCard({ title, value, Icon }: Props) {
  return (
    <div className="flex items-center p-2 justify-center gap-3 w-full">
      <div className="flex items-center justify-center p-2 bg-purple-500/10 rounded-lg text-purple-400 border border-purple-500/20">
        <Icon size={20} strokeWidth={2} />
      </div>
      <div className="flex flex-col w-25">
        <span className="text-md leading-none font-bold">{value}</span>
        <span className="text-xs uppercase tracking-wider font-bold mt-1 text-slate-500">
          {title}
        </span>
      </div>
    </div>
  );
}

export default StatCard;
