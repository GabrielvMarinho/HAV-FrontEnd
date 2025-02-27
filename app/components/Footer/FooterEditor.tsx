import Sobre from "../IconsTSX/Sobre";
import Folder from "../IconsTSX/File";
import HavLogo from "../IconsTSX/HavLogo";
import HavLogoMobile from "../IconsTSX/HavLogoMobile";
import Link from "next/link";
import ChamadaTelefonica from "../IconsTSX/CellPhone";
import Envelope from "../IconsTSX/Envelope";
import "./css/style.css"
import Button from "../Inputs/Button";
// import InputTextFooter from "../Inputs/InputTextFooter";
import InputText from "../Inputs/InputText";

export default function Footer(props: { width: number, height: number, color: string }) {
    return (
        <footer className="footer" >
            <article className="firstArticle-footer">
                <section className="contentFooter">
                    <p className="titleContent-footer">Páginas de apoio</p>
                    <div className="iconInfos">
                        <Sobre width={props.width} height={props.height} color={props.color}></Sobre>
                        <Link style={{ color: "var(--text-white)", opacity: "0.6"}} href={"/"}>Sobre nós</Link>
                    </div>
                    <div className="iconInfos">
                        <Folder width={props.width} height={props.height} color={props.color}></Folder>
                        <Link style={{ color: "var(--text-white)", opacity: "0.6"}} href={"/"}>Política de privacidade</Link>
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
               <p style={{fontSize: "var(--text-ml)", opacity: "0.6"}}>Todos os direitos reservados por HAV Imobiliária </p>
            </article>
            <article className="secondArticleMobile-footer">
                <HavLogoMobile width={150} height={150} color={props.color}></HavLogoMobile>
            </article>
            <article className="thirdArticle-footer">
                <section className="contentFooter">
                    <p className="titleContent-footer">Contato</p>
                    <div className="iconInfos">
                        <ChamadaTelefonica width={props.width} height={props.height} color={props.color}></ChamadaTelefonica>
                        <p style={{opacity: "0.6"}}>Telefone 47 99999-9999</p>
                    </div>
                    <div className="iconInfos">
                        <Envelope width={props.width} height={props.height} color=""></Envelope>
                        <p style={{opacity: "0.6"}}>E-mail havimob@gmail.com</p>
                    </div>
                </section>
                <section className="contentFooter">
                    <p className="titleContent-footer">Receba Notificações</p>
                    <InputText id="email" size="medium" text="" placeholder="Digite seu E-mail"></InputText>
                    <Button size="small" text="Inscrever-se"></Button>
                </section>
            </article>
        </footer>
    );
}