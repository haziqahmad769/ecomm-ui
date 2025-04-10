const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center card w-56 rounded-md bg-white shadow-lg p-4">
        <div>
          {/* image */}
          <figure className="rounded-lg w-36 h-36 ">
            <img
              src={product.productImage}
              alt=""
              className="object-cover w-full h-full"
            />
          </figure>
          {/* details */}
          <div className="my-4">
            <h3 className="text-gray-700 font-semibold text-md">
              {product.name}
            </h3>
            <p className="text-gray-600">RM{product.price}</p>
          </div>
        </div>

        {/* button */}
        <button className="btn bg-rose-500 text-white hover:bg-rose-600 w-full rounded-md">
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
