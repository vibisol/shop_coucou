import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import './Delivery.css'

function Delivery() {
 
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
  return (
    <Box className='delivery' >
        <Box className='delivery_name' > ДОСТАВКА И ОПЛАТА</Box>
            <Box className='delivery_info'>
                <Box className='delivery_info_1'> 
                    <Box className='delivery_info_1_name'>
                        ДОСТАВКА ПО г. САНК-ПЕТЕРБУРГ
                    </Box>
                    <Box className='delivery_info_1_text'>
                            <p>Доставка по г. Санкт-Петербург осуществляется курьером или через транспортную компанию СDEK.</p>

                            <p>Доставка курьером с примеркой:</p>
                            <p>- цена доставки фиксированная — 500 руб.</p>
                            <p>- время на примерку заказа — 15 минут</p>
                            <p>- максимальный размер заказа – 2 позиции</p>
                            <p>- при отказе от получения заказа, необходимо оплатить стоимость доставки</p>
                            <p>- бесплатная доставка курьером при покупке 2 пар обуви</p>
                            <p>- оплата по QR-коду или наличными средствами </p>

                            <p>Транспортная компания СDEK:</p>
                            <p>- Доставка до пункта выдачи CDEK </p>
                            <p>- Срок и стоимость доставки рассчитываются автоматически на этапе оформления заказа и зависят от пункта назначения</p>

                    </Box>
                </Box>
                <Box className='delivery_info_2'> 
                    <Box className='delivery_info_2_name'>
                        ДОСТАВКА ПО РОССИИ
                    </Box>
                    <Box className='delivery_info_2_text'>
                    <p>Доставка по России осуществляется через транспортную компанию СDEK:</p>
                    <p>- Доставка до пункта выдачи CDEK</p>
                    <p>- Курьерская доставка CDEK</p>
                    <p>- Срок и стоимость доставки рассчитываются автоматически на этапе оформления заказа и зависят от пункта назначения и способа получения товара.</p>

                    </Box>
                </Box>
                <Box className='delivery_info_3'> 
                    <Box className='delivery_info_3_name'>
                        ОПЛАТА
                    </Box>
                    <Box className='delivery_info_3_text'>
                    Заказы отправляются по 100% предоплате. Оплату возможно осуществить онлайн с карты любого банка, выпущенной в РФ.
                    По оформлению заказа в другие страны обращайтесь к нам любым удобным для вас способом!
                    </Box>
                </Box>
            </Box>
    </Box>
);
}

export default Delivery;
