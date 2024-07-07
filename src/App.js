// import Header from './Header/Header';
// import Banner from './Banner/Banner';
// import Product from './Product/Product';
// import Footer from './Footer/footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
// function App() {
//   return (
//   <>
//     <Header />
//     <Banner />
//     <Footer/>
//   </>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Product from './Product/Product';
import Footer from './Footer/footer';
import Basket from './basket/basket';
import OrderForm from './Order/OrderForm';
import Delivery from './Delivery/Delivery';
import Refund from './Refund/Refund';
import CareInfo from './CareInfo/CareInfo';
import Brand from './Brand/Brand';
import Contacts from './Contacts/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/confirmation" element={<OrderForm/>} />
        <Route path="/delivery" element={<Delivery/>} />
        <Route path="/refund" element={<Refund/>} />
        <Route path="/care" element={<CareInfo/>} />
        <Route path="/brand" element={<Brand/>} />
        <Route path="/contacts" element={<Contacts/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
