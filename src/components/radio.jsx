import React, { useState } from 'react';

function RadioButtons() {
  const [condition, setCondition] = useState('GOOD');
  const [capacity, setCapacity] = useState('128GB');
  const [color, setColor] = useState('SPACE BLACK');

  const conditionOptions = ['GOOD', 'GREAT', 'PRISTINE'];
  const capacityOptions = ['128GB', '256GB', '512GB'];
  const colorOptions = ['#000000', '#9F88A7', '#F8E7B6', '#D5D8D8', '#7C7D7D'];

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const handleCapacityChange = (event) => {
    setCapacity(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <h4 className='mb-2'>CONDITION: {condition}</h4>
      <div className="radio-group">
        {conditionOptions.map((option) => (
          <label key={option} className="radio-label">
            <button
              type="button"
              className={`radio-button ${condition === option? 'active' : ''}`}
              onClick={() => handleConditionChange({ target: { value: option } })}
            >
              {option}
            </button>
          </label>
        ))}
      </div>

      <h4 className='mb-2'>CAPACITY: {capacity}</h4>
      <div className="radio-group">
        {capacityOptions.map((option) => (
          <label key={option} className="radio-label">
            <button
              type="button"
              className={`radio-button ${capacity === option? 'active' : ''}`}
              onClick={() => handleCapacityChange({ target: { value: option } })}
            >
              {option}
            </button>
          </label>
        ))}
      </div>

      <h4 className='mb-4'>COLOUR: {color}</h4>
      <div className="radio-group">
        {colorOptions.map((option) => (
          <label key={option} className="radio-label"
          >
            <button
              type="button"
              className={`radio-button ${color === option? 'active' : ''}`}
              onClick={() => handleColorChange({ target: { value: option } })}
              style={{ borderRadius:"100px", width:50, paddingLeft:0, paddingRight:0} }
            >
                <div style={{background:option,height:"28px", width:"28px", borderRadius:"50%",margin:"auto"}}>

                </div>
              
            </button>
          </label>
        ))}
      </div>
    </div>
  );
}

export default RadioButtons;