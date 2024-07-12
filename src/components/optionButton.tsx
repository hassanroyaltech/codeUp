import React, { useState } from 'react';

interface OptionButtonProps {
  // Add any props you want to pass to the OptionButton component
}

interface ColorOption {
  color: string;
  name: string;
}

const OptionButtons: React.FC<OptionButtonProps> = () => {
  const [condition, setCondition] = useState<string>('GOOD');
  const [capacity, setCapacity] = useState<string>('128GB');
  const [color, setColor] = useState<string>('SPACE BLACK');

  const conditionOptions = ['GOOD', 'GREAT', 'PRISTINE'];
  const capacityOptions = ['128GB', '256GB', '512GB'];
  const colorOptions: ColorOption[] = [
    { color: '#000000', name: 'Black' },
    { color: '#9F88A7', name: 'Rosewood' },
    { color: '#F8E7B6', name: 'Cream' },
    { color: '#D5D8D8', name: 'Light Gray' },
    { color: '#7C7D7D', name: 'Dark Gray' }
  ];

  const handleConditionChange = (value: string) => {
    setCondition(value);
  };

  const handleCapacityChange = (value: string) => {
    setCapacity(value);
  };

  const handleColorChange = (value: string) => {
    setColor(value);
  };

  return (
    <div>
      <h4 className="mb-2">CONDITION: {condition}</h4>
      <div className="radio-group">
        {conditionOptions.map((option) => (
          <label key={option} className="radio-label">
            <button
              type="button"
              className={`radio-button ${condition === option? 'active' : ''}`}
              onClick={() => handleConditionChange(option)}
            >
              {option}
            </button>
          </label>
        ))}
      </div>

      <h4 className="mb-2">CAPACITY: {capacity}</h4>
      <div className="radio-group">
        {capacityOptions.map((option) => (
          <label key={option} className="radio-label">
            <button
              type="button"
              className={`radio-button ${capacity === option? 'active' : ''}`}
              onClick={() => handleCapacityChange(option)}
            >
              {option}
            </button>
          </label>
        ))}
      </div>

      <h4 className="mb-2">COLOUR: {color}</h4>
      <div className="radio-group">
        {colorOptions.map((option) => (
          <label key={option.color} className="radio-label">
            <button
              type="button"
              className={`radio-button ${color === option.name? 'active' : ''}`}
              onClick={() => handleColorChange(option.name)}
              style={{ borderRadius: '100px', width: 50, paddingLeft: 0, paddingRight: 0 }}
            >
              <div
                style={{
                  background: option.color,
                  height: '28px',
                  width: '28px',
                  borderRadius: '50%',
                  margin: 'auto'
                }}
              />
            </button>
          </label>
        ))}
      </div>
    </div>
  );
};

export default OptionButtons;