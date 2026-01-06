import SearchForm from "../components/SearchForm";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function onSearch(formInput: string) {
    navigate("/user/" + formInput);
  }

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center">
      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="mb-16 text-5xl uppercase font-mono font-bold">
          visualize your impact
        </h1>
        <SearchForm onSearch={onSearch} />
      </div>
      <footer className="mt-auto py-10">
        <a
          className="flex gap-4 items-center"
          href="https://www.github.com/bence-sebestyen"
          target="_blank"
          rel="noopener norefferer"
        >
          <img src="/github-mark.png" className="w-8 h-8" />
          <p className="font-mono text-slate-700 hover:text-purple-900">
            bence-sebestyen
          </p>
        </a>
      </footer>
    </div>
  );
}

export default HomePage;
