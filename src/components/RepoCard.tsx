import { Star } from "lucide-react";
import { getLanguageColor } from "../utils/languageColors";

interface Props {
  owner?: string;
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
}

function RepoCard({ owner, name, description, language, stars }: Props) {
  return (
    <a
      href={`https://www.github.com/${owner}/${name}`}
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className="glass flex w-full flex-col p-6 h-full transition-transform hover:-translate-y-3">
        <h3
          className="mb-2 text-xl font-bold tracking-tight truncate w-full"
          title={name}
        >
          {name}
        </h3>

        <p className="mb-6 text-sm text-slate-400 line-clamp-2 leading-relaxed flex-grow font-mono">
          {description || "No description included."}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex items-center gap-2">
            {language && (
              <div
                className={`h-2 w-2 rounded-full shadow-[0_0_5px] ${getLanguageColor(
                  language
                )}`}
              ></div>
            )}

            <span className="text-xs font-medium text-slate-300 font-mono tracking-tight">
              {language}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-yellow-500/80">
            <Star size={16} fill="currentColor" className="opacity-80" />
            <span className="text-sm font-mono tracking-tighter">
              {stars.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default RepoCard;
