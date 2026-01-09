import { Analytics } from "@vercel/analytics/next";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/user/:username" element={<ProfilePage />}></Route>
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
