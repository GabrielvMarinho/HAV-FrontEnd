import './css/style.css';
import { FieldError, UseFormRegister } from "react-hook-form";

export default function InputTextLogin<T>({
    name,
    size,
    text,
    placeholder,
    defaultValue,
    id,
    register,
    error,
    icon,  // Prop para passar o ícone
}: {
    name: keyof T;
    size: string;
    text: string;
    placeholder: string;
    id: string;
    defaultValue?: any;
    register?: UseFormRegister<T>;
    error?: FieldError;
    icon?: React.ReactNode;  // Definindo o tipo para ícone
}) {
    return (
        <div className="inputContainer">
            <label className="label" htmlFor={id}>{text}</label>
            <div className="inputWrapper">
                <input 
                    id={id}
                    type="text"
                    name={name}
                    {...(register ? register(name) : {})} 
                    className={`${size}Input input`}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                />
                {icon && <span className="inputIcon">{icon}</span>} {/* Ícone dentro do input */}
            </div>
            {error && <p className="errorText">{error.message}</p>}
        </div>
    );
}