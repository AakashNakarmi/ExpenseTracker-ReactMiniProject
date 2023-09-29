import categories from "./categories";

interface Props {
  onChange: (category: string) => void;
}

const ExpenseFilter = ({ onChange }: Props) => {
  return (
    <div>
      <div className="mb-3">
        <select
          onChange={(event) => onChange(event.target.value)}
          className="form-select"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
