import { UseFormRegister } from "react-hook-form";

export default function InputText({
    name,
    size,
    text,
    placeholder,
    id,
    register
}: {
    name: string;
    size: string;
    text: string;
    placeholder: string;
    id: string;
    register?: UseFormRegister<any>; // Define corretamente register como função
}) {
    return (
        <div style={{ width: "fit-content", display: "flex", flexDirection: "column", gap: "8px" }}>
            <label className="label" htmlFor={id}>{text}</label>
            <input
                id={id}
                type="text"
                className={`${size}Input input`}
                placeholder={placeholder}
                {...(register ? register(name): {})} // Garante que register seja uma função válida
            />
        </div>
    );
}
