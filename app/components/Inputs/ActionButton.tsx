"use client"
import './css/style.css';
import MoreSignal from '../IconsTSX/MoreSignal';
import Pencil from '../IconsTSX/Pencil';
import Trashcan from '../IconsTSX/Trashcan';
import Folder from '../IconsTSX/Folder';
import Graphic from '../IconsTSX/Graphic';
import { useRouter } from "next/navigation";

// Componente ActionButton
export function ActionButton(props: { className: string; Icon: any; onClick: any}) {
    return (
        <div onClick={props.onClick} className={`ActionButton ${props.className}`}>
            <props.Icon
                width={45}
                height={45}
            />
        </div>
    );
}

// Componente ActionButtons
export default function ActionButtons(props: { selected: number; context: 'editor' | 'admin' }) {
    const router = useRouter();

    const editFunction = function(){
        router.push(`${window.location.pathname}/edit`);
    }
    const addFunction = function(){
        router.push(`${window.location.pathname}/add`);
    }
    const deleteFunction = function(){
        router.push(`${window.location.pathname}/delete`);
    }
    const archiveFunction = function(){
        router.push(`${window.location.pathname}/archive`);
    }
    const graphFunction = function(){
        router.push(`${window.location.pathname}/graphs`);
    }
    return (
        <div className="actionButtons">
            {props.context === 'admin' && (
                <ActionButton onClick={graphFunction} className="graphicButton darkHover" Icon={Graphic}  />
            )}
            {/* Botões para Editor e Admin */}
            <ActionButton onClick={addFunction} className="addButton darkHover" Icon={MoreSignal} />
            <ActionButton onClick={props.selected==1?editFunction:""} className={`${props.selected==1?"darkHover":"nonClickableButton"} editButton `} Icon={Pencil}  />
            <ActionButton onClick={props.selected>0?deleteFunction:""} className={`${props.selected>0?"darkHover":"nonClickableButton"} deleteButton `} Icon={Trashcan} />
            <ActionButton onClick={props.selected>0?archiveFunction:""} className={`${props.selected>0?"darkHover":"nonClickableButton"} archiveButton `} Icon={Folder}  />
        </div>
    );
}
