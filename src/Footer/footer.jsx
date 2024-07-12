import React, { useState } from 'react';
import { Box, IconButton, useMediaQuery } from '@mui/material';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import Pollicy from '../Policy/Policy';
import Offer from '../Offer/Offer';
import CloseIcon from '@mui/icons-material/Close';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Divider from '@mui/material/Divider';
import  './footer.css';

function Footer() {
  const [open, setOpen] = useState(false);
  const [openOffer, setOpenOffer] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenOffer = () => {
    setOpenOffer(true);
  };

  const handleCloseOffer = () => {
    setOpenOffer(false);
  };

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <>
      <Box className='footer'>
        <Box className='footer_info_1'>
          <Box sx={{ paddingBottom: '30px', fontWeight: '900' }}>
            ПОКУПАТЕЛЯМ
          </Box>
          <Box className='footer_info_4'>

          <Link className='footer_link' to="/product" style={{ textDecoration: 'none', color: 'inherit' }}>
            КАТАЛОГ
          </Link>
 
          <Link className='footer_link' to="/delivery" style={{ textDecoration: 'none', color: 'inherit' }}>
            ДОСТАВКА И ОПЛАТА
          </Link>
          <Link  className='footer_link' to="/refund" style={{ textDecoration: 'none', color: 'inherit' }}>
            ОБМЕН И ВОЗВРАТ
          </Link>
          <Link className='footer_link' to="/care" style={{ textDecoration: 'none', color: 'inherit' }}>
            О ТОВАРЕ
          </Link>
          </Box>
        </Box>

        {isMobile && <Divider  sx={{ borderColor: 'black', borderWidth: '1px' , width:'100%'}} />}
        <Box className='footer_info_2'>
          <Box className='footer_info_2_1' sx={{ paddingBottom: '65px', fontWeight: '900'  }}>
            О КОМПАНИИ
          </Box>
          <Box className='footer_info_2-2'>
            <Link to="/brand" style={{ textDecoration: 'none', color: 'inherit' }}>
             О БРЕНДЕ
            </Link>
            <div onClick={handleOpenOffer} style={{ cursor: 'pointer', paddingTop:'10px' }}> ПУБЛИЧНАЯ ОФЕРТА</div>
            <div onClick={handleOpen} style={{ cursor: 'pointer', paddingTop:'10px' }}> ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</div>
          </Box>
        </Box>
        {isMobile && <Divider  sx={{ borderColor: 'black', borderWidth: '1px' , width:'100%'}} />}
        <Box className='footer_info_3'>
          <Box className='footer_info_3_1' sx={{ paddingBottom: '30px', fontWeight: '900'  }}>
            КОНТАКТЫ
          </Box>
          <div>
            <a href="mailto:info_coucou@mail.ru" style={{ textDecoration: 'none', color: 'inherit' }}>
              info_coucou@mail.ru
            </a>
          </div>
          <Box sx={{ paddingBottom: '10px' }}>
            <Box className='footer_contact'>
                <IconButton
                  component="a"
                  href="https://t.me/CouCou_spb"
                  target="_blank"
                  aria-label="Telegram"
                  sx={{ color: 'black' }}
                >
                  <TelegramIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://wa.me/79112869339"
                  target="_blank"
                  aria-label="WhatsApp"
                  sx={{ color: 'black' }}
                >
                  <WhatsAppIcon />
                </IconButton>
            </Box>
          </Box>
          <Box sx={{ paddingBottom: '30px' }}>
           СОЦИАЛЬНЫЕ СЕТИ 
          </Box>
          <Box sx={{ paddingBottom: '10px' }}>
            <Box className='footer_contact'>
              <IconButton
                component="a"
                href="https://t.me/coucouspb"
                target="_blank"
                aria-label="Telegram"
                sx={{ color: 'black' }}
              >
                <TelegramIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com/coucou.spb?igsh=MW5tenlzdGpobWZpdA=="
                target="_blank"
                aria-label="Instagram"
                sx={{ color: 'black' }}
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className='name'>
        © 2024 COUCOU
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box sx={{
          width: '80%',
          maxHeight: '80%',
          backgroundColor: 'white',
          padding: 2,
          borderRadius: 1,
          overflowY: 'auto',
          position: 'relative'
        }}>
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
          <Pollicy />
        </Box>
      </Modal>
      <Modal
        open={openOffer}
        onClose={handleCloseOffer}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box sx={{
          width: '80%',
          maxHeight: '80%',
          backgroundColor: 'white',
          padding: 2,
          borderRadius: 1,
          overflowY: 'auto',
          position: 'relative'
        }}>
          <IconButton
            onClick={handleCloseOffer}
            sx={{ position: 'absolute', top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
          <Offer />
        </Box>
      </Modal>
    </>
  );
}

export default Footer;
