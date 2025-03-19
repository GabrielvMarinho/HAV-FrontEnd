import Verticaline from "./VerticalLine"

export default function HorizontalPropertySpecific(){
    return(
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "20px"}}>
            <p className="propertyPriceTitle">valor do imóvel</p>
            <div className="verticalStrongLine"></div>
        </div>
        
    );
}