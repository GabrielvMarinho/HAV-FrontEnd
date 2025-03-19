import "./css/style.css"
import ArrowRight from "../IconsTSX/ArrowNextSlide";

export default function ButtonSlideNextContent(){
    return(
        <button className="buttonSlideNextContent">
            <ArrowRight height={40} width={25} color="white"/>
        </button>
    );
}