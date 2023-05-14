import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './NavBar.module.css';
import Logo from '../../images/Logo.png'
import { useSelector } from 'react-redux';
import LogoRM from "../../images/Logo.png";
import LogoRFD from "../../images/LogoFD.png";
import LogoRC from "../../images/RefriCo.jpg";
import { removeUser } from '../../actions/productActions';
import { useDispatch } from 'react-redux';


const NavBar = () => {
  const connectedUsers = useSelector(state => state.connectedUsers);

  const dispatch = useDispatch();
  
  const handleClick = () =>{
    dispatch(removeUser())
  }

  console.log(connectedUsers);
  return (
    <header className={Styles.navBar}>
      <img src={Logo} alt="Logo" className={Styles.logo} />
      {connectedUsers.map(user => (
        <div key={user.id} className={Styles.roundedImage}>
          {console.log(user.id)}
          {user.name === "RefriMarket" && <img src={LogoRM} alt="RefriMarket" />}
          {user.name === "RefriCo" && <img src={LogoRC} alt="RefriCo" />}
          {user.name === "RefrigeracionFD" && <img src={LogoRFD} alt="RefrigeracionFD" />}
        </div>))}
        <nav>
        <ul className={Styles.navBarLi}>
        <li>
          <Link to="/add-producto" className={Styles.navBarLink}>Agregar Producto</Link>
        </li>
        <li>
          <Link to="/" className={Styles.navBarLink}onClick={handleClick}>Cerrar Sesion</Link>
        </li>
      </ul>
    </nav>
    </header>
  );
};

export default NavBar;
