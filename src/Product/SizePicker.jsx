import React, { useState } from 'react';
import { Box, ButtonGroup } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

const SizePicker = ({ size, onSizeSelect, productName }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    onSizeSelect(size);
  };
  console.log(size)
  return (
    <div>
      <ButtonGroup sx={{ gap: '1rem', paddingTop: '1rem' }}>
        {size.map((size) => (
          productName === "Балетки Bobo" && size == 38 ? (
            <Tooltip title="Нет в наличии" key={size}>
              <Box
                sx={{
                  border: '1px solid grey',
                  borderRadius: '50%',
                  width: '2rem',
                  height: '2rem',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  cursor: 'not-allowed',
                  color: 'grey',
                }}
              >
                {`${size}`}
              </Box>
            </Tooltip>
          ) : (
            <Box
              key={size}
              sx={{
                border: selectedSize === size ? '1px solid #DAA9CF' : '1px solid grey',
                borderRadius: '50%',
                width: '2rem',
                height: '2rem',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onClick={() => handleSizeSelect(size)}
            >
              {`${size}`}
            </Box>
          )
        ))}
      </ButtonGroup>
    </div>
  );
};

export default SizePicker;
