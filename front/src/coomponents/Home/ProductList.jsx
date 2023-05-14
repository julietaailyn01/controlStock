import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, addProduct } from "../../actions/productActions";
import ProductCard from "../ProductCard/ProductCard";
import NavBar from "../NavBar/NavBar";
import Styles from "./ProductList.module.css";


const ProductList = () => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className={Styles.body}>
      <NavBar/>
      <h2 className={Styles.h2}>Productos</h2>
      <div className={Styles.divCard}>
        {products && products.map(d => 
          <ProductCard key={d.id} id={d.id} nombre={d.nombre} image={d.image} descripcion={d.descripcion} stock={d.stock} precio={d.precio}/>
        )}
      </div>
    </div>
  );
};

export default ProductList;