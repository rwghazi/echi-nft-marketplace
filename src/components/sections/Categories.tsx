import CategoryCard from "../cards/CategoryCard";
import categories from "../../data/categories";

export default function Categories() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-white">Browse Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {categories.map((category) => (
          <CategoryCard key={category.name} {...category} />
        ))}
      </div>
    </div>
  );
}