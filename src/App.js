import "./App.css";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Hola! Bienvenido a mi proyecto de un e-shop de venta de instrumentos musicales! Acompañame en este viaje de autodescubrimiento, ira, llanto y finalmente de realización :D" />}/>
        <Route path='category/:idCategory' element={<ItemListContainer/>}/>
        <Route path='item/:idItem' element={<ItemDetailContainer/>}/>
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
