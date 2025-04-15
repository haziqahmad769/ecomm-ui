import { useQuery } from "@tanstack/react-query";
import ProductCard from "../../components/ProductCard";
// import { PRODUCT_LISTS } from "../../utils/database/dummyDb";

const HomePage = () => {
  // get all product
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const token = localStorage.getItem("jwt");
        const headers = {
          "Content-Type": "application/json",
        };

        if (token) {
          headers["Authorization"] = `Bearer ${token}`;
        }

        const res = await fetch(`${import.meta.env.VITE_API_URL}/products`, {
          method: "GET",
          credentials: "include",
          headers,
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }

        return data;
      } catch (error) {
        throw new Error(error);
      }
    },
  });

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="flex flex-col items-center">
      {/* shop details */}
      <div className="flex flex-col items-center bg-rose-500 w-full p-4">
        <figure className="rounded-full w-24 h-24 border-4 border-white overflow-auto">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt=""
            className="object-cover w-full h-full"
          />
        </figure>
        <h1 className="text-white text-xl font-bold my-2">Shop Name</h1>
        <p className="text-white">+60123456789</p>
        <p className="text-white">Location</p>
      </div>
      {/* products catalogue */}
      <div className="p-4">
        <h2 className="text-rose-500 text-lg font-semibold my-4">
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* product card */}
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
