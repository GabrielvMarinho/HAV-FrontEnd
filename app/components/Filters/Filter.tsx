import { ReactNode } from "react";
import SearchIcon from "../IconsTSX/SearchIcon";
import "../../variables.css"
import './css/style.css';
import ButtonComprarAlugar from "../Inputs/ButtonComprarAlugar";

export default function Filter(props: {size :string, inputs :ReactNode[]}){
    return(
        <div className="filterSide">
            <p style={{fontSize: "var(--text-s)", color: "var(--text-white)", opacity: "0.6"}}>Finalidade</p>
            <ButtonComprarAlugar/>
            {props.inputs.map( input =>
            <>{input}</>
          )
            }
            <div className="buttonBuscaClaro lightHover">
                <SearchIcon height={35} width={35} color={"var(--box-red-pink)"}/>
            </div>
        </div>
    );
}