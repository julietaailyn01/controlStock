import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../../actions/productActions';
import Styles from './AddProductForm.module.css';
import { Link } from 'react-router-dom';
import Logo from "../../images/Logo.png"

const AddProductForm = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    nombre: "",
    stock: "",
    image: "",
    descripcion: "",
    precio: ""
  })

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(addProduct(input));
    setInput({
      nombre:"",
      stock: "",
      image:"",
      descripcion: "",
      precio: ""
    })
  };

  return (
    <div className={Styles.body}>
      <header className={Styles.navBar}>
      <img src={Logo} alt="Logo" className={Styles.logo} />
        <nav>
          <ul className={Styles.navBarLi}>
            <li>
              <Link to="/productList " className={Styles.navBarLink}>Inicio</Link>
            </li>
            <li>
              <Link to="/" className={Styles.navBarLink}>Cerrar Sesion</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className={Styles.formDiv}>
        <form onSubmit={handleSubmit} className={Styles.form}>
          <label className={Styles.labels}>
            Nombre:
          </label>
          <br />
          <input type="text" name="nombre" className={Styles.inputs} value={input.nombre} onChange={(e) => handleChange(e)} />
          <br />
          <label className={Styles.labels}>
            Stock:
          </label>
          <br />
          <input type="number" name="stock" value={input.stock} className={Styles.inputs} onChange={(e) => handleChange(e)} />
          <br />
          <label className={Styles.labels}>
            Precio:
          </label>
          <br />
          <input type="number" name="precio" value={input.precio} className={Styles.inputs} onChange={(e) => handleChange(e)} />
          <br />
          <label className={Styles.labels}>
            Descripcion:
          </label>
          <br />
          <input type="text" value={input.descripcion} name="descripcion" className={Styles.textArea} onChange={(e) => handleChange(e)}></input>
          <br />
          <label className={Styles.labels}>
            Imagen:
          </label>
          <br />
          <select name="image" value={input.image} onChange={(e) => handleChange(e)} className={Styles.inputs}>
            <option value="">Seleccione una imagen</option>
            <option value="garrafaR22.jpg">Garrafa R22</option>
            <option value="garrafaR134a.jpg">Garrafa R134a</option>
            <option value="caños.jpg">Caños</option>
          </select>
          <br />
          <button type="submit" className={Styles.boton}>Agregar producto</button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;

