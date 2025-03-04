
import HavLogo from "../IconsTSX/HavLogo";
import Language from "../IconsTSX/Language";
import Hamburger from "../IconsTSX/Hamburguer";
import Link from "next/link";
import { ReactNode } from "react";

export default function HeaderAdm(props: { dropdownLinks :ReactNode[],options :string[], optionsLinks :string[], width: number; height: number; color: string }) {
    return (
        <header className="headerContainer">
                
                <HavLogo width={props.width} height={props.height} color={props.color} />

            <div style={{display:"flex", gap:"30px"}}>
                <div className="HeaderOptions">
                {props.options.map((option, index) =>
                    <Link href={props.optionsLinks[index]}>{option}</Link>
                )}
                {props.dropdownLinks.map(option =>
                    option
                )}
                </div>
                <Language width={30} height={30} color="" />
            </div>
             

            {/* <section className="headerMobile">
                <Hamburger width={32} height={32} color="" />
            </section> */}
        </header>
    );
}
