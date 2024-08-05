import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import './AccordionCopm.css'

function AccordionCopm({product}) {
    return (
      <>
        <Accordion
            square={false}
            sx={{
                border: 'none',
                boxShadow: 'none',
                '&:before': { display: 'none' },
                '&.Mui-expanded': {
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
                }
            }}
            disableGutters
        >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                        '&.Mui-expanded': {
                            borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
                        }
                    }}
                >
                    <Typography className='accordion_comp' sx={{ fontFamily: 'Forum, sans-serif' }}>ТАБЛИЦА РАЗМЕРОВ</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='accordion_comp' sx={{ whiteSpace: 'break-spaces', fontFamily: 'Forum, sans-serif' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr>
                                    <th colSpan="6" style={{ textAlign: 'center', border: '1px solid gray' }}>Таблица размеров</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='table_style'>
                                    <td>Длина стопы</td>
                                    <td>22,8 - 23,3</td>
                                    <td>23,4 - 24</td>
                                    <td>24,1 - 24,7</td>
                                    <td>24,8 - 25,3</td>
                                    <td>25,4 - 26</td>
                                </tr>
                                <tr className='table_style'>
                                    <td>Размер</td>
                                    <td>36</td>
                                    <td>37</td>
                                    <td>38</td>
                                    <td>39</td>
                                    <td>40</td>
                                </tr>
                            </tbody>
                        </table>
                    </Typography>
                </AccordionDetails>
        </Accordion>
        <Accordion
            square={false}
            sx={{
                border: 'none',
                boxShadow: 'none',
                '&:before': { display: 'none' },
                '&.Mui-expanded': {
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
                }
            }}
            disableGutters
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                    '&.Mui-expanded': {
                        borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
                    }
                }}
            >
                <Typography className='accordion_comp' sx={{ fontFamily: 'Forum, sans-serif' }}>СОСТАВ И УХОД</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography className='accordion_comp' sx={{ whiteSpace: 'break-spaces', fontFamily: 'Forum, sans-serif' }}>
                   Cостав:
                   <p>Материал верха: {product.descUp}</p>
                   <p>Материал подкладки: {product.descDown}</p>
                   Уход:
                   <p>{product.care}</p>
                </Typography>
            </AccordionDetails>
        </Accordion>
      </>
    );
  }
  
  export default AccordionCopm;