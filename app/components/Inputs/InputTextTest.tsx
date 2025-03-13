import './css/style.css';

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
    register: (name: string) => any; // Definindo corretamente o tipo da função
}) {
    return (
        <div style={{ width: "fit-content", display: "flex", flexDirection: "column", gap: "8px" }}>
            <label className="label" htmlFor={id}>{text}</label>
            <input
                id={id}
                type="text"
                className={`${size}Input input`}
                placeholder={placeholder}
                {...register(name)} // Chamando corretamente a função register
            />
        </div>
    );
}
