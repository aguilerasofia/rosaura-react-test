
//componente principal 

import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemContainer from './components/ItemContainer/ItemContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Modal from './components/Modal/Modal';


function App() {
  const styleApp = {padding: "10px 20px", marginTop: 10}
  return (
    //JSX
    <div className="container" style= {styleApp}>
      <NavBar></NavBar>
      <div className="main-container">
      <ItemContainer section="Productos actuales"></ItemContainer>
      <ItemContainer section= "Mas productos"></ItemContainer>
      <ItemContainer section="Productos destacados"></ItemContainer>
      </div>
{/*       <Modal title="Modal de registro">
        <ItemContainer></ItemContainer>
        <form>
          <input tipe="text"></input>
          <button> enviar</button>
        </form>
      </Modal> */}
    </div>
  );
}

export default App;
