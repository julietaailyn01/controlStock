import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../actions/productActions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Styles from './EditProduct.module.css';
import Logo from '../../images/Logo.png'

const EditProduct = ({ stock, descripcion, precio }) => {
    const [newStock, setNewStock] = useState(stock);
    const [newDescripcion, setNewDescripcion] = useState(descripcion);
    const [newPrecio, setNewPrecio] = useState(precio);
    const dispatch = useDispatch();

    const { id } = useParams();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        console.log(id);
        await dispatch(updateProduct(id, { stock: newStock, descripcion: newDescripcion, precio: newPrecio }));
        // Redirect to product list or show success message
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
        <div className={Styles.body}>
            <header className={Styles.header} >
            <img src={Logo} alt="Logo" className={Styles.logo} />
            <nav>
                <ul className={Styles.navul}>
                    <li className={Styles.navulli}>
                      <Link to="/productList " className={Styles.navullia}>Volver</Link>
                    </li>
                    <li className={Styles.navulli}>
                        <Link to="/" className={Styles.navullia}>Cerrar Sesion</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <div>
        <form onSubmit={handleSubmit} className={Styles.form}>
        <label htmlFor="stock" className={Styles.label}>Stock:</label>
        <input type="number" className={Styles.inputs} id="stock" name="stock" value={newStock} onChange={(e) => setNewStock(e.target.value)} />
        <label htmlFor="descripcion" className={Styles.label}>Descripción:</label>
        <textarea className={Styles.inputs} id="descripcion" name="descripcion" value={newDescripcion} onChange={(e) => setNewDescripcion(e.target.value)} />
        <label htmlFor="precio" className={Styles.label}>Precio:</label>
        <input className={Styles.input} type="number" id="precio" name="precio" value={newPrecio} onChange={(e) => setNewPrecio(e.target.value)} />
        <button type="submit" className={Styles.button}>Guardar cambios</button>
      </form>
        </div>

        </div>
    );
  };
  
  export default EditProduct;