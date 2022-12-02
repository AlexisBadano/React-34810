import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Item
          key={item.id}
          imagen={item.imagen[0]}
          title={item.title}
          category={item.category}
          idCategory={item.idCategory}
          id={item.id}
          price={item.price}
        />
      ))}
    </>
  );
};

export default ItemList;
