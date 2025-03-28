import HeaderAdm from "@/app/components/Header/HeaderAdm";
import "../profile/style/style.css";
import Title from "@/app/components/NonInteractable/Title";
import Button from "@/app/components/Inputs/Button";
import HorizontalLine from "@/app/components/NonInteractable/HorizontalLine";
import ArrowNextSlide from "@/app/components/IconsTSX/ArrowNextSlide";

export default function ProfilePage() {
  return (
    <>
      <HeaderAdm/>
      <Title tag={"h1"} text={"perfil"} />
      <div className="profileContainer">
        <div className="profileHeader">
          <div className="imageProfile">
          </div>
          <div className="profileInfo">
            <p className="personName">KAUANI DA SILVA</p>
            <p className="userType">Administrador</p>
          </div>
        </div>
        <div className="menuContainer">
          <div className="hamburgerMenu">
            <ul>
              <li className="menuItem">
                <HorizontalLine size={500} color="#0F0F0F80" />
                <div className="menuContent">
                  <div className="menuTextWrapper">
                    <span className="menuIconPlaceholder"></span>
                    <a href="/notification">NOTIFICAÇÕES</a>
                  </div>
                  <div className="lineSpacing">
                    <ArrowNextSlide height={40} width={25} color="#5F1E2A" />
                  </div>
                </div>
              </li>
              <li className="menuItem">
                <HorizontalLine size={500} color="#0F0F0F80" />
                <div className="menuContent">
                  <div className="menuTextWrapper">
                    <span className="menuIconPlaceholder"></span>
                    <a href="#">MENSAGENS</a>
                  </div>
                  <div className="lineSpacing">
                    <ArrowNextSlide height={40} width={25} color="#5F1E2A" />
                  </div>
                </div>
              </li>
              <li className="menuItem">
                <HorizontalLine size={500} color="#0F0F0F80" />
                <div className="menuContent">
                  <div className="menuTextWrapper">
                    <span className="menuIconPlaceholder"></span>
                    <a href="#">FAVORITOS</a>
                  </div>
                  <div className="lineSpacing">
                    <ArrowNextSlide height={40} width={25} color="#5F1E2A" />
                  </div>
                </div>
              </li>
              <li className="menuItem">
                <HorizontalLine size={500} color="#0F0F0F80" />
                <div className="menuContent">
                  <div className="menuTextWrapper">
                    <span className="menuIconPlaceholder"></span>
                    <a href="/configuration">CONFIGURAÇÕES</a>
                  </div>
                  <div className="lineSpacing">
                    <ArrowNextSlide height={40} width={25} color="#5F1E2A" />
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
      </div>
    </>
  );
}