import ItemCount from "./ItemCount";

const ItemListContainer = () => {
  return (
    <div className="ItemList">
      <h2>ItemListContainer</h2>
      <ItemCount initial={1} stock={25} title="Product"/>
    </div>
  );
};
export default ItemListContainer;
