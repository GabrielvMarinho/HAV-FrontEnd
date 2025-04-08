"use client";
import './css/style.css';
import { useRouter } from "next/navigation";

interface ButtonComparisonProps {
    point: string; // ex: "/comparacao-de-imoveis"
    size: string;
    text: string;
    hover: string;
    color: string;
    background: string;
}

export default function ButtonComparison({
    point,
    size,
    text,
    hover,
    color,
    background
}: ButtonComparisonProps) {
    const router = useRouter();

    const navigate = () => {
        if (point) {
            router.push(point); // redireciona para a página especificada
        }
    };

    return (
        <button
            type="button"
            onClick={navigate}
            className={`${size}Button button ${hover}`}
            style={{ color: color, backgroundColor: background }}
        >
            {text.toUpperCase()}
        </button>
    );
}
