import ArrowNextSlide from "../IconsTSX/ArrowNextSlide";
import Bell from "../IconsTSX/Bell";
import Comments from "../IconsTSX/Comments";
import Definition from "../IconsTSX/Definitions";
import StarIcon from "../IconsTSX/StarIcon";
import Button from "../Inputs/Button";
import HorizontalLine from "../NonInteractable/HorizontalLine";
import findUserOnCookie from "@/app/utils/findUserOnCookie";

export default async function ProfileValidation() {
    
    const usuario = await findUserOnCookie();

    return (
        <>
            {usuario.role === "ROLE_CUSTOMER" && <>
                <div className="menuContainer">
                    <div className="hamburgerMenu">
                    <ul>
                        <li className="menuItem">
                        <HorizontalLine size={500} color="#0F0F0F80" />
                        <div className="menuContent">
                            <div className="IconProfile">
                            <Bell width={20} height={20} color="var(--text--mid-dark-red)"/>
                            </div>
                            <div className="menuTextWrapperNot">
                            <a href="/notification">NOTIFICAÇÕES</a>
                            </div>
                            <div className="lineSpacing">
                            <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                            </div>
                        </div>
                        </li>
                        <li className="menuItem">
                        <HorizontalLine size={500} color="#0F0F0F80" />
                        <div className="menuContent">
                            <div className="IconProfile">
                            <Comments width={20} height={20} color="var(--text--mid-dark-red)"/>
                            </div>
                            <div className="menuTextWrapperMens">
                            <a href="#">MENSAGENS</a>
                            </div>
                            <div className="lineSpacing">
                            <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                            </div>
                        </div>
                        </li>
                        <li className="menuItem">
                        <HorizontalLine size={500} color="#0F0F0F80" />
                        <div className="menuContent">
                            <div className="IconProfile">
                            <StarIcon width={20} height={20} color="var(--text--mid-dark-red)"/>
                            </div>
                            <div className="menuTextWrapperFav">
                            <a href="#">FAVORITOS</a>
                            </div>
                            <div className="lineSpacing">
                            <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                            </div>
                        </div>
                        </li>
                        <li className="menuItem">
                        <HorizontalLine size={500} color="#0F0F0F80" />
                        <div className="menuContent">
                            <div className="IconProfile">
                            <Definition width={20} height={20} color="var(--text--mid-dark-red)"/>
                            </div>
                            <div className="menuTextWrapper">
                            <a href="/configuration">CONFIGURAÇÕES</a>
                            </div>
                            <div className="lineSpacing">
                            <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                            </div>
                        </div>
                        </li>
                        <HorizontalLine size={500} color="#0F0F0F80" />
                    </ul>
                    </div>
                    <div className="logoutButton">
                    <Button type="button" size="large" text="SAIR" hover="darken" color="white" background="#B23F52" />
                    </div>
                    </div>
            </>}

            {usuario.role === "ROLE_REALTOR" && <>
                <div className="menuContainer">
                    <div className="hamburgerMenu">
                    <ul>
                        <li className="menuItem">
                        <HorizontalLine size={500} color="#0F0F0F80" />
                        <div className="menuContent">
                            <div className="IconProfile">
                            <Bell width={20} height={20} color="var(--text--mid-dark-red)"/>
                            </div>
                            <div className="menuTextWrapperNot">
                            <a href="/notification">NOTIFICAÇÕES</a>
                            </div>
                            <div className="lineSpacing">
                            <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                            </div>
                        </div>
                        </li>
                        <li className="menuItem">
                        <HorizontalLine size={500} color="#0F0F0F80" />
                        <div className="menuContent">
                            <div className="IconProfile">
                            <Comments width={20} height={20} color="var(--text--mid-dark-red)"/>
                            </div>
                            <div className="menuTextWrapperMens">
                            <a href="#">men</a>
                            </div>
                            <div className="lineSpacing">
                            <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                            </div>
                        </div>
                        </li>
                        <li className="menuItem">
                        <HorizontalLine size={500} color="#0F0F0F80" />
                        <div className="menuContent">
                            <div className="IconProfile">
                            <StarIcon width={20} height={20} color="var(--text--mid-dark-red)"/>
                            </div>
                            <div className="menuTextWrapperFav">
                            <a href="#">FAVORITOS</a>
                            </div>
                            <div className="lineSpacing">
                            <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                            </div>
                        </div>
                        </li>
                        <li className="menuItem">
                        <HorizontalLine size={500} color="#0F0F0F80" />
                        <div className="menuContent">
                            <div className="IconProfile">
                            <Definition width={20} height={20} color="var(--text--mid-dark-red)"/>
                            </div>
                            <div className="menuTextWrapper">
                            <a href="/configuration">CONFIGURAÇÕES</a>
                            </div>
                            <div className="lineSpacing">
                            <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                            </div>
                        </div>
                        </li>
                        <HorizontalLine size={500} color="#0F0F0F80" />
                    </ul>
                    </div>
                    <div className="logoutButton">
                    <Button type="button" size="large" text="SAIR" hover="darken" color="white" background="#B23F52" />
                    </div>
                    </div>
            </>}

            {usuario.role === "ROLE_EDITOR" && <>
                <div className="menuContainer">
                    <div className="hamburgerMenu">
                    <ul>
                        <li className="menuItem">
                        <HorizontalLine size={500} color="#0F0F0F80" />
                        <div className="menuContent">
                            <div className="IconProfile">
                            <Bell width={20} height={20} color="var(--text--mid-dark-red)"/>
                            </div>
                            <div className="menuTextWrapperNot">
                            <a href="/notification">NOTIFICAÇÕES</a>
                            </div>
                            <div className="lineSpacing">
                            <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                            </div>
                        </div>
                        </li>
                        <li className="menuItem">
                        <HorizontalLine size={500} color="#0F0F0F80" />
                        <div className="menuContent">
                            <div className="IconProfile">
                            <Comments width={20} height={20} color="var(--text--mid-dark-red)"/>
                            </div>
                            <div className="menuTextWrapperMens">
                            <a href="#">MENSAGENS</a>
                            </div>
                            <div className="lineSpacing">
                            <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                            </div>
                        </div>
                        </li>
                        <li className="menuItem">
                        <HorizontalLine size={500} color="#0F0F0F80" />
                        <div className="menuContent">
                            <div className="IconProfile">
                            <StarIcon width={20} height={20} color="var(--text--mid-dark-red)"/>
                            </div>
                            <div className="menuTextWrapperFav">
                            <a href="#">fav</a>
                            </div>
                            <div className="lineSpacing">
                            <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                            </div>
                        </div>
                        </li>
                        <li className="menuItem">
                        <HorizontalLine size={500} color="#0F0F0F80" />
                        <div className="menuContent">
                            <div className="IconProfile">
                            <Definition width={20} height={20} color="var(--text--mid-dark-red)"/>
                            </div>
                            <div className="menuTextWrapper">
                            <a href="/configuration">CONFIGURAÇÕES</a>
                            </div>
                            <div className="lineSpacing">
                            <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                            </div>
                        </div>
                        </li>
                        <HorizontalLine size={500} color="#0F0F0F80" />
                    </ul>
                    </div>
                    <div className="logoutButton">
                    <Button type="button" size="large" text="SAIR" hover="darken" color="white" background="#B23F52" />
                    </div>
                    </div>
            </>}

            {usuario.role === "ROLE_ADMIN" && <>
                <div className="menuContainer">
                    <div className="hamburgerMenu">
                    <ul>
                        <li className="menuItem">
                        <HorizontalLine size={500} color="#0F0F0F80" />
                        <div className="menuContent">
                            <div className="IconProfile">
                            <Bell width={20} height={20} color="var(--text--mid-dark-red)"/>
                            </div>
                            <div className="menuTextWrapperNot">
                            <a href="/notification">NOTIFICAÇÕES</a>
                            </div>
                            <div className="lineSpacing">
                            <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                            </div>
                        </div>
                        </li>
                        <li className="menuItem">
                        <HorizontalLine size={500} color="#0F0F0F80" />
                        <div className="menuContent">
                            <div className="IconProfile">
                            <Comments width={20} height={20} color="var(--text--mid-dark-red)"/>
                            </div>
                            <div className="menuTextWrapperMens">
                            <a href="#">MENSAGENS</a>
                            </div>
                            <div className="lineSpacing">
                            <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                            </div>
                        </div>
                        </li>
                        <li className="menuItem">
                        <HorizontalLine size={500} color="#0F0F0F80" />
                        <div className="menuContent">
                            <div className="IconProfile">
                            <StarIcon width={20} height={20} color="var(--text--mid-dark-red)"/>
                            </div>
                            <div className="menuTextWrapperFav">
                            <a href="#">FAVORITOS</a>
                            </div>
                            <div className="lineSpacing">
                            <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                            </div>
                        </div>
                        </li>
                        <li className="menuItem">
                        <HorizontalLine size={500} color="#0F0F0F80" />
                        <div className="menuContent">
                            <div className="IconProfile">
                            <Definition width={20} height={20} color="var(--text--mid-dark-red)"/>
                            </div>
                            <div className="menuTextWrapper">
                            <a href="/configuration">config</a>
                            </div>
                            <div className="lineSpacing">
                            <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                            </div>
                        </div>
                        </li>
                        <HorizontalLine size={500} color="#0F0F0F80" />
                    </ul>
                    </div>
                    <div className="logoutButton">
                    <Button type="button" size="large" text="SAIR" hover="darken" color="white" background="#B23F52" />
                    </div>
                    </div>
            </>} 
        </>
    )
}
