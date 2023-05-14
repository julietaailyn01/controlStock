import React, { useState } from 'react';
import {  Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import Styles from './LoginPage.module.css';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addUser } from "../../actions/productActions";
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
    
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        if(username === "RefriMarket" && password === "JulieslaMejor"){
          dispatch(addUser(username));
          return setLoggedIn(true);
        }else if(username === "RefrigeracionFD" && password === "RefrigeracionFD2023"){
          dispatch(addUser(username));
          return setLoggedIn(true);
        }else if(username === "RefriCo" && password === "RefriCo2023"){
          dispatch(addUser(username));
          return setLoggedIn(true);
        }
        // Si la autenticación es exitosa, establecer el estado de loggedIn a true
      } catch (error) {
        // Si la autenticación falla, mostrar un mensaje de error al usuario
        toast.error("Usuario o contraseña incorrecto");
        console.error(error);
      }
    };
    console.log(username);
  
    if (loggedIn) {
      return (
        <Navigate to='/productList' replace />
    );
    } else {
      return (
        <div className={Styles.fondo}>
          <div className={Styles.divFondo}>
          <div className={Styles.imgLogo}></div>
          <form onSubmit={handleSubmit} className={Styles.forms}>
            <label className={Styles.labels}>
              Usuario:
            </label>
            <br/>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className={Styles.inputs} />
            <br />
            <label className={Styles.labels}>
              Contraseña:
            </label>
            <br/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={Styles.inputs}/>
            <br />
            <button type="submit" className={Styles.boton}>Iniciar sesión</button>
          </form>
          </div>
        </div>
      );
    }
  };
  
  export default LoginPage;
  
