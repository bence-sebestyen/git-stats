import SearchForm from "../components/SearchForm";
import { useNavigate } from "react-router-dom";
import { ChartNoAxesCombined } from "lucide-react";

function HomePage() {
  const navigate = useNavigate();

  function onSearch(formInput: string) {
    navigate("/user/" + formInput);
  }

  return (
    <div className="min-h-[calc(100dvh-64px)] flex flex-col">
      <div className="flex flex-1 items-center justify-center w-full p-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 max-w-6xl w-full group">
          <div className="relative flex items-center justify-center flex-shrink-0">
            <div className="absolute w-48 h-48 lg:w-64 lg:h-64 animate-pulse bg-purple-600/30 rounded-full blur-[40px] lg:blur-[100px] group-hover:bg-purple-500/50 transition-all duration-1000"></div>

            <div className="relative p-6 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[3rem] min-[400px]:rounded-[4rem] transition-all duration-500 group-hover:border-purple-500/40 bg-gradient-to-br from-white/5 to-transparent group-hover:scale-103">
              <ChartNoAxesCombined
                strokeWidth={1}
                className="text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.6)] w-24 h-24 min-[400px]:w-32 min-[400px]:h-32 lg:w-40 lg:h-40"
              />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto">
            <h1 className="mb-8 text-4xl min-[400px]:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
              visualize <br />
              <span className="text-purple-500 text-5xl min-[400px]:text-6xl lg:text-7xl">
                your impact
              </span>
            </h1>

            <div className="w-full max-w-xs min-[400px]:max-w-md">
              <SearchForm onSearch={onSearch} />
            </div>
          </div>
        </div>
      </div>

      <footer className="py-6 md:py-10 flex items-center justify-center w-full">
        <a
          className="flex gap-4 items-center group/link"
          href="https://www.github.com/bence-sebestyen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/github-mark.png"
            className="w-6 h-6 md:w-8 md:h-8 opacity-50 group-hover/link:opacity-100 transition-all duration-400"
            alt="GitHub"
          />

          <p className="font-mono text-sm md:text-base text-slate-700 group-hover/link:text-purple-500 transition-all duration-400">
            bence-sebestyen
          </p>
        </a>
      </footer>
    </div>
  );
}

export default HomePage;
