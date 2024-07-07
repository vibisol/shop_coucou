
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import  React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import './Refund.css'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';

function Refund() {
 

  return (
    <Box className='refund' >
        <Box className='refund_name' > ОБМЕН И ВОЗВРАТ</Box>
            <Box> 
                Мы надеемся, что вы остались довольны покупкой в CouCou, однако, если товар вам не подошел по разным причинам, Вы можете его вернуть или осуществить обмен в течение 14 календарных дней с момента получения заказа.
            </Box>
            <Box className='refund_info'>
                <Box className='refund_info_1'> 
                    <Box className='refund_info_1_name'>
                        КАКОЙ ТОВАР МОЖНО ОБМЕНЯТЬ ИЛИ ВЕРНУТЬ
                    </Box>
                    <Box className='refund_info_1_text'>
                    Товар должен:
                    <p>- cохранить свои потребительские свойства и иметь безупречный товарный вид.</p>
                    <p>- не иметь следов эксплуатации, носки (подошва не имеет царапин и пятен, верхняя часть обуви не имеет заломов, царапин и складок).</p>
                    <p>- упаковка (в т. ч. производственная слюда) и фабричная фурнитура должны быть сохранены и не повреждены.</p>
                    </Box>
                </Box>
                <Box className='refund_info_2'> 
                    <Box className='refund_info_2_name'>
                        УСЛОВИЯ ОБМЕНА
                    </Box>
                    <Box className='refund_info_2_text'>
                    Для оформления обмена необходимо сначала оформить возврат, а затем оформить новый заказ.

                    </Box>
                </Box>
                <Box className='refund_info_3'> 
                    <Box className='refund_info_3_name'>
                        УСЛОВИЯ ВОЗВРАТА
                    </Box>
                    <Box className='refund_info_3_text'>
                    <p>
                    - возврат осуществляется за счет покупателя (оплата при отправки изделия в пункте CDEK).
                    </p>
                    <p>- возврат денежных средств осуществляется только за товар, без учета транспортных расходов.</p>
                    <p>- возврат наличных средств при оплате товара курьеру в г. СПб осуществляется через возврат на карту (менеджер с Вами свяжется, чтобы узнать реквизиты).</p>
                    </Box>
                </Box>
                <Box className='refund_info_4'> 
                    <Box className='refund_info_4_name'>
                        ПОРЯДОК ВОЗВРАТА
                    </Box>
                    <Box className='refund_info_4_text'>
                    <p>- свяжитесь с менеджером в Telegram (кликабельная ссылка) или WhatsApp (кликабельная ссылка).</p>
                    <p>- менеджер создаст трек-номер в CDEK, по которому Вы сможете отправить изделие обратно.</p>
                    <p>- аккуратно упакуйте неподошедший товар.</p>
                    <p>- обратитесь с данным трек-номером в любой пункт CDEK. При себе необходимо иметь документ, удостоверяющий личность.</p>
                    <p>- денежные средства будут возвращены на карту, с которой был оплачен заказ, или на реквизиты, которые вы укажете менеджеру, если ваша карта была заблокирована/утеряна.</p>
                    </Box>
                </Box>
                <Box className='refund_info_5'> 
                    <Box className='refund_info_5_name'>
                        СРОКИ ВОЗВРАТА
                    </Box>
                    <Box className='refund_info_5_text'>
                    <p>- денежные средства будут перечислены в течение 10 дней с момента получения возврата на нашем складе.</p> 
                    <p>- срок поступления денежных средств на Ваш счет зависит от скорости обработки операций Вашим банком и может достигать 30 банковских дней.</p>
                    </Box>
                </Box>
            </Box>
    </Box>
);
}

export default Refund;
