import "./css/style.css"
import Image from "next/image";
import ImageCasa from "@/public/Image/ImagemCasa.png"
import Bed from "../IconsTSX/Bed";
import Sofa from "../IconsTSX/Sofa";
import Shower from "../IconsTSX/Shower";
import Button from "../Inputs/Button";
import StarFavorite from "../Inputs/StarFavorite";
import MarcadorDeMapa from "../IconsTSX/MarcadorDeMapa";
import TapeCardImovel from "../Information/TapeCardImovel";
import CategoryCardImovel from "../Information/CategoryCardImovel";

export default function CardImovel(props: {
    bairro: string, cidade: string, valor: string,
    sell: boolean, quantQuartos: number, quantSala: number, quantBanheiros: number, informationStatus: string,
    category: string
}) {
    return (
        <div style={{ width: "269px", display: "flex", flexDirection: "column" }}>
            <div style={{ width: "269px", display: "flex", flexDirection: "column" }}>
                <section style={{ position: "relative", display: "inline-block" }}>
                    <div style={{
                        position: "absolute",
                        top: "5px",
                        left: "-16px",
                        display: "flex",
                        alignItems: "center",
                    }}>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "22px" }}>
                            <div>
                                <TapeCardImovel text={props.informationStatus} />
                            </div>
                            <div style={{ marginTop: "17px"}}>
                                <CategoryCardImovel text={props.category} />
                            </div>
                        </div>
                    </div>

                    <Image src={ImageCasa} alt="imagem da casa" style={{ display: "block", width: "100%", height: "auto" }} />
                </section>
            </div>

            <section className={"cardImovelSection"}style={{ backgroundColor: "var(--button-color)", color: "var(--text-white)", height: "fit-content", borderRadius: "0 0 10px 10px" }}>
                <div style={{ display: "flex", textAlign: "left", flexDirection: "column"}}>
                    <p className="bairro">{props.bairro}</p>
                    <p className="cidade">{props.cidade}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        {props.sell?
                            <p className="valorImovel">R${props.valor}</p>
                            :
                            <p className="valorImovel">R${props.valor}<span className="rentingText">/mês</span></p>

                        }

                    </div>
                    <div style={{display: "flex"}}>
                        <div className="infoImovel">
                            <Bed width={18} height={18} color=""></Bed>
                            <p className="infoQuantity">{props.quantQuartos}</p>
                            <Sofa width={18} height={18} color="" />
                            <p className="infoQuantity">{props.quantSala}</p>
                            <Shower width={18} height={18} color="" />
                            <p className="infoQuantity">{props.quantBanheiros}</p>
                        </div>

                        
                    </div>
                </div>
                <div style={{ width: "235px", height: "1px", backgroundColor: "var(--text-white)", opacity: "0.20", margin: "5px auto" }} />
                <article style={{ display: "flex", flexDirection: "row", gap: "55px", alignItems: "center" }}>
                    <Button size="small" text="saiba mais" background="var(--text-white)" color="var(--box-red-pink)" hover="lightHover"></Button>
                    <div style={{ display: "flex", flexDirection: "row", gap: "7.92px", opacity: 0.6, alignItems: "center" }}>
                        <StarFavorite width={27} height={27} color="#FFFF" selected={false} />
                        <MarcadorDeMapa width={22} height={22} color="" />
                    </div>
                </article>
            </section>
        </div>
    );
}