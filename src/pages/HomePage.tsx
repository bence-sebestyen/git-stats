import SearchForm from "../components/SearchForm";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function onSearch(formInput: string) {
    navigate("/user/" + formInput);
  }

  return (
    <div className="flex h-lvh flex-col items-center justify-center">
      <h1 className="mb-20 text-5xl">visualize your impact</h1>
      <SearchForm onSearch={onSearch} />
    </div>
  );
}

export default HomePage;
