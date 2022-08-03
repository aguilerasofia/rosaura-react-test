
//componente principal 

import './App.css';
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
//importar de react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Detail from './pages/Detail';
import Contact from './pages/Contact'
//import Modal from './components/Modal/Modal';


function App() {

  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/products" element={<h1>Productos</h1>}/>
      <Route path='/products/:id' element={<Detail />}/>
      <Route path="/contact" element={<Contact />}/>
      {/* <Route path='/cart' element={<Checkout />}/> */}
      <Route path="*" element={<h1>ERROR 404 -  pagina no encontrada</h1>}/>
    </Routes>
</BrowserRouter>
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