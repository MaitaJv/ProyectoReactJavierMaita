import './ItemListContainerCss.css'
import './ItemCount/ItemCount'
import ItemCount from './ItemCount/ItemCount';

function ItemListContainer(){

    const onAdd = (count) => {
        console.log(`Se agregan ${count} productos`);
    }

    return(
        <div className='ItemListcontainer'>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>
    );
}

export default ItemListContainer;