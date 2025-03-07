"use client"
import './css/style.css';
import MoreSignal from '../IconsTSX/MoreSignal';
import Pencil from '../IconsTSX/Pencil';
import Trashcan from '../IconsTSX/Trashcan';
import Folder from '../IconsTSX/Folder';
import Graphic from '../IconsTSX/Graphic';
import { useRouter } from "next/navigation";
import { color } from 'chart.js/helpers';

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

