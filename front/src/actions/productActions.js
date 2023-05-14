
import axios from 'axios';
import { GET_PRODUCTS, REMOVE_PRODUCT_SUCCESS, UPDATE_PRODUCT_SUCCESS, ADD_USER, REMOVE_USER } from '../actions/actionTypes';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from "uuid";



export const getProducts = () => {
  return async function(dispatch){
    var products = await axios.get("/products", {});
    return dispatch({
      type: GET_PRODUCTS,
      payload: products.data
    });
  }
}


export const addProduct = (payload) => {
  return async function(){
    try{
      var newProduct = await axios.post('/products', payload);
    toast.success('Se ha agregado exitosamente.')
    return newProduct
    }catch(err){
      console.log(err);
      toast.error(err);
    }
  }
}
 


export const removeProduct = (id) => async (dispatch) => {
  try {
    await axios.delete(`/products/${id}`);
    dispatch({
      type: REMOVE_PRODUCT_SUCCESS,
      payload: id,
    });
  } catch (error) {
    console.log(error);

  }
};

export const updateProduct = (id, updatedProduct) => async (dispatch) => {
  try {
    const res = await axios.put(`/products/${id}`, updatedProduct);
    dispatch({
      type: UPDATE_PRODUCT_SUCCESS,
      payload: res.data,
    });
    toast.success('Se ha modificado exitosamente.');
  } catch (error) {
    console.log(error);
    toast.error("Se ha producido un error");
  }
};

export const addUser = (user) =>{ 
  return async function(dispatch){
    const id = uuidv4();
    const newUser = { id, name: user }; // agregamos el id al nuevo usuario
    return dispatch({
      type: ADD_USER,
      payload: newUser
    })
  }
}


export const removeUser = () =>{ 
  return async function(dispatch){
    return dispatch({
      type: REMOVE_USER,
      payload: []
    })
  }
  };



