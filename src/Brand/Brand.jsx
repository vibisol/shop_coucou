import  React from 'react';
import Box from '@mui/material/Box';
import './Brand.css'

function Brand() {
 

  return (
    <Box className='brand' >
        <Box className='brand_name' > О БРЕНДЕ</Box>
            <Box className='brand_name_img' >
                <img src='/img/brand.png' alt='size' style={{width: '100%'}}/>
            </Box>
            <Box className='brand_info_1_text'> 
            <p style={{display: 'inline', marginBottom:'1rem',  textAlign: 'justify'}}>
                <span className='highlighted-text' style={{ color: '#7A2031' }}>CouCou</span>— бренд женской обуви для влюбленных в себя.
            </p>
                <p>Cлово “CouCou” заимствовано из французского сленга и используется в качестве короткого приветствия при встрече близких друзей. С помощью этого названия мы транслируем нашу открытость к новым трендам и легкость в коммуникации с клиентами. Мы стремимся создать большое коммьюнити девушек, которые будут объединены не только любовью к красивой и качественной обуви, но и страстью к путешествиям и забавным авантюрам. </p>
                <p>Пусть каждая обладательница пары “CouCou” почувствует себя свободно и соблазнительно, как никогда, и при встрече передаст это настроение своей подружке!</p>  
            </Box>
    </Box>
);
}

export default Brand;
