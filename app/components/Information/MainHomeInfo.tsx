import ArrowIcon from "../IconsTSX/ArrowIcon"
import CustomerService from "../IconsTSX/CustomerService"
import InvestimentGraph from "../IconsTSX/InvestimentGraph"
import Options from "../IconsTSX/Options"

import Sofa from "../IconsTSX/Sofa"
import Key from "../IconsTSX/key"
import StarFavorite from "../Inputs/StarFavorite"
import "./css/style.css"
export default function MainHomeInfo(){

    return (
        <>
            <div className="mainHomeInfoContainer">

                <div className="mainHomeInfoSubContainer">
                        <div className="mainHomeInfoEspecific">
                            <div className="icone">
                                <CustomerService width={42} height={42} color="#ffffff" />
                            </div>
                            <p className="mainHomeInfoEspecificP"> Atendimento único </p>
                            <p className="textBehind">sua solicitação resolvida de forma rápida e completa em um único contato</p>
                        </div>
                    
                        <div className="mainHomeInfoEspecific">
                            <div className="icone">
                                <Key width={42} height={42} color="#ffffff" />
                            </div>
                            <p className="mainHomeInfoEspecificP"> Segurança e transparência </p>
                            <p className="textBehind"> garantimos a proteção dos seus dados e informações claras em todo o processo. </p>
                        </div>
                </div>

                <div className="mainHomeInfoSubContainer">
                        <div className="mainHomeInfoEspecific">
                            <div className="icone">
                                <Options width={42} height={42} color="#ffffff" />
                            </div>
                            <p className="mainHomeInfoEspecificP"> Variedade de opções </p>
                            <p className="textBehind"> Oferecemos diversas opções para atender às suas necessidades e preferências. </p>
                        </div>
                        
                        <div className="mainHomeInfoEspecific">
                            <div className="icone">
                                <InvestimentGraph width={42} height={42} color="#ffffff" />
                            </div>
                            <p className="mainHomeInfoEspecificP"> Investimentos seguros </p>
                            <p className="textBehind">  Oferecemos investimentos seguros, com opções confiáveis para garantir a proteção do seu patrimônio. </p>
                        </div>
                </div>
            </div>
        </>
    )
}