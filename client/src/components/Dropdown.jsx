

export default function Dropdown ({ label, options, onChange, onClick, style, selectStyle }) {
    return (
      <label style={{display:'inline-block'}}>
        <span id={`span-${label}`} onClick={onClick} style={style}>{label}</span>
        <select id={`select-${label}`} onChange={onChange} style={selectStyle} defaultValue=''>
          <option value='' disabled={true}>Elige una opción</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    );
  };