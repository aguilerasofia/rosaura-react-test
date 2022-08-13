//componente principal

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
//importar de react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import CartProvider from "./context/CartContext";
import Checkout from "./pages/Checkout";
//import Modal from './components/Modal/Modal';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category/:id" element={<Detail />} />
          <Route path="/category/:categoryId" element={<Home/>} />
          <Route path='/cart' element={<Checkout />}/>
          <Route path="*" element={<h1>ERROR 404 - pagina no encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

/* CONSUMIR UNA API CON FETCH (GET por defecto)
  fetch("URL")
  .then((response) => {
    return response.json()
  })
  .then( (data) => {
    console.log("informacion q traigo", data)
  })
   */
