"use client";
import './css/style.css';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface InputDropdownProps<T = any> {
  defaultValue?: string | boolean; // Mantém compatibilidade com boolean (true -> "1", false -> "0")
  error?: FieldError;
  register?: UseFormRegister<T>;
  name: string;
  options: Array<[string, string]> | Array<[number, string]> | string[][]; // Aceita TODOS os formatos usados no seu código
  size: string;
  text: string;
  id: string;
  onChange?: (value: string) => void;
}

export default function InputDropdown<T>({
  defaultValue,
  error,
  register,
  name,
  options,
  size,
  text,
  id,
  onChange
}: InputDropdownProps<T>) {
  
  // Normaliza defaultValue (boolean -> string)
  const normalizedDefaultValue = typeof defaultValue === 'boolean' 
    ? defaultValue ? "1" : "0" 
    : defaultValue;

  // Normaliza options para [string, string][] (converte números para string)
  const normalizedOptions = options.map(option => {
    const [value, label] = option;
    return [String(value), String(label)] as [string, string];
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) onChange(e.target.value);
    if (register) {
      const { onChange: registerOnChange, onBlur } = register(name);
      registerOnChange(e);
      onBlur(e);
    }
  };

  return (
    <div style={{ width: "fit-content", display: "flex", flexDirection: "column", gap: "8px" }}>
      <label className="label" htmlFor={id}>{text}</label>
      <select 
        name={name}
        id={id}
        {...(register ? register(name) : {})}
        onChange={handleChange}
        className={`${size}InputDropdown inputDropdown labelDropdown ${error ? 'inputError' : ''}`}
        defaultValue={normalizedDefaultValue}
      >
        <option value="" disabled className='labelDropdown'>
          Selecione Algo
        </option>
        {normalizedOptions.map(([value, label]) => (
          <option 
            className="optionDropDown labelDropdown" 
            value={value} 
            key={value}
          >
            {label.toUpperCase()}
          </option>
        ))}
      </select>
      {error && <p className="errorText">{error.message}</p>}
    </div>
  );
}