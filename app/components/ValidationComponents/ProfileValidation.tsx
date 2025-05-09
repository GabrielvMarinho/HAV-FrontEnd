import AuthGuard from "@/app/context/AuthGuard";
import ArrowNextSlide from "../IconsTSX/ArrowNextSlide";
import Bell from "../IconsTSX/Bell";
import Comments from "../IconsTSX/Comments";
import Definition from "../IconsTSX/Definitions";
import StarIcon from "../IconsTSX/StarIcon";
import Button from "../Inputs/Button";
import HorizontalLine from "../NonInteractable/HorizontalLine";
import Users from "../IconsTSX/Users";
import User from "../IconsTSX/User";
import Calendar from "../IconsTSX/Calendar";

export default async function ProfileValidation(props: { usuario: any}) {
        console.log("user", props.usuario)
        return (
            <>
            <AuthGuard requiredRole="ROLE_CUSTOMER">
            {props.usuario.role == "ROLE_ADMIN" && (
            <div className="menuContainer">
                <div style={{marginRight:"20px"}}>
                    <p style={{fontSize:"var(--text-m)", color:"var(--text-black)", fontWeight:"600"}}>{props.usuario.email}</p>
                    <p style={{marginTop:"3px", fontSize:"var(--text-sm)", textAlign:"right"}}>ADMINISTRADOR</p>
                </div>
            <div className="hamburgerMenu">
            <ul>
                <li className="menuItem">
                    

                <HorizontalLine size={500} color="var(--text-black)" />
                <a href="/notification">
                    <div className="menuContent">
                        <div className="IconProfile">
                            <Bell width={20} height={20} color="var(--text--mid-dark-red)"/>
                            <a>NOTIFICAÇÕES</a>
                        </div>
                        <div className="lineSpacing">
                        <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                        </div>
                    </div>
                </a>
                </li>
                <li className="menuItem">
                <HorizontalLine size={500} color="var(--text-black)" />
                <a href="/chat">
                    <div className="menuContent">
                        <div className="IconProfile">
                            <Comments width={20} height={20} color="var(--text--mid-dark-red)"/>
                            <a>MENSAGENS</a>
                        </div>
                        <div className="lineSpacing">
                        <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                        </div>
                    </div>
                </a>
                </li>
                <li className="menuItem">
                <HorizontalLine size={500} color="var(--text-black)" />
                <a href="/manage/admins">
                    <div className="menuContent">
                        <div className="IconProfile">
                            <Users width={20} height={20} color="var(--text--mid-dark-red)"/>
                            <a> GERENCIAR USUÁRIOS</a>
                        </div>
                        <div className="lineSpacing">
                            <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                        </div>
                    </div>
                </a>
                </li>
                <li className="menuItem">
                <HorizontalLine size={500} color="var(--text-black)" />
                <a href="/configuration">
                    <div className="menuContent">
                            <div className="IconProfile">
                            <Definition width={20} height={20} color="var(--text--mid-dark-red)"/>
                            <a>CONFIGURAÇÕES</a>
                            </div>
                            <div className="lineSpacing">
                            <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                            </div>
                        </div>
                </a>
                </li>
                <HorizontalLine size={500} color="var(--text-black)" />
            </ul>
            </div>
           
            </div>
            )}
            
            {props.usuario.role == "ROLE_EDITOR" && (
            <div className="menuContainer">
                <div style={{marginRight:"20px"}}>
                    <p style={{fontSize:"var(--text-m)", color:"var(--text-black)", fontWeight:"600"}}>{props.usuario.email}</p>
                    <p style={{marginTop:"3px", fontSize:"var(--text-sm)", textAlign:"right"}}>EDITOR</p>
                </div>
            <div className="hamburgerMenu">
                
            <ul>
                <li className="menuItem">
                <HorizontalLine size={500} color="var(--text-black)" />
                <a href="/notification">
                    <div className="menuContent">
                        <div className="IconProfile">
                            <Bell width={20} height={20} color="var(--text--mid-dark-red)"/>
                            <a>NOTIFICAÇÕES</a>
                        </div>
                        <div className="lineSpacing">
                        <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                        </div>
                    </div>
                </a>
                </li>
                <li className="menuItem">
                    <HorizontalLine size={500} color="var(--text-black)" />
                    <a href="/chat">
                        <div className="menuContent">
                            <div className="IconProfile">
                                <Comments width={20} height={20} color="var(--text--mid-dark-red)"/>
                                <a>MENSAGENS</a>
                            </div>
                            <div className="lineSpacing">
                            <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                            </div>
                        </div>
                    </a>
                </li>
                <li className="menuItem">
                    <HorizontalLine size={500} color="var(--text-black)" />
                    <a href="/favorite">
                        <div className="menuContent">
                            <div className="IconProfile">
                                <StarIcon width={20} height={20} color="var(--text--mid-dark-red)"/>
                                <a> FAVORITOS</a>
                            </div>
                            <div className="lineSpacing">
                            <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                            </div>
                        </div>
                    </a>
                </li>
                <li className="menuItem">
                    <HorizontalLine size={500} color="var(--text-black)" />
                    <a href="/manage/proprietors">
                        <div className="menuContent">
                            <div className="IconProfile">
                                <User width={20} height={20} color="var(--text--mid-dark-red)"/>
                                <a>GERENCIAR PROPRIETÁRIOS</a>
                            </div>
                            <div className="lineSpacing">
                            <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                            </div>
                        </div>
                    </a>
                </li>
                <li className="menuItem">
                    <HorizontalLine size={500} color="var(--text-black)" />
                    <a href="/configuration">
                        <div className="menuContent">
                                <div className="IconProfile">
                                    <Definition width={20} height={20} color="var(--text--mid-dark-red)"/>
                                    <a>CONFIGURAÇÕES</a>
                                </div>
                                <div className="lineSpacing">
                                <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                                </div>
                        </div>
                    </a>
                </li>
                <HorizontalLine size={500} color="var(--text-black)" />
            </ul>
            </div>
            
            </div>
            )}

            {props.usuario.role == "ROLE_REALTOR" && (
            <div className="menuContainer">
                <div style={{marginRight:"20px"}}>
                    <p style={{fontSize:"var(--text-m)", color:"var(--text-black)", fontWeight:"600"}}>{props.usuario.email}</p>
                    <p style={{marginTop:"3px", fontSize:"var(--text-sm)", textAlign:"right"}}>ADMINISTRADOR</p>
                </div>
            <div className="hamburgerMenu">
            <ul>
                <li className="menuItem">
                <HorizontalLine size={500} color="var(--text-black)" />
                <a href="/notification">
                    <div className="menuContent">
                        <div className="IconProfile">
                            <Bell width={20} height={20} color="var(--text--mid-dark-red)"/>
                            <a>NOTIFICAÇÕES</a>
                        </div>
                        <div className="lineSpacing">
                        <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                        </div>
                    </div>
                </a>
                </li>
                <li className="menuItem">
                    <HorizontalLine size={500} color="var(--text-black)" />
                    <a href="/chat">
                        <div className="menuContent">
                            <div className="IconProfile">
                                <Comments width={20} height={20} color="var(--text--mid-dark-red)"/>
                                <a>MENSAGENS</a>
                            </div>
                            <div className="lineSpacing">
                            <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                            </div>
                        </div>
                    </a>
                </li>
                <li className="menuItem">
                    <HorizontalLine size={500} color="var(--text-black)" />
                    <a href="/favorite">
                        <div className="menuContent">
                            <div className="IconProfile">
                                <StarIcon width={20} height={20} color="var(--text--mid-dark-red)"/>
                                <a> FAVORITOS</a>
                            </div>
                            <div className="lineSpacing">
                            <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                            </div>
                        </div>
                    </a>
                </li>
                <li className="menuItem">
                    <HorizontalLine size={500} color="var(--text-black)" />
                    <a href="/calendar">
                        <div className="menuContent">
                            <div className="IconProfile">
                                <Calendar width={20} height={20} color="var(--text--mid-dark-red)"/>
                                <a> AGENDAMENTOS</a>
                            </div>
                            <div className="lineSpacing">
                            <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                            </div>
                        </div>
                    </a>
                </li>
                <li className="menuItem">
                    <HorizontalLine size={500} color="var(--text-black)" />
                    <a href="/configuration">
                        <div className="menuContent">
                                <div className="IconProfile">
                                    <Definition width={20} height={20} color="var(--text--mid-dark-red)"/>
                                    <a>CONFIGURAÇÕES</a>
                                </div>
                                <div className="lineSpacing">
                                <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                                </div>
                        </div>
                    </a>
                </li>
                <HorizontalLine size={500} color="var(--text-black)" />
            </ul>
            </div>
          
            </div>
            )}


            {props.usuario.role === "ROLE_CUSTOMER" && (
            <div className="menuContainer">
            <div className="hamburgerMenu">
            <ul>
                <li className="menuItem">
                <HorizontalLine size={500} color="var(--text-black)" />
                <a href="/notification">
                    <div className="menuContent">
                        <div className="IconProfile">
                            <Bell width={20} height={20} color="var(--text--mid-dark-red)"/>
                            <a>NOTIFICAÇÕES</a>
                        </div>
                        <div className="lineSpacing">
                        <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                        </div>
                    </div>
                </a>
                </li>
                <li className="menuItem">
                <HorizontalLine size={500} color="var(--text-black)" />
                <a href="/chat">
                    <div className="menuContent">
                        <div className="IconProfile">
                            <Comments width={20} height={20} color="var(--text--mid-dark-red)"/>
                            <a>MENSAGENS</a>
                        </div>
                        <div className="lineSpacing">
                        <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                        </div>
                    </div>
                </a>
                </li>
                <li className="menuItem">
                <HorizontalLine size={500} color="var(--text-black)" />
                <a href="/favorite">
                    <div className="menuContent">
                        <div className="IconProfile">
                            <StarIcon width={20} height={20} color="var(--text--mid-dark-red)"/>
                            <a>FAVORITOS</a>
                        </div>
                        <div className="lineSpacing">
                        <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                        </div>
                    </div>
                </a>
                </li>
                <li className="menuItem">
                <HorizontalLine size={500} color="var(--text-black)" />
                <a href="/configuration">
                    <div className="menuContent">
                        <div className="IconProfile">
                            <Definition width={20} height={20} color="var(--text--mid-dark-red)"/>
                            <a>CONFIGURAÇÕES</a>
                        </div>
                        <div className="lineSpacing">
                        <ArrowNextSlide height={40} width={25} color="var(--text--mid-dark-red)" />
                        </div>
                    </div>
                </a>
                </li>
                <HorizontalLine size={500} color="var(--text-black)" />
            </ul>
            </div>
            
            </div>
            )}


            </AuthGuard>
            </>
        );
    }

   