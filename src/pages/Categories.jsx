import { useNavigate } from "react-router-dom";

function CategoryCard({ name, icon }) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate("/quiz")}>
      <img src={icon} alt={name} width="50" />
      <h3>{name}</h3>
    </div>
  );
}

export default CategoryCard;