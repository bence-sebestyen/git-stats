import { useState } from "react";

type SearchFormProps = {
  onSearch: (username: string) => void;
};

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [formInput, setForminput] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setForminput(event.target.value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    onSearch(formInput);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your username..."
        value={formInput}
        onChange={handleChange}
        className="w-1/3 min-w-50 rounded-3xl border border-purple-500/50 bg-slate-900 px-3 py-2.5 text-center text-sm shadow-2xl shadow-purple-500/50 focus:border-purple-500"
      />
    </form>
  );
};

export default SearchForm;
