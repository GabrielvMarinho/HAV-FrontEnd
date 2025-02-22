import LightBulb from "../IconsTSX/LightBulb";
import Sobre from "../IconsTSX/Sobre";
import Folder from "../IconsTSX/Folder";
import Link from "next/link";
//adicionar agora as classes no style

export default function Footer() {
    return (
        <footer className="footer" style={{ display: "flex", alignItems: "center" }}>
            <section style={{ display: "flex", flexDirection: "row" }}>
                <article className="firstArticle">
                    <div className="footerNavigation">
                        <p className="titleFooter">Páginas de apoio</p>

                        <div className="opacityContentFooter">
                            <Sobre width={25} height={25} color={"#B23F52"} />
                            <Link href={""} style={{ color: "white", textDecoration: "none" }}>Sobre nós</Link>
                        </div>
                        <div className="opacityContentFooter">
                            <Folder width={25} height={25} color={"#B23F52"} />
                            <Link href={""} style={{ color: "white", textDecoration: "none" }}>Política de privacidade</Link>
                        </div>
                    </div>
                </article>
                <article className="">
                    <div className="footerSocialMedia" style={{ display: "flex", flexDirection: "row" }}>
                        <p className="titleFooter">Redes sociais</p>
                        <div style={{ display: "flex", flexDirection: "row", gap: "22px" }}>
                            <div className="quadradoFooter"></div>
                            <div className="quadradoFooter"></div>
                            <div className="quadradoFooter"></div>
                        </div>
                    </div>
                </article>
            </section>
        </footer>
    );
}