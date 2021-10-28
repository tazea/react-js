import {useEffect, useState} from 'react';
import ItemList from "./ItemList"
import GetFetchList from './GetFetchList';

const ItemListContainer = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
      GetFetchList
      .then(response => {        
          setProduct(response)
      })
      .catch (error => console.log(error))
  },[]) 

  return (
    <div className="ItemList">
      <h2>ItemListContainer</h2>
      <ItemList product={product}/>
    </div>
  );
};
export default ItemListContainer;
