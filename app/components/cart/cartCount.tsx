"use client";

import { selectCartProducts } from "../../../lib/features/productsInCartSlice";
import { useAppSelector } from "../../../lib/hooks";

export const ItemsInCartCount = () => {
  const products = useAppSelector(selectCartProducts);
  const cartProductsList = products.cart;
  const productCount = cartProductsList.map((a) => a.id).length;
  console.log(productCount);
  console.log(cartProductsList);

  return (
    <>
      {productCount > 0 ? (
        <div className=" absolute right-4 top-1 mt-[10px] h-4 w-6 items-center  rounded-lg border-2 border-text bg-background pb-1 text-center text-xs leading-none ">
          {productCount}
        </div>
      ) : null}
    </>
  );
};
