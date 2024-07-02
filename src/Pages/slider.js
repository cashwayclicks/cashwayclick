import React, { useState } from 'react';
import "../Styles/Hero.css"

const SliderComponent = ({ onDataUpdate,valb,minm}) => {
  const [value, setValue] = useState(valb);
  
   // Initial value set to 500

  const handleChange = (event) => {
    
        const newData = event.target.value;
        event.preventDefault()
        setValue(newData);
        event.preventDefault()
        // Call the callback function passed from the parent with new data
        onDataUpdate(newData);
        event.preventDefault()
      ;
  };
  const sliderStyle = {
    width: '100%', // Make the slider track wider
    height: '25px', // Increase the height of the slider track
  };
  const sliderThumbStyle = {
    width: '100%', // Increase the size of the thumb
    height: '15px',
    backgroundColor: '#4CAF50', // Change the thumb color if desired
    borderRadius: '50%', // Make the thumb circular
    cursor: 'pointer', // Change cursor to pointer on hover
  };

  return (
    <div style={{ margin: '10px' }}  className="text-appointment-btn">
      <label htmlFor="rangeSlider">Select amount : ₹{minm} is the minimum amount if approved . actual price is ₹{valb}</label>
      <br />
      <input
        type="range"
        id="rangeSlider"
        name="rangeSlider"
        min={minm}
        max="10000"
        step="1"
        style={sliderThumbStyle}
        value={value}
        onChange={handleChange}
      />
      <br />
      <p>Selected amount: {value}</p>
    </div>
  );
};

export default SliderComponent;