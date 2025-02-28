import "../../variables.css"
import SearchIcon from "../IconsTSX/SearchIcon";
import './css/style.css';

export default async function SearchBarDesktop(props: {placeholder :string}) {

    const url = "http://localhost:9090/property";
    const response = await fetch(url);
    const data = await response.json();
    var properties: string[][] = [];
    data.content.map((property: any) => {
        properties.push([
            property.id.toString(), 
            property.title, 
            property.price.toString(), 
            property.purpose, 
            property.propertyCategory
        ]);
        
        console.log(properties)
    });


    return (
        <div className="searchBar" style={{ display: "flex", flexDirection: "row", gap: 30, alignItems: "center" }}>
            <input style={{ color: "var(--text-white)" }} className="searchInput" type="text" placeholder={props.placeholder} />
            <button className="buttonBuscaEscuro darkHover">
                <SearchIcon height={44} width={44} color={"var(--box-white)"} />
            </button>
        </div>
    );
}   