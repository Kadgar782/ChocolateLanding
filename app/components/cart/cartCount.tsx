"use client";

import { selectCartProducts } from "../../../lib/features/productsInCartSlice";
import { useAppSelector } from "../../../lib/hooks";

export const ItemsInCartCount = () => {
  const products = useAppSelector(selectCartProducts);
  const cartProductsList = products.cart;
  const productCount = cartProductsList.length;

  return (
    <>
      {productCount > 0 ? (
        <div className=" absolute right-4 top-1 mt-[10px] h-4 w-6 items-center  rounded-lg border-2 border-text bg-background pb-1 text-center text-xs leading-none max-md:-top-4 max-md:left-4  ">
          {productCount}
        </div>
      ) : null}
    </>
  );
};
