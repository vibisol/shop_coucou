import React, { useState } from 'react';
import { Box, ButtonGroup } from '@mui/material';

const SizePicker = ({ size, onSizeSelect }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    onSizeSelect(size);
  };

  return (
    <div>
      <ButtonGroup sx={{ gap: '1rem', paddingTop: '1rem' }}>
        {size.map((size) => (
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
        ))}
      </ButtonGroup>
    </div>
  );
};

export default SizePicker;
