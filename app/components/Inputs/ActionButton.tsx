import './css/style.css';
import MoreSignal from '../IconsTSX/MoreSignal';
import Pencil from '../IconsTSX/Pencil';
import Trashcan from '../IconsTSX/Trashcan';
import Folder from '../IconsTSX/Folder';
import Graphic from '../IconsTSX/Graphic';

// Componente ActionButton
export function ActionButton(props: { className: string; Icon: any; width: number; height: number; color: string }) {
    return (
        <div className={`ActionButton ${props.className}`}>
            <props.Icon
                width={props.width}
                height={props.height}
                color={props.color}
                style={{ width: props.width, height: props.height }}
            />
        </div>
    );
}

// Componente ActionButtons
export default function ActionButtons(props: { width: number; height: number; color: string; context: 'editor' | 'admin' }) {
    return (
        <div className="actionButtons">
            {/* Botão extra para Admin */}
            {/*<ActionButtons width={25} height={25} color="#000" isAdmin={true} /> */}
            {props.context === 'admin' && (
                <ActionButton className="graphicButton darkHover" Icon={Graphic} width={props.width} height={props.height} color={props.color} />
            )}
            {/* Botões para Editor e Admin */}
            <ActionButton className="addButton darkHover" Icon={MoreSignal} width={props.width} height={props.height} color={props.color} />
            <ActionButton className="editButton darkHover" Icon={Pencil} width={props.width} height={props.height} color={props.color} />
            <ActionButton className="deleteButton darkHover" Icon={Trashcan} width={props.width} height={props.height} color={props.color} />
            <ActionButton className="archiveButton darkHover" Icon={Folder} width={props.width} height={props.height} color={props.color} />
        </div>
    );
}
