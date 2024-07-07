import  React from 'react';
import Box from '@mui/material/Box';
import './Delivery.css'

function Delivery() {
 

  return (
    <Box className='delivery' >
        <Box className='delivery_name' > ДОСТАВКА И ОПЛАТА</Box>
            <Box className='delivery_info'>
                <Box className='delivery_info_1'> 
                    <Box className='delivery_info_1_name'>
                        ДОСТАВКА ПО г. САНК-ПЕТЕРБУРГ
                    </Box>
                    <Box className='delivery_info_1_text'>
                            Доставка по г. Санкт-Петербург осуществляется курьером или через транспортную компанию СDEK.

                            <p></p>Доставка курьером с примеркой:
                            <p>- цена доставки фиксированная — 500 руб.</p>
                            время на примерку заказа — 15 минут
                            максимальный размер заказа – 2 позиции
                            при отказе от получения заказа, необходимо оплатить стоимость доставки
                            бесплатная доставка курьером при покупке 2 пар обуви
                            оплата по QR-коду или наличными средствами 

                            Транспортная компания СDEK:
                            Доставка до пункта выдачи CDEK
                            Срок и стоимость доставки рассчитываются автоматически на этапе оформления заказа и зависят от пункта назначения

                    </Box>
                </Box>
                <Box className='delivery_info_2'> 
                    <Box className='delivery_info_2_name'>
                        ДОСТАВКА ПО РОССИИ
                    </Box>
                    <Box className='delivery_info_2_text'>
                    Доставка по России осуществляется через транспортную компанию СDEK:
                    Доставка до пункта выдачи CDEK
                    Курьерская доставка CDEK
                    Срок и стоимость доставки рассчитываются автоматически на этапе оформления заказа и зависят от пункта назначения и способа получения товара.

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
