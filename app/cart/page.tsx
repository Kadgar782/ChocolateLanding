"use client";

import {
  selectCartProducts,
  updateQuantity,
  removeSelectedProducts,
  selectAllProductsInCart,
} from "../../lib/features/productsInCartSlice";
import { ProductInCart } from "@/components/cart/cartProduct";
import { useAppSelector, useAppDispatch } from "../../lib/hooks";
import { Trash2 } from "lucide-react";

export default function Cart() {
  const products = useAppSelector(selectCartProducts);
  const dispatch = useAppDispatch();
  const cartProductsList = products.cart;
  const allIsSelectedTrue = cartProductsList.every(
    (item) => item.isSelected === true,
  );
  const baseApi = "http://localhost:3000/";

  const handleRemoveSelectedProducts = () => {
    dispatch(removeSelectedProducts());
  };
  const handleSelectAllProducts = () => {
    dispatch(selectAllProductsInCart());
  };

  if (cartProductsList.length !== 0) {
    return (
      <section className="wholePage flex min-h-screen w-full  justify-center bg-background pt-16 max-md:pb-16">
        <div className="flex w-[75%] flex-col pt-20 max-[1399px]:w-full  ">
          <h1 className=" border-b-2 border-text pb-3 text-lg text-text">
            My Cart
          </h1>
          <label className=" flex flex-row items-center justify-start border-2 border-t-0 border-text p-2 text-lg text-text">
            <input
              type="checkbox"
              className="mx-4  flex "
              checked={allIsSelectedTrue}
              onChange={() => handleSelectAllProducts()}
            />
            Select all
            <button
              className=" flex  items-center justify-center pl-5 text-text"
              onClick={() => handleRemoveSelectedProducts()}
            >
              <Trash2 className="mr-3 flex w-[10%] cursor-pointer justify-center self-center text-text" />
              <p className="flex ">Delete all selected</p>
            </button>
          </label>

          {cartProductsList.map((product) => (
            <ProductInCart key={product.id} product={product} />
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <section className="wholePage flex min-h-screen w-full  justify-center bg-background">
        <div className="flex w-[75%] flex-col pt-20 max-[1399px]:w-full   ">
          <h1 className=" border-b-2 border-text  text-lg text-text">
            My Cart
          </h1>
          <p className="pt-2 text-text">The cart is empty</p>
        </div>
      </section>
    );
  }
}
