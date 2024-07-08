import React, { useState, useEffect } from 'react';
import { Carousel, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { Box } from '@mui/material';
import AccordionCopm from './AccordionCopm';
import SizePicker from './SizePicker';
import './ProductDetail.css';

function ProductDetails({ product }) {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleImageClick = (index) => {
    setMainImageIndex(index);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Пожалуйста, выберите размер');
      return;
    }

    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex(item => item.id === product.id && item.size === selectedSize);
    if (itemIndex !== -1) {
      updatedCart[itemIndex].quantity += 1;
    } else {
      updatedCart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: selectedSize,
        extraId: product.extraId,
        quantity: 1
      });
    }
    setCart(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleRemoveFromCart = () => {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex(item => item.id === product.id && item.size === selectedSize);
    if (itemIndex !== -1) {
      if (updatedCart[itemIndex].quantity > 1) {
        updatedCart[itemIndex].quantity -= 1;
      } else {
        updatedCart.splice(itemIndex, 1);
      }
    }
    setCart(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <Container className="product-details-container" style={{ paddingBottom: '1rem', paddingTop: '5rem', paddingLeft: '6rem', minHeight: '100vh' }}>
      <Row className='row_custom'>
        <Col md={1} className='corousel_custom'>
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name} ${index + 1}`}
              className="img-thumbnail mb-2"
              onClick={() => handleImageClick(index)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </Col>
        <Col md={5} className="custom-col-5-5 main-carousel">
          <Carousel activeIndex={mainImageIndex} onSelect={handleImageClick} interval={null} indicators={false} fade={false}>
            {product.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  onClick={openModal}
                  style={{ cursor: 'pointer' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col md={5} className="custom-col-5-5" style={{ marginLeft: '4rem', marginTop: '-1.8rem' }}>
          <div variant="h7" className="mt-4">{product.name}</div>
          <div variant="h7" style={{ paddingBottom: '1rem', paddingTop: '1rem' }}>{product.price} ₽</div>
          <Box className='button_product_detail'>
            <Button
            className='button_product'
            variant="primary"
            onClick={handleAddToCart}
            sx={{ color: '#7A2031 !important' }}
          >
            В КОРЗИНУ
          </Button>
          {cart.find(item => item.id === product.id && item.size === selectedSize) && (
            <Button
              variant="danger"
              onClick={handleRemoveFromCart}
              className='button_product1'
              style={{ marginLeft: '1rem', marginBottom:'10px', color: '#7A2031 !important' }}
            >
              УДАЛИТЬ ИЗ КОРЗИНЫ
            </Button>
          )}
          </Box>
          
          
          <Box style={{ marginTop: '1rem' }}>ЦВЕТ: {product.colors}</Box>
          <Box style={{ marginTop: '1rem' }}>ВЫБРАТЬ РАЗМЕР</Box>
          <SizePicker
            size={product.size}
            onSizeSelect={setSelectedSize}
          />
          <AccordionCopm product={product}/>
        </Col>
      </Row>
      <Modal show={showModal} onHide={closeModal} size="lg" centered>
        <Modal.Body>
          <Carousel activeIndex={mainImageIndex} onSelect={handleImageClick} interval={null} indicators={false} fade={false}>
            {product.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 modal-image"
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default ProductDetails;

