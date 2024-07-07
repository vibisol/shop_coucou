import React, { useState, useEffect } from 'react';
import { useNavigate, } from 'react-router-dom';
import { Container, Row, Col, Button} from 'react-bootstrap';
import './basket.css';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';

function Basket() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const handleQuantityChange = (id, size, delta) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id && item.size === size) {
        return { ...item, quantity: item.quantity + delta };
      }
      return item;
    }).filter(item => item.quantity > 0);
    setCartItems(updatedCartItems);
    sessionStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const handleRemoveItem = (id, size) => {
    const updatedCartItems = cartItems.filter(item => !(item.id === id && item.size === size));
    setCartItems(updatedCartItems);
    sessionStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation');
  };

  return (
    <Container className="basket-list" style={{ minHeight: '100vh' }}>
      {cartItems.length === 0 ? (
        <Box sx={{ textAlign: 'center'  }}>
          <h3>ТОВАРОВ НЕТ</h3>
          <Button variant="dark" className='button_product' as={Link} to="/product">ВВЕРНУТЬСЯ К ВЫБОРУ ТОВАРОВ</Button>
        </Box>
      ) : (
        <><h2 style={{color:'#7A2031'}}>КОРЗИНА</h2>
        <Box sx={{ display: 'flex', marginBottom: '5rem' }} className='basket_product_main'>
            <Box  className='basket_product'>
              {cartItems.map(item => (
                <Row key={`${item.id}-${item.size}`} className="basket-item">
                  <Col md={4}>
                    <img src={item.image} alt={item.name} className="basket-item-image" />
                  </Col>
                  <Col md={2}>
                    <h5>{item.name} (размер: {item.size})</h5>
                  </Col>
                  <Col md={2}>
                    <div className="quantity-control">
                      <Button variant="text" onClick={() => handleQuantityChange(item.id, item.size, -1)}>-</Button>
                      <span>{item.quantity}</span>
                      <Button variant="text" onClick={() => handleQuantityChange(item.id, item.size, 1)}>+</Button>
                    </div>
                  </Col>
                  <Col md={2} className='basket_price'>
                      <span>{item.price.toLocaleString()} ₽</span>
                  </Col>
                  <Col md={1} className='basket_price'>
                      <Button variant="text" onClick={() => handleRemoveItem(item.id, item.size)}><ClearIcon fontSize='small'/></Button>
                  </Col>         
                </Row>
              ))}
            </Box>

            <Row className="mt-3">
              <Col md={12}>
                <div className="total">
                  <span>ИТОГО:</span>
                  <span>{total.toLocaleString()} ₽</span>
                </div>
                <Button variant="dark" className="w-100" onClick={handleSubmit}>ОФОРМИТЬ ЗАКАЗ</Button>
              </Col>
            </Row>
          </Box></>
      )}
    </Container>
  );
}

export default Basket;



// const initialCartItems = [
//   {
//     id: 1,
//     name: "ТУФЛИ",
//     price: 12500,
//     quantity: 1,
//     image: 'https://via.placeholder.com/150'
//   }
// ];

// function Basket() {
//   const [cartItems, setCartItems] = useState(initialCartItems);

//   const handleQuantityChange = (id, delta) => {
//     const updatedCartItems = cartItems.map(item => {
//       if (item.id === id) {
//         return { ...item, quantity: item.quantity + delta };
//       }
//       return item;
//     }).filter(item => item.quantity > 0);
//     setCartItems(updatedCartItems);
//   };

//   const handleRemoveItem = (id) => {
//     const updatedCartItems = cartItems.filter(item => item.id !== id);
//     setCartItems(updatedCartItems);
//   };

//   const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <Container className="basket-list" style={{minHeight: '100vh'}}>
//       <h2>КОРЗИНА</h2>
//       <Box sx={{display: 'flex' , marginBottom: '5rem'}} >
//         {cartItems.map(item => (
//         <Row key={item.id} className="basket-item">
//           <Col md={4}>
//             <img src={item.image} alt={item.name} className="basket-item-image" />
//           </Col>
//           <Col md={2}>
//             <h5>{item.name}</h5>
//           </Col>
//           <Col md={2}>
//             <div className="quantity-control">
//               <Button variant="text" onClick={() => handleQuantityChange(item.id, -1)}>-</Button>
//               <span>{item.quantity}</span>
//               <Button variant="text" onClick={() => handleQuantityChange(item.id, 1)}>+</Button>
//             </div>
//           </Col>
//           <Col md={2}>
//             <span>{item.price.toLocaleString()} ₽</span>
//           </Col>
//           <Col md={1}>
//             <Button variant="text" onClick={() => handleRemoveItem(item.id)}>×</Button>
//           </Col>
//         </Row>
//       ))}
//       <Row className="mt-3">
//         <Col  md={12}>
//           <div className="total">
//             <h5>ИТОГО:</h5>
//             <h3>{total.toLocaleString()} ₽</h3>
//           </div>
//           <Button variant="dark" className="w-100">ОФОРМИТЬ ЗАКАЗ</Button>
//         </Col>
//       </Row>
//       </Box>
      
//     </Container>
//   );
// }

// export default Basket;