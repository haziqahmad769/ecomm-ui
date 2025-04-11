import { useState } from "react";
import { CART_ITEMS } from "../../utils/database/dummyDb";
import ItemCard from "../../components/ItemCard";

const CartItem = () => {
  const [items, setItems] = useState(CART_ITEMS.items);

  const updateQuantity = (id, newQuantity) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: newQuantity,
              totalPrice: (newQuantity * item.product.price).toFixed(2),
            }
          : item
      )
    );
  };

  //   calculate new total quantity & price
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items
    .reduce((sum, item) => sum + item.quantity * item.product.price, 0)
    .toFixed(2);

  return (
    <div className=" flex flex-col items-center p-4">
      <div className=" my-4">
        <h2 className="text-rose-500 text-lg font-semibold my-4">Your Cart</h2>

        {/* items */}
        <div className="gap-4">
          {/* item card */}
          {items.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
            />
          ))}
        </div>
      </div>

      {/* checkout button */}
      <button className="flex flex-row justify-between items-center bg-rose-500 hover:bg-rose-600 w-full rounded-md p-2">
        {/* total items */}
        <div className="flex items-center justify-center bg-white rounded-full w-5 h-5 text-rose-500 text-sm">
          {totalQuantity}
        </div>
        {/* checkout */}
        <div className="text-white font-semibold">Checkout</div>
        {/* total price */}
        <div className="text-white text-sm">RM{totalPrice}</div>
      </button>
    </div>
  );
};

export default CartItem;
