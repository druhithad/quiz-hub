import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import QuizPage from "../pages/QuizPage";
import Result from "../pages/Result";
import Leaderboard from "../pages/Leaderboard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/result" element={<Result />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
  );
}

export default AppRoutes;