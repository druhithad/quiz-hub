import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <h1>Welcome to QuizHub 🚀</h1>
      <Link to="/categories">Start Quiz</Link>
    </>
  );
}

export default Home;