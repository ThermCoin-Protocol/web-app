import { Category } from "@/typings";

interface CategorySelectProps {
  categories: Category[]
  handleCategoryChange: (category: string) => void
}

export default function CategorySelect({ categories, handleCategoryChange }: CategorySelectProps) {
  return (
    <div className="flex flex-col text-gray-800 mt-4">
      {categories.map((category, index) => (
        <div key={index} className="flex items-center mb-4">
          <input id="default-checkbox" type="checkbox" value={category.title} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-0" onClick={() => handleCategoryChange(category.title)} />
          <label className="ml-2 text-sm font-medium">{category.title}</label>
        </div>
      ))}
    </div>
  );
}

