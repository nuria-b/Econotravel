import {DropdownStyle} from './styles/Styles.jsx';

export default function Dropdown ({ label, options, onChange, onClick, style }) {
    return (
      <label>
        <span id={`span-${label}`} onClick={onClick} style={style}>{label}</span>
        <DropdownStyle onChange={onChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </DropdownStyle>
      </label>
    );
  };