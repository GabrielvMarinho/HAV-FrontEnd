import { ReactNode } from "react";
import SearchIcon from "../IconsTSX/SearchIcon";
import "../../variables.css"
import './css/style.css';


export default function Filter(props: {size :string, inputs :ReactNode[], search :ReactNode}){
    return(
        <div className="filterSide">
            {props.inputs.map( input =>
            <>{input}</>
          )
            }
            <div className="buttonBuscaClaro lightHover">
                <div></div>
                {props.search}
            </div>
        </div>
    );
}