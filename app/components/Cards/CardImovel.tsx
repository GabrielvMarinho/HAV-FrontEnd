import "./css/style.css"
import Image from "next/image";
import ImageCasa from "@/public/Image/ImagemCasa.png"
import Bed from "../IconsTSX/Bed";
import Sofa from "../IconsTSX/Sofa";
import Shower from "../IconsTSX/Shower";
import Button from "../Inputs/Button";

export default function CardImovel(props: {
    bairro: string, cidade: string, valor: string,
    infoParcela: string, quantQuartos: number, quantSala: number, quantBanheiros: number
}) {
    return (
        <div style={{ width: "269px", height: "344px", display: "flex", flexDirection: "column" }}>
            <Image src={ImageCasa} alt="imagem da casa"></Image>
            <section style={{ backgroundColor: "var(--button-color)", color: "var(--text-white)" }}>
                <div style={{ display: "flex", textAlign: "left", flexDirection: "column", margin: "13px 0 0 17.47px" }}>
                    <p className="bairro">{props.bairro}</p>
                    <p className="cidade">{props.cidade}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", margin: "13px 0 0 17.47px", gap: "12px" }}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <p className="valorImovel">{props.valor}</p>
                        <p className="infoParcela">{props.infoParcela}</p>
                    </div>
                    <div className="infoImovel">
                        <Bed width={18} height={18} color=""></Bed>
                        <p className="infoQuantity">{props.quantQuartos}</p>
                    </div>
                    <div className="infoImovel">
                        <Sofa width={18} height={18} color="" />
                        <p className="infoQuantity">{props.quantSala}</p>
                    </div>
                    <div className="infoImovel">
                        <Shower width={18} height={18} color="" />
                        <p className="infoQuantity">{props.quantBanheiros}</p>
                    </div>
                </div>
                <div style={{ width: "235px", height: "1px", backgroundColor: "var(--text-white)", opacity: "0.20", margin: "11px auto" }} />
                <article style={{}}>
                    <Button size="small" text="saiba mais" func={() => ("")} backgroundColor="var(--text-white)" color="var(--box-red-pink)"></Button>
                </article>
            </section>
        </div>
    );
}