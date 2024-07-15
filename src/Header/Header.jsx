import  React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Badge } from '@mui/material';
import './Header.css'

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const updateTotalQuantity = () => {
    const cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
    const total = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQuantity(total);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('storage', updateTotalQuantity);

    updateTotalQuantity();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('storage', updateTotalQuantity);
    };
  }, []); 

  useEffect(() => {
    const intervalId = setInterval(updateTotalQuantity, 500);
    return () => clearInterval(intervalId);
  }, []);

  const DrawerList = (
    <Box sx={{ width: 250, zIndex: 99 }} role="presentation" onClick={toggleDrawer(false)}>
      <List className='header_list'>
        <ListItemButton component={Link} to="/product" className='headerLink'>
          <ListItemText primary="КАТАЛОГ" classes={{ primary: 'headerLinkText' }} />
        </ListItemButton>
        <ListItemButton component={Link} to="/delivery" className='headerLink'>
          <ListItemText primary="ДОСТАВКА И ОПЛАТА" classes={{ primary: 'headerLinkText' }} />
        </ListItemButton>
        <ListItemButton component={Link} to="/refund" className='headerLink'>
          <ListItemText primary="ОБМЕН И ВОЗВРАТ" classes={{ primary: 'headerLinkText' }} />
        </ListItemButton>
        <ListItemButton component={Link} to="/care" className='headerLink'>
          <ListItemText primary="О ТОВАРЕ" classes={{ primary: 'headerLinkText' }} />
        </ListItemButton>
        <ListItemButton component={Link} to="/contacts" className='headerLink'>
          <ListItemText primary="КОНТАКТЫ" classes={{ primary: 'headerLinkText' }} />
        </ListItemButton>
        <ListItemButton component={Link} to="/brand" className='headerLink'>
          <ListItemText primary="О БРЕНДЕ" classes={{ primary: 'headerLinkText' }} />
        </ListItemButton>
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '4rem',
      padding: '0px 2rem',
      backgroundColor: scrolled ? '#DAA9CF' : 'transparent',
      transition: 'background-color 0.3s ease',
      '&:hover': {
        backgroundColor: '#DAA9CF',
      }
    }}
    className={`header_main ${scrolled ? 'scrolled' : ''}`}
    > 
      <Box sx={{ zIndex: 100001 }}>
        <Button onClick={toggleDrawer(true)}><MenuIcon sx={{ color: 'black' }} /></Button>
        <Drawer open={open} onClose={toggleDrawer(false)} sx={{zIndex: '10001 !important'}}>
          {DrawerList}
        </Drawer>
      </Box>
      
      <Box className='header_logo' >
        <ListItemButton component={Link} to="/"  
          sx={{
            paddingLeft: 0,
            '&:hover': {
              backgroundColor: 'transparent',
            },
            '&.Mui-focusVisible': {
              backgroundColor: 'transparent',
            },
          }}>
          <img src='/img/logo.png' alt='Banner' style={{ width: '100%', height: 'auto', display: 'flex' }} />
        </ListItemButton>
      </Box>

      <Box sx={{ '& .MuiBadge-badge': { top: '10px !important', right: '17px !important', backgroundColor: '#7A2031' } }}>
        <Badge badgeContent={totalQuantity} color="primary">
          <ListItemButton component={Link} to="/basket" sx={{
            justifyContent: 'flex-end',
            width: '20px',
            '&:hover': {
              backgroundColor: 'transparent',
            }
          }}>
            <img src='/img/basket4.png' alt='basket' style={{ width: 'auto', height: 'auto' }} />
          </ListItemButton>
        </Badge>
      </Box>
    </Box>
  );
}

export default Header;

//   return (
// <Box className='header'>
//   <Box className='header_link_all'>
//     <Link className='headerLink' href="#">КАТАЛОГ</Link>
//     <Link className='headerLink' href="#">ДОСТАВКА</Link>
//     <Link className='headerLink' href="#">КОНТАКТЫ</Link>
//   </Box>
//   <Box className='header_logo'>
//     {'LOGO'}
//   </Box>
  // <Box className='header_basket' sx={{color:'white'}}>
  //   <ShoppingBasketIcon />
  // </Box>
// </Box>
       
//   );