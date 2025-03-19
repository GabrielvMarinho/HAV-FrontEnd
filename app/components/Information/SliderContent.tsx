"use client"

import { JSX, useState } from "react";
import "./css/style.css";
import ButtonSlideContent from "../Inputs/ButtonSlideBackContent";
import ButtonSlideNextContent from "../Inputs/ButtonSlideNextContent"

export default function SliderContent(props :{ items: JSX.Element[] }){

    const [page, setPage] = useState(0)
    const nextPage = () => {
        setPage((prevPage) => (prevPage + 3) % props.items.length);
      };
    
      const prevPage = () => {
        setPage((prevPage) => (prevPage - 3 + props.items.length) % props.items.length);
      };
    
      return (
        <>
          <div className="sliderContent">
          
          <button onClick={prevPage} className="changeSliderButton">
                <ButtonSlideContent/>
            </button>
              <div className="sliderHidden sliderItemHiddenLeft">
                {props.items[(page - 1 + props.items.length) % props.items.length]}
              </div>

            <div className="sliderContentMain">
              <div className="slider-item">{props.items[page]}</div>
            </div>
            
            <div className="sliderHidden sliderItemHiddenRight">
                {props.items[(page + 1 + props.items.length) % props.items.length]}
              </div>
    
            
            <button onClick={nextPage} className="next-button">
              <ButtonSlideNextContent/> 
            </button>
          </div>
        </>
      );
}