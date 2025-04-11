const ItemCard = ({ item, updateQuantity }) => {
  const reduceQuantity = (e) => {
    e.preventDefault();
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const addQuantity = (e) => {
    e.preventDefault();
    updateQuantity(item.id, item.quantity + 1);
  };
  return (
    <div className="">
      {/* card */}
      <div className="flex flex-row card justify-between items-center rounded-md bg-white shadow-lg p-2 my-4 gap-4">
        <div className="flex flex-row">
          {/* image */}
          <figure className=" rounded-lg w-12 h-12 ">
            <img
              src={item.product.productImage}
              alt=""
              className="object-cover w-full h-full"
            />
          </figure>

          {/* name & price */}
          <div className="ml-2">
            <h3 className="text-gray-700 font-semibold text-sm">
              {item.product.name}
            </h3>
            <p className="text-gray-600 text-sm">RM{item.totalPrice}</p>
          </div>
        </div>

        {/* quantity selector */}
        <div className=" border rounded-lg">
          <div className="flex justify-center items-center">
            <button
              className=" hover:bg-gray-200 w-8 h-8 rounded-lg text-gray-500"
              onClick={reduceQuantity}
            >
              -
            </button>
            <p className="text-gray-700 text-md mx-4">{item.quantity}</p>
            <button
              className=" hover:bg-gray-200 w-8 h-8 rounded-lg text-gray-500"
              onClick={addQuantity}
            >
              +
            </button>
          </div>
        </div>

        {/* delete button */}
        <button className="btn bg-rose-500 text-white hover:bg-rose-600 rounded-md">
          X
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
