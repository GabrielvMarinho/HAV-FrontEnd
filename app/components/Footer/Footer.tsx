import LightBulb from "../IconsTSX/LightBulb";
import Sobre from "../IconsTSX/Sobre";
import Folder from "../IconsTSX/Folder";
import HavLogo from "../IconsTSX/HavLogo";
import Link from "next/link";
import ChamadaTelefonica from "../IconsTSX/ChamadaTelefonica";
import Envelope from "../IconsTSX/Envelope";
import "./css/style.css"

export default function Footer(props: { width: number, height: number, color: string }) {
    return (
        <footer className="footerEditor" >
            <article className="firstArticle-footer">
                <section className="contentFooter">
                    <p className="titleContent-footer">Páginas de apoio</p>
                    <div className="iconInfos">
                        <Sobre width={props.width} height={props.height} color={props.color}></Sobre>
                        <Link style={{ color: "var(--text-white)" }} href={"/"}>Sobre nós</Link>
                    </div>
                    <div className="iconInfos">
                        <Folder width={props.width} height={props.height} color={props.color}></Folder>
                        <Link style={{ color: "var(--text-white)" }} href={"/"}>Política de privacidade</Link>
                    </div>
                </section>
                <section className="contentFooter">
                    <p className="titleContent-footer">Redes sociais</p>
                    <div style={{ display: "flex", flexDirection: "row", gap: "22px" }}>
                        <div className="socialMedia"></div>
                        <div className="socialMedia"></div>
                        <div className="socialMedia"></div>
                    </div>
                </section>
            </article>
            <article className="secondArticle-footer">
                <HavLogo width={150} height={150} color={props.color}></HavLogo>
            </article>
            <article className="thirdArticle-footer">
                <section className="contentFooter">
                    <p className="titleContent-footer">Contato</p>
                    <div className="iconInfos">
                        <ChamadaTelefonica width={props.width} height={props.height} color={props.color}></ChamadaTelefonica>
                        <p>Telefone 47 99999-9999</p>
                    </div>
                    <div className="iconInfos">
                        <Envelope width={props.width} height={props.height} color=""></Envelope>
                        <p>E-mail havimob@gmail.com</p>
                    </div>
                </section>
                <section className="contentFooter">
                    
                </section>
            </article>
        </footer>
    );
}