
import './css/style.css';
import MoreSignal from '../IconsTSX/MoreSignal';
import Pencil from '../IconsTSX/Pencil';
import Trashcan from '../IconsTSX/Trashcan';
import Folder from '../IconsTSX/Folder';
import Graphic from '../IconsTSX/Graphic';
import { useRouter } from "next/navigation";
import "../../variables.css"

// Componente ActionButton
export default function ActionButton(props: {  className: string; Icon: any; onClick: any}) {
    return (
        <div onClick={props.onClick} className={`actionButton ${props.className}`}>
            <props.Icon
                width={25}
                height={25}
                color={"var(--box-white)"}
            />
        </div>
    );
}

