import { ReactNode } from "react";
import InputText from "./InputText"
import SearchIcon from "./IconsTSX/SearchIcon";
import "../variables.css"
import './components.css';

export default function Filter(props: {size :string, inputs :ReactNode[]}){
    return(
        <div className="filterSide">
            {props.inputs.map( input =>
            <>{input}</>
          )
            }
            <div className="buttonBuscaClaro">
                <SearchIcon height={35} width={35} color={"var(--box-red-pink)"}/>
            </div>
        </div>
    );
}