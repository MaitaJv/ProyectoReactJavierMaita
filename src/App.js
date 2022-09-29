import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Header from './componentes/Header/Header';
import ItemDetailContainer from './componentes/ItemDetailContaier/ItemDetailContainer';
import Cart from './componentes/Cart/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let saludo = "Hola Mundo"
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={saludo} />}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/category/:id' element={<ItemListContainer greeting={saludo} />}/>
          <Route path='/product/:id' element={ <ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
