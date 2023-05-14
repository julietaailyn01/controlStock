import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './coomponents/LoginPages/LoginPage';
import EditProduct from './coomponents/EditProduct/EditProduct';
import store from './store';
import ProductList from './coomponents/Home/ProductList';
import AddProductForm from './coomponents/AddProduct/AddProductForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
axios.defaults.baseURL = "https://controlstock-production.up.railway.app/";

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <ToastContainer/> */}
        <Routes>
          <Route exact path='/' element={<LoginPage/>}/>
          <Route exact path='/productList' element={<ProductList/>}/>
          <Route exact path="/add-producto" element={<AddProductForm/>} />
          <Route exact path='/editar-producto/:id' element={<EditProduct/>}/>
        </Routes>
      </Router>
      <ToastContainer position='top-left'/>
    </Provider>
  );
}

export default App;
