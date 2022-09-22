import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Header from './componentes/Header/Header';
import ItemDetailContainer from './componentes/ItemDetailContaier/ItemDetailContainer';

function App() {
  let saludo = "Hola Mundo"
  return (
    <>
      <Header/>
      <ItemListContainer greeting={saludo}/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;
