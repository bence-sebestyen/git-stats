import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string | number;
  Icon: LucideIcon;
}

function StatCard({ title, value, Icon }: Props) {
  return (
    <div className="infocard">
      <span className="text-xs uppercase mb-2 font-bold">{title}</span>
      <div className="p-2.5 bg-purple-500/10 rounded-xl text-purple-400 mb-3">
        <Icon size={22} strokeWidth={2.5} />
      </div>
      <span className="text-2xl mt-3">{value}</span>
    </div>
  );
}

export default StatCard;
