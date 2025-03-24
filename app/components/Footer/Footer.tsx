"use client"
import Help from "../IconsTSX/Help";
import Sobre from "../IconsTSX/Sobre";
import Folder from "../IconsTSX/File";
import HavLogo from "../IconsTSX/HavLogoLight";
import Link from "next/link";
import ChamadaTelefonica from "../IconsTSX/CellPhone";
import Envelope from "../IconsTSX/Envelope";
import "./css/style.css"
import Button from "../Inputs/Button";
import InputText from "../Inputs/InputText";
import "../../variables.css"
export default function Footer() {
    //funcão para mandar o email para receber notificação

    //não finalizado
    const sendEmail = function(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
    }   


    return (
        <footer className="footer" >
            <article className="firstArticle-footer">
                <section className="contentFooter">
                    <p className="titleContent-footer">Páginas de apoio</p>
                    <div className="iconInfos">
                        <Help width={25} height={25} color={"var(--icon-footer-color)"}></Help>
                        <Link style={{ color: "var(--text-white)", opacity: "0.6"}} href={"/faq"}>FAQ</Link>
                    </div>
                    <div className="iconInfos">
                        <Sobre width={25} height={25} color={"var(--icon-footer-color)"}></Sobre>
                        <Link style={{ color: "var(--text-white)", opacity: "0.6"}} href={"/"}>Sobre nós</Link>
                    </div>
                    <div className="iconInfos">
                        <Folder width={25} height={25} color={"var(--icon-footer-color)"}></Folder>
                        <Link style={{ color: "var(--text-white)", opacity: "0.6"}} href={"/privacyPolicy"}>Política de privacidade</Link>
                    </div>
                </section>
                <section className="contentFooter">
                    <p className="titleContent-footer">Redes sociais</p>
                    <div style={{ display: "flex", flexDirection: "row", gap: "22px" }}>
                        <div className="socialMedia">
                        <img src="/Image/instagram.png" width={35} height={35} alt="Instagram icon" />
                        </div>
                        <div className="socialMedia">
                        <img src="/Image/whatsapp.png" width={35} height={35} alt="Whatsapp icon" />
                        </div>
                        <div className="socialMedia">
                        <img src="/Image/twitter.png" width={35} height={35} alt="X icon" />
                        </div>
                    </div>
                </section>
            </article>
            <article className="secondArticle-footer">
                <HavLogo width={150} height={150} color={"var(--icon-footer-color)"}></HavLogo>
               <p style={{fontSize: "var(--text-ml)", opacity: "0.6"}}>Todos os direitos reservados por HAV Imobiliária </p>
            </article>
            
            <article className="thirdArticle-footer">
                <section className="contentFooter">
                    <p className="titleContent-footer">Contato</p>
                    <div className="iconInfos">
                        <ChamadaTelefonica width={25} height={25} color={"var(--icon-footer-color)"}></ChamadaTelefonica>
                        <p style={{opacity: "0.6"}}>Telefone 47 99999-9999</p>
                    </div>
                    <div className="iconInfos">
                        <Envelope width={25} height={25} color=""></Envelope>
                        <p style={{opacity: "0.6"}}>E-mail havimob@gmail.com</p>
                    </div>
                </section>
                <section className="contentFooter">
                    <p className="titleContent-footer">Receba Notificações</p>
                    <form onSubmit={sendEmail} style={{}}>
                        <InputText name="emailFooter" id="email" size="medium" text="" placeholder="Digite seu E-mail"></InputText>
                        <Button size="small" text="Inscrever-se" background="var(--text-white)" color="var(--button-color)" hover="lightHover" ></Button>
                    </form>
                </section>
            </article>
        </footer>
    );
}