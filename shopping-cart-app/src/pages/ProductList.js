import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { fetchProducts } from "../redux/ProductSlice";

const ProductListPage = ({ inputText }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const fetchProductData = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.isLoading);
  const isError = useSelector((state) => state.products.error);

  if (isLoading) {
    return "loading...";
  }

  if (isError) {
    return isError;
  }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {fetchProductData
            ?.filter((el) =>
              inputText === "" ? el : el.title.toLowerCase().includes(inputText)
            )
            .map((product) => (
              <ProductCard
                id={product.id}
                title={product.title.slice(0, 10)}
                price={product.price}
                image={product.image}
                product={product}
                btnText="Buy Now"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
