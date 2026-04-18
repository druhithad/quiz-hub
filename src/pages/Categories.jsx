import CategoryCard from "../components/CategoryCard";

function Categories() {
  const categories = [
    {
      name: "Tech",
      icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
    },
    {
      name: "GK",
      icon: "https://cdn-icons-png.flaticon.com/512/197/197374.png"
    },
    {
      name: "Movies",
      icon: "https://cdn-icons-png.flaticon.com/512/833/833281.png"
    }
  ];

  return (
    <div>
      <h2>Select Category</h2>
      {categories.map((cat, i) => (
        <CategoryCard
          key={i}
          name={cat.name}
          icon={cat.icon}
        />
      ))}
    </div>
  );
}

export default Categories;