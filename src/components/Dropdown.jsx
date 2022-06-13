
export default function Dropdown ({ label, options, onChange }) {
    return (
      <label>
        {label}
        <select onChange={onChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    );
  };