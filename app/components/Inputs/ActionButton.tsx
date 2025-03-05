"use client"
import './css/style.css';
// Componente ActionButton
export default function ActionButton(props: {  className: string; Icon: any; onClick: any}) {
    return (
        <div onClick={props.onClick} className={`ActionButton ${props.className}`}>
            <props.Icon
                width={45}
                height={45}
            />
        </div>
    );
}

