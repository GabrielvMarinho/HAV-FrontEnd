"use client"
import React, { useState, useEffect } from 'react';
import InputText from './InputText';

const PriceRangeSlider = (props: {min :number, max :number, step :number}) => {
  const [minPrice, setMinPrice] = useState(props.min);
  const [maxPrice, setMaxPrice] = useState(props.max);
  const [rangeProgress, setRangeProgress] = useState({ left: props.min, right: props.max });

  const priceGap = props.max*0.1;

  useEffect(() => {
    const range = props.max - props.min
    // Update range progress based on price input values
    const minPercent = (((minPrice - props.min)*100)/range);
    const maxPercent = (((maxPrice - props.min)*100)/range);
    setRangeProgress({
      
      left: minPercent,
      right: 100 - maxPercent,
      
    });

  }, [minPrice, maxPrice]);
  
  const handlePriceInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (e.target.className === 'input-min' && value <= maxPrice - priceGap) {
      setMinPrice(value);
    } else if (e.target.className === 'input-max' && value >= minPrice + priceGap) {
      setMaxPrice(value);
    }
  };

  const handleRangeInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (e.target.className === 'range-min' && value <= maxPrice - priceGap) {
      setMinPrice(value);
    } else if (e.target.className === 'range-max' && value >= minPrice + priceGap) {
      setMaxPrice(value);
    }
  };

  return (
    <div className="boxRangeFilter">
      <div className="priceBox">
        <div>
          <h3 style={{textAlign:"left"}}>Min</h3>
          <p>R${minPrice.toLocaleString('en-US').replace(/,/g, '.')}</p>
        </div>
        <div>
          <h3 style={{textAlign:"right"}}>Max</h3>
          <p>R${maxPrice.toLocaleString('en-US').replace(/,/g, '.')}</p>
        </div>
      </div>
      <div className="slider">
        <div className="progress" style={{ left: `${rangeProgress.left}%`, right: `${rangeProgress.right}%` }}></div>
      </div>
      <div className="range-input">
        <input
          type="range"
          className="range-min"
          min={props.min}
          max={props.max}
          value={minPrice}
          step={props.step}
          onInput={handleRangeInputChange}
        />
        <input
          type="range"
          className="range-max"
          min={props.min}
          max={props.max}
          value={maxPrice}
          step={props.step}
          onInput={handleRangeInputChange}
        />
      </div>
    </div>
  );
};

export default PriceRangeSlider;
