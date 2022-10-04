import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Header from './componentes/Header/Header';
import ItemDetailContainer from './componentes/ItemDetailContaier/ItemDetailContainer';
import Cart from './componentes/Cart/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContext from "./componentes/Context/CartContext";

function App() {
  let saludo = "Hola Mundo"
  return (
    <div className='BackgroundColor'>
      <BrowserRouter>
      <CartContext>
        <Header/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={saludo} />}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/category/:id' element={<ItemListContainer greeting={saludo} />}/>
          <Route path='/product/:id' element={ <ItemDetailContainer />}/>
        </Routes>
      </CartContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
