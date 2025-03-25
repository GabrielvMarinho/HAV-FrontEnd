import HorizontalLine from "../NonInteractable/HorizontalLine";
import "./css/style.css"
import CategoryCardImovel from "./CategoryCardImovel";
import StarFavorite from "../Inputs/StarFavorite";
import ShareProperty from "../IconsTSX/ShareProperty";
import VerticalLine from "../NonInteractable/VerticalLine";
import Bed from "../IconsTSX/Bed";
import Shower from "../IconsTSX/Shower";
import Garage from "../IconsTSX/Garage";
import Sofa from "../IconsTSX/Sofa";
import Rule from "../IconsTSX/Rule";

export default function PropertyPageDatasAdm(props: {
    obj: Omit<PropertySpecific, "isFurnished" | "additional" | "propertyDescription" |
        "promotionalPrice" | "actualPrice" | "taxes" | "purpose" | "price" | "realtors" | "id">
}) {

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "left", gap: "10px" }}>
            <p className="idProperty">cód: {props.obj.propertyCode}</p>
            <p className="addressProperty">
                {props.obj.address?.neighborhood} - {props.obj.address?.city} - {props.obj.address?.state}</p>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "15px" }}>
                <p style={{
                    fontSize: "var(--text-xl)",
                    fontWeight: "700",
                    color: "var(--text-dark-red)",
                    textTransform: "uppercase"
                }}>{props.obj.propertyType}</p>
                <HorizontalLine size={259} />
                <CategoryCardImovel text="venda" />
                <StarFavorite selected={false} width={30} height={30} color="var(--box-dark-red)" />
                <ShareProperty width={30} height={30} />
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "16px" }}>
                <VerticalLine height={41} />
                <div className="divCountItems">
                    <Bed width={25} height={25} color="var(--box-mid-dark-red)" />
                    <p className="countItemNumber">{props.obj.propertyFeature?.bedRoom}</p>
                </div>
                <VerticalLine height={41} />
                <div className="divCountItems">
                    <Shower width={25} height={25} color="var(--box-mid-dark-red)" />
                    <p className="countItemNumber">{props.obj.propertyFeature?.bathRoom}</p>
                </div>
                <VerticalLine height={41} />
                <div className="divCountItems">
                    <Garage width={25} height={25} color="var(--box-mid-dark-red)" />
                    <p className="countItemNumber">{props.obj.propertyFeature?.garageSpace}</p>
                </div>
                <VerticalLine height={41} />
                <div className="divCountItems">
                    <Sofa width={25} height={25} color="var(--box-mid-dark-red)" />
                    <p className="countItemNumber">{props.obj.propertyFeature?.livingRoom}</p>
                </div>
                <VerticalLine height={41} />
                <div className="divCountItems">
                    <Rule width={25} height={25} color="var(--box-mid-dark-red)" />
                    <p className="countItemNumber">{props.obj.propertyFeature?.areaProperty}m²</p>
                </div>
                <VerticalLine height={41} />
            </div>
        </div>
    );
}