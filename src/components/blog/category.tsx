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
    <div className="mt-4 flex flex-col text-primary">
      {categories.map((category, index) => (
        <div key={index} className="mb-4 flex items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            value={category.title}
            className="h-6 w-6 rounded border-primary bg-primary focus:ring-primary"
            onClick={() => handleCategoryChange(category.title)}
          />
          <label className="ml-2 text-lg">{category.title}</label>
        </div>
      ))}
    </div>
  );
}
