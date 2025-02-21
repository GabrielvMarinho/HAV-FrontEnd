"use client"
import React, { useState, useEffect } from 'react';
import InputText from './InputText';
const PriceRangeSlider = () => {
  const [minPrice, setMinPrice] = useState(2500);
  const [maxPrice, setMaxPrice] = useState(7500);
  const [rangeProgress, setRangeProgress] = useState({ left: 0, right: 100 });

  const priceGap = 1000;

  useEffect(() => {
    // Update range progress based on price input values
    const minPercent = (minPrice / 10000) * 100;
    const maxPercent = (maxPrice / 10000) * 100;
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
      <div className="price-input">
        <div className="field">
          <span>Min</span>
          <input
            type="number"
            value={minPrice}
            onChange={handlePriceInputChange}
          />
        </div>
        <div className="field">
          <span>Max</span>
          <input
            type="number"
            value={maxPrice}
            onChange={handlePriceInputChange}
          />
        </div>
      </div>
      <div className="slider">
        <div className="progress" style={{ left: `${rangeProgress.left}%`, right: `${rangeProgress.right}%` }}></div>
      </div>
      <div className="range-input">
        <input
          type="range"
          className="range-min"
          min="0"
          max="10000"
          value={minPrice}
          step="100"
          onInput={handleRangeInputChange}
        />
        <input
          type="range"
          className="range-max"
          min="0"
          max="10000"
          value={maxPrice}
          step="100"
          onInput={handleRangeInputChange}
        />
      </div>
    </div>
  );
};

export default PriceRangeSlider;
