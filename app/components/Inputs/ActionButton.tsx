import { useState } from 'react';
import './css/style.css';
import MoreSignal from '../IconsTSX/MoreSignal';
import Pencil from '../IconsTSX/Pencil';
import Trashcan from '../IconsTSX/Trashcan';
import Folder from '../IconsTSX/Folder';
import Graphic from '../IconsTSX/Graphic';
import ArrowBack from '../IconsTSX/ArrowBack'; // Importando o novo ícone

export function ActionButton(props: { className: string; Icon: any; width: number; height: number; color: string; onClick?: () => void }) {
    return (
        <div className={`ActionButton ${props.className}`} onClick={props.onClick}>
            <props.Icon
                width={props.width}
                height={props.height}
                color={props.color} // Passando a cor diretamente para o ícone
                style={{ width: props.width, height: props.height }}
            />
        </div>
    );
}

export default function ActionButtons(props: { width: number; height: number; color: string; context: 'editor' | 'admin' }) {
    const [isArchiving, setIsArchiving] = useState(false); // Apenas alternando entre os ícones

    const toggleArchive = () => {
        setIsArchiving(prevState => !prevState); // Alterna entre verdadeiro e falso
    };

    return (
        <div className="actionButtons">
            {props.context === 'admin' && (
                <ActionButton className="graphicButton darkHover" Icon={Graphic} width={props.width} height={props.height} color={props.color} />
            )}
            <ActionButton className="addButton darkHover" Icon={MoreSignal} width={props.width} height={props.height} color={props.color} />
            <ActionButton className="editButton darkHover" Icon={Pencil} width={props.width} height={props.height} color={props.color} />
            <ActionButton className="deleteButton darkHover" Icon={Trashcan} width={props.width} height={props.height} color={props.color} />

            <ActionButton className="archiveButton darkHover" Icon={isArchiving ? ArrowBack : Folder} width={props.width} height={props.height} color={props.color} onClick={toggleArchive}/>
        </div>
    );
}
