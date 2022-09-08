import './ItemListContainerCss.css'

function ItemListContainer({greeting}){
    return(
        <div className='ItemListcontainer'>
            <h1 className='Item'>{greeting}</h1>
        </div>
    );
}

export default ItemListContainer;