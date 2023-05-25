import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const CartListPage = () => {
  const products = useSelector((state) => state.cart);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products?.length !== 0 ? (
            products?.map((product) => (
              <ProductCard
                id={product.id}
                title={product.title.slice(0, 10)}
                price={product.price}
                image={product.image}
                product={product}
                btnText="Delete"
              />
            ))
          ) : (
            <h1>No Products Added in Cart</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartListPage;
