"use client";

import {
  selectCartProducts,
  addToCart,
  removeFromCart,
  updateQuantity,
} from "../../lib/features/productsInCartSlice";
import { SingleProduct } from "../../lib/features/productsSlice";
import { useAppSelector, useAppDispatch } from "../../lib/hooks";

export default function Cart() {
  const products = useAppSelector(selectCartProducts);
  const dispatch = useAppDispatch();
  const cartProductsList = products.cart;
  console.log(cartProductsList);
  const {} = cartProductsList;
  const baseApi = "http://localhost:3000/";

  const handleUpdateQuantity = (id: number, quantityInCart: number) => {
    // Update the quantity of a specific product in the cart
    dispatch(
      updateQuantity({
        id,
        quantityInCart,
      }),
    );
  };

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  if (cartProductsList.length !== 0)
    return (
      <section className="wholePage flex min-h-screen w-full  justify-end bg-background">
        <div className="flex w-4/5 max-[1399px]:w-full ">
          {cartProductsList.map(({ image, name, price }) => (
            <div>
              <h1>{name}</h1>
              <img src={image}></img>
              <p>{price}</p>
            </div>
          ))}
        </div>
      </section>
    );
}
