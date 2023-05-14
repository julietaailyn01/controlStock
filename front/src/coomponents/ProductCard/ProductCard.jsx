import React from 'react';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../actions/productActions';
import Styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';
import garrafaR22 from '../../images/garrafaR22.jpg';
import garrafaR134a from '../../images/garrafaR134a.jpg';
import caños from '../../images/caños.jpg';

const ProductCard = ({nombre, id, descripcion, stock, image, precio}) => {
  const dispatch = useDispatch();

  const handleDelete = async () =>{
    try{
      console.log(id);
      await dispatch(removeProduct(id));
    }catch(err){
      console.error(err);
    }
  };

  let imageToShow;
  if (image === 'garrafaR22.jpg') {
    imageToShow = garrafaR22;
  } else if (image === 'garrafaR134a.jpg') {
    imageToShow = garrafaR134a;
  } else {
    imageToShow = caños;
    console.log(image)
  }

  return (
    <div className={Styles.divCard}>
      <nav className={Styles.nav}>
        <button className={Styles.botonX} onClick={handleDelete}>X</button>
        <p>{nombre}</p>
      </nav>
      <div className={Styles.imgContainer}>
      <img src={imageToShow} alt={nombre}  />
      </div>
      <div className={Styles.description}>{descripcion}</div>
      <div className={Styles.stock}>Stock: {stock}</div>
      <div className={Styles.price}>Precio: {precio}</div>
      <Link to={`/editar-producto/${id}`} className={Styles.aLink}>Editar</Link>
    </div>
  );
};

export default ProductCard;
