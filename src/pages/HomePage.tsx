import { useState } from "react";
import SearchForm from "../components/SearchForm";

function HomePage() {
  const [username, setUsername] = useState("");

  function onSearch(formInput: string) {
    setUsername(formInput);
  }

  return (
    <div>
      <h1>Analyze your GitHub stats</h1>
      <SearchForm onSearch={onSearch} />
      <h2>{username}</h2>
    </div>
  );
}

export default HomePage;
