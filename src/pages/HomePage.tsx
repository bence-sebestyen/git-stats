import SearchForm from "../components/SearchForm";
import { useNavigate } from "react-router-dom";
import { ChartNoAxesCombined } from "lucide-react";

function HomePage() {
  const navigate = useNavigate();

  function onSearch(formInput: string) {
    navigate("/user/" + formInput);
  }

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-6xl w-fit group mt-30">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-64 h-64 animate-pulse bg-purple-600/30 rounded-full blur-[100px] group-hover:bg-purple-500/50 transition-all duration-1000"></div>

          <div
            className="relative p-8 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[4rem] shadow-2xl transition-all duration-500 
                group-hover:border-purple-500/40 bg-gradient-to-br from-white/5 to-transparent group-hover:scale-105
                "
          >
            <ChartNoAxesCombined
              size={160}
              strokeWidth={1}
              className="text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]"
            />
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="mb-10 text-6xl  font-bold tracking-tighter leading-tight max-w-md">
            visualize <br />
            <span className="text-purple-500 text-7xl">your impact</span>
          </h1>
          <div className="w-full max-w-md">
            <SearchForm onSearch={onSearch} />
          </div>
        </div>
      </div>

      <footer className="mt-auto py-10">
        <a
          className="flex gap-4 items-center group/link"
          href="https://www.github.com/bence-sebestyen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/github-mark.png"
            className="w-8 h-8 opacity-50 group-hover/link:opacity-100 transition-all duration-400"
            alt="GitHub"
          />
          <p className="font-mono text-slate-700 group-hover/link:text-purple-500 transition-all duration-400">
            bence-sebestyen
          </p>
        </a>
      </footer>
    </div>
  );
}

export default HomePage;
