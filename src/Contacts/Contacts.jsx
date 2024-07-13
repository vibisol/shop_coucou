import  React from 'react';
import { Box, IconButton } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Contacts.css'

function Contacts() {
 

    return (
      <Box className='contacts' >
          <Box className='contacts_name' > КОНТАКТЫ </Box>
              <Box className='contacts_info'>
                  <Box className='contacts_info_1'> 
                      <Box className='contacts_info_1_name'>
                          EMAIL
                      </Box>
                      <Box className='contacts_info_1_text'>
                        <a href="mailto:info_coucou@mail.ru" style={{ textDecoration: 'none', color: 'inherit' }}>
                            info_coucou@mail.ru
                        </a>    
                      </Box>
                  </Box>
                  <Box className='contacts_info_2'> 
                      <Box className='contacts_info_2_name'>
                         МЕССЕНДЖЕРЫ
                      </Box>
                      <Box sx={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                      <IconButton
                        component="a"
                        href="https://t.me/CouCou_spb"
                        target="_blank"
                        aria-label="Telegram"
                        sx={{ color: 'black' }}
                        >
                        <TelegramIcon />
                    </IconButton>
                        <Box className='contacts_info_2_1_text'>
                            <a style={{color: 'initial', textDecoration: 'none'}} href="https://t.me/CouCou_spb">Telegram</a>
                        </Box>
                      </Box>
                     <Box sx={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                        <IconButton
                            component="a"
                            href="https://wa.me/79112869339"
                            target="_blank"
                            aria-label="WhatsApp"
                            sx={{ color: 'black' }}
                            >
                            <WhatsAppIcon />
                        </IconButton>
                        <Box className='contacts_info_2_1_text'>
                            <a style={{color: 'initial', textDecoration: 'none'}} href="https://wa.me/79112869339">WhatsApp</a>
                        </Box>
                     </Box>
                     
                  </Box>
                  <Box className='contacts_info_3'> 
                      <Box className='contacts_info_3_name'>
                          СОЦИАЛЬНЫЕ СЕТИ
                      </Box>
                      <Box sx={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                      <IconButton
                            component="a"
                            href="https://www.instagram.com/coucou.spb?igsh=MW5tenlzdGpobWZpdA=="
                            target="_blank"
                            aria-label="Instagram"
                            sx={{ color: 'black' }}
                        >
                            <InstagramIcon />
                        </IconButton>
                        <Box className='contacts_info_2_1_text'>
                            <a style={{color: 'initial', textDecoration: 'none'}} href="https://www.instagram.com/coucou.spb?igsh=MW5tenlzdGpobWZpdA==">Instagram</a>
                        </Box>
                      </Box>
                     <Box sx={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                        <IconButton
                            component="a"
                            href="https://t.me/coucouspb"
                            target="_blank"
                            aria-label="Telegram"
                            sx={{ color: 'black' }}
                        >
                            <TelegramIcon />
                        </IconButton>
                        <Box className='contacts_info_2_1_text'>
                        <a style={{color: 'initial', textDecoration: 'none'}} href="https://t.me/coucouspb">Telegram</a>
                        </Box>
                     </Box>
                  </Box>
                  <Box className='contacts_info_4'> 
                      <Box className='contacts_info_4_name'>
                          СОТРУДНИЧЕСТВО
                      </Box>
                      <Box className='contacts_info_4_text'>
                        <a href="mailto:info_coucou@mail.ru" style={{ textDecoration: 'none', color: 'inherit' }}>
                            info_coucou@mail.ru
                        </a>
                      </Box>
                    </Box>
                  <Box className='contacts_info_5'> 
                      <Box className='contacts_info_5_name'>
                          РЕКВИЗИТЫ
                      </Box>
                      <Box className='contacts_info_5_text'>
                      <p>ИП ВОЙТЮК НВ</p> 
                      <p>ИНН 390704910690</p>
                      <p>ОГРНИП 324390000012976</p>
                      </Box>
                  </Box>
              </Box>
            
      </Box>
  );
  }
  
  export default Contacts;
