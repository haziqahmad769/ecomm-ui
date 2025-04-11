import { useState } from "react";
import { PRODUCT } from "../../utils/database/dummyDb";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const reduceQuantity = () =>
    setQuantity((prevQuantity) =>
      prevQuantity > 1 ? prevQuantity - 1 : prevQuantity
    );

  const addQuantity = () =>
    setQuantity((prevQuantity) =>
      prevQuantity < PRODUCT.quantity ? prevQuantity + 1 : prevQuantity
    );

  return (
    <div className="flex flex-col items-center p-4">
      <div className="my-4">
        <h2 className="text-rose-500 text-lg font-semibold my-4">
          Product Details
        </h2>
        {/* image */}
        <figure className="rounded-lg w-56 h-56 overflow-hidden shadow-lg">
          <img
            src={PRODUCT.productImage}
            alt=""
            className="object-cover w-full h-full"
          />
        </figure>
        {/* details */}
        <div className="my-4">
          <h3 className="text-gray-700 font-bold text-xl">{PRODUCT.name}</h3>
          <p className="text-gray-600 font-semibold text-lg">
            RM{PRODUCT.price}
          </p>

          <div className="mt-2">
            <p className="text-gray-600 text-md">Description:</p>
            <p className="text-gray-400 text-md">{PRODUCT.description}</p>
          </div>

          <div className="mt-2">
            <p className="text-gray-600 text-md">In Stock:</p>
            <p className="text-gray-400 text-md">{PRODUCT.quantity}</p>
          </div>
        </div>

        {/* quantity selector */}
        <div className=" border-t-2 border-b-2">
          <div className="flex justify-center items-center my-4">
            <button
              className=" hover:bg-gray-200 w-10 h-10 rounded-lg text-gray-500"
              onClick={reduceQuantity}
            >
              -
            </button>
            <p className="text-gray-700 text-md mx-4">{quantity}</p>
            <button
              className=" hover:bg-gray-200 w-10 h-10 rounded-lg text-gray-500"
              onClick={addQuantity}
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* button */}
      <button className="btn bg-rose-500 text-white hover:bg-rose-600 w-full rounded-md">
        Add
      </button>
    </div>
  );
};

export default ProductDetail;
