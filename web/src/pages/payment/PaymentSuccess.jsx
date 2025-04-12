import { ORDER } from "../../utils/database/dummyDb";

const PaymentSuccess = () => {
  return (
    <div className=" flex flex-col items-center p-4">
      {/* card */}
      <div className=" flex flex-col rounded-md card bg-white shadow-lg p-6">
        <h2 className=" flex flex-col items-center text-rose-500 text-lg font-semibold">
          Payment Success
        </h2>
        <p className=" flex flex-col items-center text-gray-700 text-sm mb-4">
          Preparing your order
        </p>

        <div className=" border-t-2 border-b-2">
          {/* bill */}
          <h3 className=" text-gray-700 text-lg font-bold mt-2">Bill:</h3>
          {/* order id */}
          <div className=" flex flex-row my-2">
            <p className="text-gray-600 text-md font-semibold">Order ID:</p>
            <p className="text-gray-600 text-md ml-2">{ORDER.orderId}</p>
          </div>

          {/* name */}
          <div className=" flex flex-row my-2">
            <p className="text-gray-600 text-md font-semibold">Name:</p>
            <p className="text-gray-600 text-md ml-2">{ORDER.name}</p>
          </div>
          {/* address */}
          <div className=" flex flex-row my-2">
            <p className="text-gray-600 text-md font-semibold">Address:</p>
            <p className="text-gray-600 text-md ml-2">{ORDER.address}</p>
          </div>
          {/* phone number */}
          <div className=" flex flex-row my-2">
            <p className="text-gray-600 text-md font-semibold">Phone Number:</p>
            <p className="text-gray-600 text-md ml-2">{ORDER.phoneNumber}</p>
          </div>
          {/* item & quantity */}
          <div className=" flex flex-col my-2">
            <p className=" text-gray-600 text-md font-semibold">
              Item(s) Ordered:
            </p>

            {ORDER.orderedProducts.map((item) => (
              <div
                className=" flex flex-row justify-between items-center"
                key={item.id}
              >
                <div className=" flex flex-row">
                  <p className="text-gray-600 text-sm">{item.name}</p>
                  <p className="text-gray-600 text-sm ml-1">
                    ({item.quantity})
                  </p>
                </div>

                <p className=" text-gray-600 text-sm">RM{item.totalPrice}</p>
              </div>
            ))}
          </div>

          {/* total price */}
          <div className=" flex flex-row my-2">
            <p className="text-gray-600 text-md font-semibold">Total:</p>
            <p className="text-gray-600 text-md ml-2">RM{ORDER.totalAmount}</p>
          </div>
        </div>

        <p className=" flex flex-col items-center text-gray-500 text-sm mb-4">
          Please screenshot & save your receipt
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
