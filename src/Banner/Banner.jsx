import { Box } from '@mui/material';
import { Button, Card, Row, Col, Carousel } from 'react-bootstrap';
import ListItemButton from '@mui/material/ListItemButton';
import { Link } from '@mui/material';
import './Banner.css';
const products = [
  { id: 1, 
    extraId: 1, 
    name: 'PRODUCT 1', 
    size: ['36', '37', '38', '39', '40'], 
    color: ['#710101', '#101820'], 
    price: 100, 
    images: [
    'https://via.placeholder.com/400x300?text=1-1', 
    'https://via.placeholder.com/400x300?text=2-1', 
    'https://via.placeholder.com/400x300?text=3-1', 
    '/img/bobo_black_1.jpg', 
    '/img/bobo_red_1.jpg'
  ] },

];

function Banner() {
  return (
    <Box className='banner'>
      <video className='banner-video'       
       autoPlay
        loop
        muted
        playsInline>
        <source src='/img/videoforthewomen.mp4' type='video/mp4' />
      </video>

      <Box className='banner_model_text'> НАШИ МОДЕЛИ </Box>

      <Row className='corusel_main_p'>
          {products.map((product) => (
            <Col key={product.id} md={4} className='corusel_m'>
              <Box
                sx={{
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateZ(20px)',
                    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >
                <Card className="mb-4 " >
                  <Carousel interval={null} onClick={(e) => e.stopPropagation()}>
                    {product.images.map((image, index) => (
                      <Carousel.Item key={index} className='cor_item'>
                        <img
                          className="d-block w-100"
                          src={image}
                          alt={`${product.name} ${index + 1}`}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </Card>
              </Box>
            </Col>
          ))}
        </Row>

        <Box sx={{ display:'flex'}}>
          <ListItemButton component={Link} to="/product" sx={{
            justifyContent: 'center',
            '&:hover': {
              backgroundColor: 'transparent',
            },
            '&.Mui-focusVisible': {
              backgroundColor: 'transparent',
            },
          }}>
            <Button  variant="dark" className='button_product' to="/product">ПЕРЕЙТИ К КАТАЛОГУ</Button>
          </ListItemButton>
        </Box>
        
    </Box>

    
  );
}

export default Banner;

// function Banner() {
//     return (
//       <>
//       <Box className='banner'>
//             <img src='/img/banner.webp' alt='Banner' style={{ width: '100%', height: 'auto' }} />
//         </Box>
//         <Box sx={{position:'absolute', top:'30%', right: '5%', display:'flex', width:'16rem', zIndex:'2'}}>
//          Lorem ipsum dolor sit amet 
//          consectetur adipisicing elit. Ab dolorem cum ipsam odio 
//          aliquid fugiat? Laudantium maxime ratione, a 
//          velit quos cumque, laborum nihil voluptatibus 
//          itaque necessitatibus quod excepturi odio.
//           </Box>
//   {/*         
//       <Box
//         sx={{
//           backgroundImage: 'url(/img/banner.webp)',
//           backgroundSize: 'cover',
//           width: '100%',
//           height: '60rem'
//         }}
//       >
//         {/* Вы можете добавить сюда любой другой контент, если нужно */}
//       {/* </Box>  */}
//           </>
//     );
//   }
  
//   export default Banner;