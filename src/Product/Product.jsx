import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Carousel } from 'react-bootstrap';
import { Box } from '@mui/material';
import ProductDetails from './ProductDetail';
import { useNavigate, useParams } from 'react-router-dom';
import './Product.css';
import zIndex from '@mui/material/styles/zIndex';

const products = [
  { id: 1, extraId: 1, care: 'Чистить щеточкой для замши и наносить водоотталкивающий спрей', descUp: 'Ворс пони', descDown: 'Натуральная кожа', colors: 'ЧЕРНЫЙ', name: 'Туфли Bordel', size: ['36', '37', '38', '39', '40'], color: ['#710101', '#101820'], price: 9400, images: ['https://a.lmcdn.ru/img600x866/R/T/RTLADF428401_23835723_1_v2_2x.jpg', 'https://a.lmcdn.ru/img600x866/R/T/RTLADF428401_23835724_2_v1_2x.jpg', 'https://a.lmcdn.ru/img600x866/R/T/RTLADF428401_23835725_3_v1_2x.jpg'] },
  { id: 2, extraId: 1, care: 'Протирать сухой или влажной салфеткой',  descUp: 'Наплак (лакированная мягкая кожа наппа)', descDown: 'Натуральная кожа', colors: 'ЧЕРНЫЙ', name: 'Туфли Bordel', size: ['36', '37', '38', '39', '40'], color: ['#101820', '#710101'], price: 8900, images: ['https://via.placeholder.com/400x300?text=2-1', 'https://via.placeholder.com/400x300?text=2-2', 'https://via.placeholder.com/400x300?text=2-3'] },
  { id: 3, extraId: 1, care: 'Протирать сухой или влажной салфеткой',  descUp: 'Натуральная кожа с лаковым покрытием ', descDown: 'Натуральная кожа', colors: 'ЧЕРНЫЙ', name: 'Туфли Bordel', size: ['36', '37', '38', '39', '40'], color: ['#710101', '#101820'], price: 8900, images: ['https://via.placeholder.com/400x300?text=3-1', 'https://via.placeholder.com/400x300?text=3-2', 'https://via.placeholder.com/400x300?text=3-3'] },
  { id: 4, extraId: 2, care: 'Протирать сухой или влажной салфеткой',  descUp: 'Натуральная кожа с лаковым покрытием', descDown: 'Натуральная кожа', colors: 'ЧЕРНЫЙ', name: 'Балетки Bobo', size: ['36', '37', '38', '39', '40'], color: ['#BD162C', '#101820'], price: 7900, images: ['/img/bobo_black_1.jpg', '/img/bobo_black_2.jpg', '/img/bobo_black_3.jpg'] },
  { id: 5, extraId: 2, care: 'Протирать сухой или влажной салфеткой',  descUp: 'Натуральная кожа с лаковым покрытием', descDown: 'Натуральная кожа', colors: 'КРАСНЫЙ', name: 'Балетки Bobo', size: ['36', '37', '38', '39', '40'], color: ['#101820', '#BD162C'], price: 7900, images: ['/img/bobo_red_1.jpg', '/img/bobo_red_2.jpg', '/img/bobo_red_3.jpg'] },
];

function Product() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const product = products.find(p => p.id === parseInt(id.split('_')[0], 10));
      setSelectedProduct(product);
    } else {
      setSelectedProduct(null);
    }
  }, [id]);

  const handleProductSelect = (product) => {
    navigate(`/product/${product.id}_${product.extraId}`);
  };

  return (
    <Container className='product-list' style={{ marginTop: '4rem' }}>
      <Box sx={{fontSize:'2rem', color:'#7A2031'}}>
        {selectedProduct ? selectedProduct.name : 'КАТАЛОГ'}
      </Box>
      {selectedProduct ? (
        <ProductDetails
          product={selectedProduct}
          onBack={() => navigate('/product')}
          relatedProducts={products.filter(p => p.extraId === selectedProduct.extraId)}
        />
      ) : (
        <Row style={{position: 'relative', zIndex: 1}}>
          {products.map((product) => (
            <Col key={product.id} md={4}>
              <Box
                sx={{
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateZ(20px)',
                    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)'
                    
                  },
                }}
                onClick={() => handleProductSelect(product)}
              >
                <Card className="mb-4" style={{zIndex: 1, position: 'relative'}}>
                  <Carousel interval={null} onClick={(e) => e.stopPropagation()}>
                    {product.images.map((image, index) => (
                      <Carousel.Item key={index}>
                        <img
                          className="d-block w-100"
                          src={image}
                          alt={`${product.name} ${index + 1}`}
                          style={{height:'450px', width:'300px'}}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.price} ₽</Card.Text>
                  </Card.Body>
                </Card>
              </Box>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Product;
