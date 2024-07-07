import React, { useState } from 'react';
import { Box, ButtonGroup } from '@mui/material';
import specialColorImage from './Style/model2_1.png';

const ColorPicker = ({ colors, onColorSelect, productId, navigate, relatedProducts }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelect = (color, index) => {
    setSelectedColor(color);
    onColorSelect(color);

    // Переход на карточку товара с соответствующим цветом
    const relatedProduct = relatedProducts[index];
    if (relatedProduct) {
      navigate(`/product/${relatedProduct.id}_${relatedProduct.extraId}`);
    }
  };

  const handleSpecialColorSelect = () => {
    setSelectedColor('special');
    onColorSelect('special');
    navigate(`/product/3_1`);
  };


  return (
    <div>
      <ButtonGroup sx={{ gap: '1rem' }}>
        {colors.map((color, index) => (
          <Box
            key={color}
            sx={{
              border: selectedColor === color ? '1px solid #DAA9CF' : '1px solid grey',
              padding: selectedColor === color ? '2px' : '0',
              borderRadius: '50%',
              display: 'inline-block',
              width: '2rem',
              height: '2rem',
            }}
            onClick={() => handleColorSelect(color, index)}
          >
            <Box
              sx={{
                backgroundColor: color,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
              }}
            />
          </Box>
        ))}
        {productId !== 4 && productId !== 5 && (
          <Box
            sx={{
              border: selectedColor === 'special' ? '1px solid #DAA9CF' : '1px solid grey',
              padding: selectedColor === 'special' ? '2px' : '0',
              borderRadius: '50%',
              display: 'inline-block',
              width: '2rem',
              height: '2rem',
            }}
            onClick={handleSpecialColorSelect}
          >
            <Box
              sx={{
                backgroundImage: `url(${specialColorImage})`,
                backgroundSize: 'cover',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
              }}
            />
          </Box>
        )}
      </ButtonGroup>
    </div>
  );
};

export default ColorPicker;
