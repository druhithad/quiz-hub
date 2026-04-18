const logo = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" width="50" />
      <h2>QuizHub</h2>
    </nav>
  );
}

export default Navbar;