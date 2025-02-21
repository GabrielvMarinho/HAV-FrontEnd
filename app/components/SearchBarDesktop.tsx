import "./components.css"
import "../variables.css"
import SearchIcon from "./IconsTSX/SearchIcon";

export default function SearchBarDesktop(props: {placeholder :string}) {
    return (
        <div style={{ display: "flex", flexDirection: "row", gap: 30, alignItems: "center" }}>
            <input style={{ color: "var(--text-white)" }} className="searchInput" type="text" placeholder={props.placeholder} />
            <button className="buttonBuscaEscuro">
                <SearchIcon height={44} width={44} color={"var(--box-white)"} />
            </button>
        </div>
    );
}   