import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Pollicy from '../Policy/Policy';
import Offer from '../Offer/Offer';
import CloseIcon from '@mui/icons-material/Close';
import { Container, Box, TextField, Button, RadioGroup, FormControlLabel, Radio, FormControl, Typography, IconButton} from '@mui/material';
import './OrderForm.css'
import {
  YMap,
  YMapComponentsProvider,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapListener,
  YMapControls,
  YMapGeolocationControl,
  YMapZoomControl,
  YMapDefaultMarker,
} from "ymap3-components";

const CssTextField = styled(TextField)({
  fontFamily: 'Forum, sans-serif',
  '& .MuiInput-underline:before': {
    borderBottomColor: '#7A2031',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#7A2031',
  },
  '& .Mui-focused': {
    color: '#7A2031',
  },
  '& .MuiInputLabel-root': {
    fontFamily: 'Forum, sans-serif',
  },
  '& .MuiInputBase-input': {
    fontFamily: 'Forum, sans-serif',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#7A2031',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#7A2031',
    },
    '&:hover fieldset': {
      borderColor: '#7A2031',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#7A2031',
    },
  },
});

const CssFormControlLabel = styled(FormControlLabel)({
  '& .MuiTypography-root': {
    fontFamily: 'Forum, sans-serif',
  }
});

const apiKey = 'c52c54ff-316b-40af-a8a2-9b055fe81e4';
const LOCATION = { center: [75.9342802, 37.3350986], zoom: 10 }; 

function OrderForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    city: 'Санкт-Петербург',
    delivery: 'courier',
    street: '',
    apartment: '',
    payment: 'card',
    agree: false,
  });
  const [cartItems, setCartItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [openOffer, setOpenOffer] = useState(false);
  const widget = useRef();
  const ymap3Ref = useRef();
  const [location, setLocation] = useState(LOCATION);
  const [selectedCdekData, setSelectedCdekData] = useState(null);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenOffer = () => setOpenOffer(true);
  const handleCloseOffer = () => setOpenOffer(false);

  useEffect(() => {
    const storedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    if (formData.delivery === 'cdek') {
      initializeCdekWidget();
    }
  }, [formData.delivery]);
        const initializeCdekWidget = () => {
          if (document.getElementById('cdek-map')) {
            widget.current = new window.CDEKWidget({
              from: {
                country_code: 'RU',
                city: 'Санкт-Петербург',
                postal_code: 197022,
                code: 1087,
                address: 'пр-т Аптекарский, 8, лит.А, пом. 1Н',
              },
              root: 'cdek-map',
              apiKey: 'c52c54ff-316b-40af-a8a2-9b055fe81e4c',
              canChoose: true,
              servicePath: 'http://localhost:8000/service.php', 
              hideFilters: {
                have_cashless: true,
                have_cash: true,
                is_dressing_room: true,
                type: false,
              },
              hideDeliveryOptions: {
                office: false,
                door: false,
              },
              debug: false,
              goods: [
                {
                  width: 10,
                  height: 10,
                  length: 10,
                  weight: 10,
                },
              ],
              defaultLocation: [30.9342802, 59.3350986],
              lang: 'rus',
              currency: 'RUB',
              tariffs: {
                // office: [234, 136, 138],
                // door: [233, 137, 139],
              },
              onReady() {
                
              },
              onCalculate() {
                
              },
              onChoose: function (_type, tariff, address) {
                // Сохраняем данные в состоянии
                setSelectedCdekData({ _type, tariff, address });
                this.close(); // Закрываем виджет, если используете popup
              },
            });
          }
        };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryCost = 500;
  const delivery = formData.delivery === 'cdek' ? selectedCdekData?.tariff?.delivery_sum || 0 : deliveryCost;

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const storedCart = JSON.parse(sessionStorage.getItem('cart')) || [];

    const customerAddress = formData.delivery === 'cdek' && selectedCdekData
    ? `${selectedCdekData.address.formatted 
        ? `${selectedCdekData.address.formatted}, ${selectedCdekData.address.postal_code}` 
        : `${selectedCdekData.address.name}, ${selectedCdekData.address.address}, ${selectedCdekData.address.postal_code}`},
      Стоимость доставки: ${selectedCdekData.tariff.delivery_sum} ₽,
      Тариф: ${selectedCdekData.tariff.tariff_name},
      Срок доставки: до ${selectedCdekData.tariff.period_max} дней`
    : `${formData.city}, ${formData.street}, ${formData.apartment}`;

    const orderData = {
      customer_email: formData.email,
      customer_full_name: `${formData.name} ${formData.surname}`,
      customer_phone: formData.phone,
      customer_address: customerAddress,
      items: storedCart.map((item) => ({
        product_name: item.name,
        product_description: item.name,
        product_quantity: item.quantity,
        product_price: item.price,
        product_colour: item.color,
        product_size: item.size,
      })),
      customer_price: (total + delivery).toLocaleString(),
    };
  
    try {
      const orderResponse = await fetch('https://coucou-spb.com/api/create_order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      });
  
      if (!orderResponse.ok) {
        throw new Error('Ошибка при создании заказа');
      }
  
      const responseData = await orderResponse.json();
      console.log('Ответ сервера:', responseData);
  
      if (responseData.success && responseData.redirect_url) {
        sessionStorage.removeItem('cart');
        setSelectedCdekData(null);
        window.location.replace(responseData.redirect_url);
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };
  


  
  return (
    <>
      <Container className='order_form_main'>
        <form onSubmit={handleSubmit}>
          <Box display="flex" justifyContent="space-between" className='order_form_box_main'>
            <Box width="100%" className='order_form_box_main_1'>
              <Typography sx={{ fontFamily: 'Forum' ,     color: '#7A2031', fontSize: '2rem', marginBottom: '4rem'}}>ОФОРМЛЕНИЕ ЗАКАЗА</Typography>
              <Box width="95%" ml={3} p={2} border="1px solid #ccc" height='fit-content' className='order_form_box_main_2' sx={{marginBottom: '4rem'}}>
              <Typography sx={{ fontFamily: 'Forum' }}>ВАШ ЗАКАЗ</Typography>
              <Box>
                {cartItems.map((item, index) => (
                  <React.Fragment key={item.id}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <img src={item.image} alt={item.name} width="80" height="100" style={{ marginRight: '16px', objectFit: 'contain' }} />
                    <div style={{ display: 'flex' }} className='order_form_desc'>
                      <p>{item.name}</p>
                      <p>размер: {item.size}</p>
                      <p>цена: {item.price.toLocaleString()} ₽</p>
                      <p>количество: {item.quantity.toLocaleString()}</p>
                    </div>
                  </Box>
                  {index < cartItems.length - 1 && <Divider sx={{ border: '1px solid' }} />}
                </React.Fragment>
                ))}
                <Divider sx={{ border: '1px solid' }} />
                <div>
                  <p style={{ marginBottom: '2px' }}>Сумма по товарам <span>{total.toLocaleString()} ₽</span></p>
                  <p style={{ marginBottom: '2px' }}>Стоимость доставки <span>{delivery.toLocaleString()} ₽</span></p>
                </div>
                <Divider sx={{ border: '1px solid' }} />
                <div>
                  <p><strong>Итого: <span>{(total + delivery).toLocaleString()} ₽</span></strong></p>
                </div>
              </Box>
            </Box>
              <Box mb={2}>
                <CssTextField
                  fullWidth
                  label="Имя"
                  name="name"
                  variant="standard"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Box>
              <Box mb={2}>
                <CssTextField
                  fullWidth
                  label="Фамилия"
                  name="surname"
                  variant="standard"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                />
              </Box>
              <Box mb={2}>
                <CssTextField
                  fullWidth
                  label="Контактный телефон"
                  name="phone"
                  variant="standard"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            helperText="Введите номер телефона (только цифры, от 10 до 11 символов)"
                  required
                />
              </Box>
              <Box mb={2}>
                <CssTextField
                  fullWidth
                  label="E-mail"
                  name="email"
                  variant="standard"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  required
                />
              </Box>
              <Typography sx={{ fontFamily: 'Forum' }}>ДОСТАВКА</Typography>
              <Box mb={2}>
                <FormControl component="fieldset">
                  <RadioGroup
                    name="delivery"
                    value={formData.delivery}
                    onChange={handleChange}
                  >
                    <CssFormControlLabel
                      value="cdek"
                      control={<Radio sx={{ color: '#7A2031 !important' }} />}
                      label="CDEK"
                    />
                     <CssFormControlLabel
                      value="courier"
                      control={<Radio sx={{ color: '#7A2031 !important' }} />}
                      label="ДОСТАВКА КУРЬЕРОМ С ПРИМЕРКОЙ ПО г. САНКТ-ПЕТЕРБУРГ (500 ₽)"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              {formData.delivery === 'cdek' && (
                <Box mb={2}>
                  <Typography>Выберите пункт выдачи CDEK:</Typography>
                  <div id="cdek-map" style={{ width: 'auto', height: '600px' , zIndex:1}}></div>
                  <YMapComponentsProvider apiKey={apiKey} lang="ru_RU">
                    <YMap
                      key="map"
                      ref={ymap3Ref}
                      location={location}
                      mode="vector"
                      theme="dark"
                    >
                      <YMapDefaultSchemeLayer />
                      <YMapDefaultFeaturesLayer />
                      <YMapListener />
                      <YMapDefaultMarker coordinates={[59.9342802, 30.3350986]} />
                      <YMapControls position="bottom">
                        <YMapZoomControl />
                      </YMapControls>
                      <YMapControls position="bottom left">
                        <YMapGeolocationControl />
                      </YMapControls>
                      <YMapControls position="top">
                      </YMapControls>
                    </YMap>
                  </YMapComponentsProvider>
                </Box>
                
              )}
              {selectedCdekData && formData.delivery === 'cdek'&& (
                <Box mt={2} sx={{margin: '30px 0px 10px 0px'}}>
                  <Typography sx={{ fontFamily: 'Forum' , color: '#7A2031'}}>Вы выбрали пункт выдачи CDEK:</Typography>
                  <Typography sx={{ fontFamily: 'Forum' , color: '#7A2031'}} >
                    {selectedCdekData.address.formatted 
                      ? `${selectedCdekData.address.formatted}, ${selectedCdekData.address.postal_code}` 
                      : `${selectedCdekData.address.name}, ${selectedCdekData.address.address}, ${selectedCdekData.address.postal_code}`}
                  </Typography>
                  <Typography sx={{ fontFamily: 'Forum' ,color: '#7A2031'}}>Стоимость доставки: {selectedCdekData.tariff.delivery_sum} ₽</Typography>
                  <Typography sx={{ fontFamily: 'Forum' , color: '#7A2031'}}>Тариф: {selectedCdekData.tariff.tariff_name} </Typography>
                  <Typography sx={{ fontFamily: 'Forum' , color: '#7A2031'}}>Срок доставки: до {selectedCdekData.tariff.period_max} дней</Typography>
                </Box>
              )}
               {formData.delivery !== 'cdek'&& (
              <><Box mb={2}>
                  <CssTextField
                    fullWidth
                    label="Город"
                    name="city"
                    variant="standard"
                    value={formData.city}
                    onChange={handleChange}
                    required />
                </Box><Box mb={2}>
                    <CssTextField
                      fullWidth
                      label="Улица"
                      name="street"
                      variant="standard"
                      value={formData.street}
                      onChange={handleChange}
                      required />
                  </Box><Box mb={2}>
                    <CssTextField
                      fullWidth
                      label="Дом, квартира"
                      name="apartment"
                      variant="standard"
                      value={formData.apartment}
                      onChange={handleChange}
                      required />
                  </Box></>
               )}
              <Typography sx={{ fontFamily: 'Forum' }}>СПОСОБ ОПЛАТЫ</Typography>
              <Box mb={2}>
                <FormControl component="fieldset">
                  <RadioGroup
                    name="payment"
                    value={formData.payment}
                    onChange={handleChange}
                  >
                    <CssFormControlLabel
                      value="card"
                      control={<Radio sx={{ color: '#7A2031 !important' }} />}
                      label="БАНКОВСКОЙ КАРТОЙ"
                    />
                     {formData.delivery !== 'cdek'&& (
                    <CssFormControlLabel
                      value="self"
                      control={<Radio sx={{ color: '#7A2031 !important' }} />}
                      label="ПРИ ПОЛУЧЕНИИ ЗАКАЗА (в пределах г. Санкт-Петербург)"
                    />
                    )}
                  </RadioGroup>
                </FormControl>
              </Box>
              {/* <Box mb={2}>
                <CssTextField
                  label="Комментарий к заказу"
                  multiline
                  rows={4}
                  defaultValue={''}
                  sx={{ width: '100%' }}
                />
              </Box> */}


              {/* <Box className='text_false' sx={{marginTop: '4rem'}}>
                <Box>
                  <p>На данный момент на сайте ведутся технические работы, для дальнейшего оформления заказа напишите менеджеру в <a className='link_false'  href="https://t.me/CouCou_spb" >Telegram</a> или <a className='link_false'  href="https://wa.me/79112869339">WhatsApp</a></p>
                   <p> В случае выбора оплаты при получении  свяжитесь с нашим менеджером в <a className='link_false'  href="https://t.me/CouCou_spb" >Telegram</a> или <a className='link_false'  href="https://wa.me/79112869339">WhatsApp</a></p>
                  <p>Приносим свои извенения за временные неудобства.</p>
                </Box>
              </Box> */}
             
              {/* <Box mb={2} className='text_false_2'>
                Так же перед оформлением заказа ознакомтесь с условиями <Link className='custom-link' to="/delivery">доставки и оплаты</Link>, <Link className='custom-link' onClick={handleOpen} >политикой конфиденциальности</Link>, <Link className='custom-link' onClick={handleOpenOffer} >публичной офертой</Link> и принимаете условия возврата.
              </Box> */}
              {formData.payment === 'self' ? (
                  <>
                  <Box>
                  <p className='text_false_2'>В случае выбора оплаты при получении свяжитесь с нашим менеджером в <a className='link_false' href="https://t.me/CouCou_spb">Telegram</a> или <a className='link_false' href="https://wa.me/79112869339">WhatsApp</a></p>
                </Box><Box mb={2} className='text_false_2'>
                    Так же перед оформлением заказа ознакомтесь с условиями <Link className='custom-link' to="/delivery">доставки и оплаты</Link>, <Link className='custom-link' onClick={handleOpen}>политикой конфиденциальности</Link>, <Link className='custom-link' onClick={handleOpenOffer}>публичной офертой</Link> и принимаете условия возврата.
                  </Box>
                  </> 
                ) : (
                  <><Box mb={2}>
                    Нажимая кнопку "Оформить заказ", Вы соглашаетесь с условиями <Link to="/delivery" style={{ color: 'inherit !important' }}>доставки и оплаты</Link>, <Link onClick={handleOpen} style={{ color: 'inherit !important' }}>политикой конфиденциальности</Link>, <Link onClick={handleOpenOffer} style={{ color: 'inherit !important' }}>публичной офертой</Link> и принимаете условия возврата.
                  </Box><Button variant="contained" type="submit" fullWidth sx={{ borderRadius: '0px', backgroundColor: '#7A2031' }} className='button_product'>
                      ОФОРМИТЬ ЗАКАЗ
                    </Button></>
                )}
            </Box>

          </Box>
        </form>
      </Container>
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

export default OrderForm;
