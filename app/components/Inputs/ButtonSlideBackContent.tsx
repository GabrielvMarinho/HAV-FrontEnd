import "./css/style.css"
import ArrowBack from "../IconsTSX/ArrowBackSlide";

export default function ButtonSlideBackContent(){
    return(
        <button className="buttonSlideBackContent">
            <ArrowBack height={40} width={25} color="white"/>
        </button>
    );
}