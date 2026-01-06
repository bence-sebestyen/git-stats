import { Star } from "lucide-react";
import { getLanguageColor } from "../utils/languageColors";

interface Props {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
}

function RepoCard({ name, description, language, stars }: Props) {
  return (
    <div className="flex group w-full flex-col items-center justify-center rounded-2xl border border-purple-500/30 bg-slate-900/40 px-5 pt-6 pb-5 shadow-lg shadow-purple-500/20 transition-all hover:scale-105 hover:border-purple-500/60">
      <h1 className="mb-10 text-2xl group-hover:text-purple-400 group-hover:font-bold transition-all duration-100 text-center">
        {name}
      </h1>
      <p className="mb-10 text-center ">
        {description || "No description included."}
      </p>
      <div className="flex mt-auto w-full justify-between">
        <div className="flex items-center gap-2">
          <div
            className={`h-3 w-3 rounded-xl ${getLanguageColor(language)}`}
          ></div>
          <span>{language}</span>
        </div>
        <span className="flex items-center gap-2">
          {" "}
          <Star size={18} /> {stars}
        </span>
      </div>
    </div>
  );
}

export default RepoCard;
