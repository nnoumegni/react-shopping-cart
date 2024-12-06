import Item from "./Item";

export default function Renderer({items,
  handleRemove, handleIncreaseCartItem, handleDecreaseCartItem},
) {
  return (
    <>
      {items.map((item, index) => {
        return(
        <Item
          key={index}
          image={item.image}
          product={item.product}
          quantity={item.quantity}
          price={item.price}
          handleRemove={() => handleRemove(item)}
          handleIncreaseCartItem={() =>handleIncreaseCartItem(item)}
          handleDecreaseCartItem={() =>handleDecreaseCartItem(item)}
        />);
      })}
    </>
  );
}
