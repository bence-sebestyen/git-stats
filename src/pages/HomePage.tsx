import { useState } from "react";
import SearchForm from "../components/SearchForm";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function onSearch(formInput: string) {
    setUsername(formInput);
    navigate("/user/" + formInput);
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
