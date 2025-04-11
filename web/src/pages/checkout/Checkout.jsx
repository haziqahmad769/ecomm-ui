import { useState } from "react";
import { CART_ITEMS } from "../../utils/database/dummyDb";
import ItemCard from "../../components/ItemCard";

const Checkout = () => {
  const [items, setItems] = useState(CART_ITEMS.items);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    postcode: "",
    city: "",
    state: "",
  });

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

  //   calculate new total quantity
  const totalPrice = items
    .reduce((sum, item) => sum + item.quantity * item.product.price, 0)
    .toFixed(2);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className=" flex flex-col items-center p-4">
      <div className="flex flex-col my-4">
        <h2 className=" text-rose-500 text-lg font-semibold">Checkout</h2>

        <form action="" className="flex flex-col gap-4">
          {/*name, phone number & email  */}
          <div className=" flex flex-col rounded-md card bg-white shadow-lg p-4">
            {/* name */}
            <div className="mb-4">
              <label className="text-gray-700 text-md">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            {/* phone number */}
            <div className="mb-4">
              <label className="text-gray-700 text-md">Phone Number</label>

              <div className="flex flex-row">
                <div className="flex justify-center items-center p-2 border rounded-md">
                  +60
                </div>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="123456789"
                  className="w-full p-2 border rounded-md ml-2"
                />
              </div>
            </div>
            {/* email */}
            <div className="">
              <label className="text-gray-700 text-md">Email</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>
          {/* address */}
          <div className=" flex flex-col rounded-md card bg-white shadow-lg p-4">
            <div className="">
              <label className=" text-gray-700 text-md">Address</label>
              <input
                type="text"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleChange}
                placeholder="Address Line 1"
                className="w-full p-2 border rounded-md mb-4"
              />
              <input
                type="text"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
                placeholder="Address Line 2"
                className="w-full p-2 border rounded-md mb-4"
              />
            </div>

            {/* postcode, city, state */}
            <div className=" flex flex-row gap-2">
              <input
                type="text"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                placeholder="Postcode"
                className="w-full p-2 border rounded-md mb-2"
              />
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full p-2 border rounded-md mb-2"
              />
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                className="w-full p-2 border rounded-md mb-2"
              />
            </div>
          </div>

          {/* order summary */}
          <div className=" flex flex-col rounded-md card bg-white shadow-lg p-4">
            <p className=" text-gray-700 text-md">Order Summary</p>
            <div className="">
              {/* item card */}
              {items.map((item) => (
                <ItemCard
                  key={item.id}
                  item={item}
                  updateQuantity={updateQuantity}
                />
              ))}
            </div>

            {/* total price */}
            <div className=" flex flex-row justify-between items-center border-t-2 border-b-2 py-4">
              <div className="text-gray-700 font-semibold text-lg">Total</div>
              <div className="text-gray-700 font-semibold text-lg">
                RM{totalPrice}
              </div>
            </div>
          </div>

          {/* pay button */}
          <button className="btn bg-rose-500 text-white hover:bg-rose-600 w-full rounded-md">
            Proceed Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
