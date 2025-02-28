import HavLogo from "../IconsTSX/HavLogo";
import Language from "../IconsTSX/Language";
import Hamburger from "../IconsTSX/Hamburguer";
import "./css/style.css"

export default function HeaderAdm(props: { width: number; height: number; color: string }) {
    return (
        <header className="headerContainer">
            <div className="logoContainer">
                <HavLogo width={props.width} height={props.height} color={props.color} />
                <Language width={30} height={30} color="" />
            </div>

            <section className="headerDesktop">
                <nav>
                    <ul>

                    </ul>
                </nav>
            </section>

            <section className="headerMobile">
                <Hamburger width={32} height={32} color="" />
            </section>
        </header>
    );
}
