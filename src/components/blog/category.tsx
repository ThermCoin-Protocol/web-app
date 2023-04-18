import { Category } from '@/typings';

interface CategorySelectProps {
  categories: Category[];
  handleCategoryChange: (category: string) => void;
}

export default function CategorySelect({
  categories,
  handleCategoryChange,
}: CategorySelectProps) {
  return (
    <div className="mt-4 flex flex-col text-gray-800">
      {categories.map((category, index) => (
        <div key={index} className="mb-4 flex items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            value={category.title}
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-0"
            onClick={() => handleCategoryChange(category.title)}
          />
          <label className="ml-2 text-sm font-medium">{category.title}</label>
        </div>
      ))}
    </div>
  );
}
