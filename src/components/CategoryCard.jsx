function CategoryCard({ name, icon, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={icon} alt={name} width="50" />
      <h3>{name}</h3>
    </div>
  );
}

export default CategoryCard;