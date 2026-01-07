import { useState, useEffect } from "react";

type SearchFormProps = {
  onSearch: (username: string) => void;
};

const placeholders = [
  "Find a developer...",
  "Search for octocat...",
  "Try 'torvalds'...",
  "Explore the community...",
  "Analyze a profile...",
];

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [formInput, setForminput] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (formInput.trim()) onSearch(formInput);
  }

  return (
    <form onSubmit={handleSubmit} className="relative group w-full max-w-md">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-900 to-blue-900 rounded-full blur-lg opacity-25 group-focus-within:opacity-50 transition duration-700"></div>
      <input
        type="text"
        placeholder={placeholders[placeholderIndex]}
        value={formInput}
        onChange={(e) => setForminput(e.target.value)}
        className="relative w-full h-14 px-6 py-4 text-xl input"
      />
    </form>
  );
};

export default SearchForm;
