import ArrowIcon from "../IconsTSX/ArrowIcon"
import CustomerService from "../IconsTSX/CustomerService"
import InvestimentGraph from "../IconsTSX/InvestimentGraph"
import Options from "../IconsTSX/Options"

import Sofa from "../IconsTSX/Sofa"
import Key from "../IconsTSX/key"
import NotFound from "../IconsTSX/notFound"
import StarFavorite from "../Inputs/StarFavorite"
import "./css/style.css"

export default function NoRegistration(){

    return (
        <>
        <div className="containerNoRegistration">
            <div className="containerIconNoRegistration">
                <NotFound width="90" height="90" color="var(--box-mid-dark-red)"/>
            </div>
           
                <h2 className="containerTitleNoRegistration" > NENHUM REGISTRO</h2>
                <div className="containerTextNoRegistration">
                    <h2 className="textNoRegistration"> Não foi possível encontrar nenhum registro em sua pesquisa </h2>
                </div>
           
        </div>               
        </>
    )
}