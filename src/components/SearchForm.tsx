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
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
