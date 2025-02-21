import "./components.css"
import "../variables.css"
import SearchIcon from "./IconsTSX/SearchIcon";

export default function SearchBarMobile() {
    return (
        <div style={{ display: "flex", flexDirection: "row", gap: 30, alignItems: "center" }}>
            <input style={{ color: "var(--text-white)" }} className="searchInputMobile" type="text" placeholder="Busca:" />
            <button className="buttonBuscaEscuroMobile  ">
                <SearchIcon height={35} width={35} color={"var(--box-white)"} />
            </button>
        </div>
    );
}