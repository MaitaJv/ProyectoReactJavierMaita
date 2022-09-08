import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Header from './componentes/Header/Header';

function App() {
  let saludo = "Hola Mundo"
  return (
    <>
      <Header/>
      <ItemListContainer greeting={saludo}/>
    </>
  );
}

export default App;
