import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../redux/CartSlice";
import { useState } from "react";

const ProductCard = ({ id, image, title, price, product, btnText }) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);

  const onClickHandler = (product) => {
    if (cartProducts.some((el) => el.id === product.id)) {
      alert("Product already added");
    } else {
      dispatch(addToCart(product));
    }
  };

  const onClickRemoveHandler = (id) => {
    dispatch(removeToCart(id));
  };

  return (
    <div className="card w-70 card-compact bg-base-100 shadow-xl" key={id}>
      <figure>
        <img src={image} alt="Shoes" className="object-contain h-48 w-96" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-title">${price}</h2>
        <div className="card-actions justify-end">
          {btnText === "Buy Now" ? (
            <button
              className="btn btn-primary"
              onClick={() => onClickHandler(product)}
              htmlFor="my-modal"
            >
              {btnText}
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => onClickRemoveHandler(id)}
            >
              {btnText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
