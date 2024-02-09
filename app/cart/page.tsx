"use client";

import { IconButton } from "@material-tailwind/react";
import {
  selectCartProducts,
  removeFromCart,
  updateQuantity,
} from "../../lib/features/productsInCartSlice";
import { SingleProduct } from "../../lib/features/productsSlice";
import { useAppSelector, useAppDispatch } from "../../lib/hooks";
import { Trash2 } from "lucide-react";

export default function Cart() {
  const products = useAppSelector(selectCartProducts);
  const dispatch = useAppDispatch();
  const cartProductsList = products.cart;
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

  if (cartProductsList.length !== 0) {
    return (
      <section className="wholePage flex min-h-screen w-full  justify-center bg-background">
        <div className="flex w-4/5 flex-col pt-20 max-[1399px]:w-full  ">
          <h1 className=" border-b-2 border-text pb-3 text-lg text-text">
            My Cart
          </h1>
          {cartProductsList.map(({ image, name, price, id }) => (
            <div
              key={id}
              className="flex h-[140px] w-full  border-2 border-t-0 border-text p-2 text-text "
            >
              <div className="flex h-24 w-24 items-center justify-center self-center px-4">
                <img className="flex h-full " src={image}></img>
              </div>
              <div className=" flex w-full max-w-[444px] flex-col">
                <h1>{name}</h1>
                <Trash2
                  onClick={() => handleRemoveFromCart(id)}
                  className="mt-5 flex w-[10%] cursor-pointer justify-start self-start text-text"
                />
              </div>

              <p>{price}$</p>
            </div>
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <section className="wholePage flex min-h-screen w-full  justify-center bg-background">
        <div className="flex w-4/5 flex-col pt-20 max-[1399px]:w-full  ">
          <h1 className=" border-b-2 border-text  text-lg text-text">
            My Cart
          </h1>
          <p className="pt-2 text-text">The cart is empty</p>
        </div>
      </section>
    );
  }
}
