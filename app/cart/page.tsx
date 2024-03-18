"use client";

import {
  selectCartProducts,
  removeSelectedProducts,
  selectAllProductsInCart,
  CartItem,
} from "../../lib/features/productsInCartSlice";
import { ProductInCart } from "@/components/cart/cartProduct";
import { useAppSelector, useAppDispatch } from "../../lib/hooks";
import { Trash2 } from "lucide-react";
import Link from "next/link";

export default function Cart() {
  const products = useAppSelector(selectCartProducts);
  const dispatch = useAppDispatch();
  const cartProductsList = products.cart;
  const allIsSelectedTrue = cartProductsList.every(
    (item) => item.isSelected === true,
  );

  //this should be calculated on the server, on the real site
  const calculateTotalPrice = (products: CartItem[]) => {
    // Efficiently calculate total price using reduce
    return products.reduce(
      (accumulator, product) =>
        accumulator + product.price * product.quantityInCart,
      0,
    );
  };
  // This function can be more complicated, but for the sake of the example I'm taking that the first purchase will be discounted by 10 percent
  const calculateDiscount = (totalPrice: number) => {
    return Number((totalPrice * 0.1).toFixed(2));
  };

  const totalProductPrice = calculateTotalPrice(cartProductsList);
  const totalProductDiscount = calculateDiscount(totalProductPrice);
  const baseApi = "http://localhost:3000/";

  const handleRemoveSelectedProducts = () => {
    dispatch(removeSelectedProducts());
  };
  const handleSelectAllProducts = () => {
    dispatch(selectAllProductsInCart());
  };

  if (cartProductsList.length !== 0) {
    return (
      <section className="wholePage flex min-h-screen w-full  items-center justify-center bg-background">
        <div className="page l flex min-h-screen w-3/4 items-center justify-center  gap-14 bg-background  pt-16 max-md:w-full max-md:flex-col  max-md:gap-3  max-md:pb-0 ">
          <div className="m-4 flex w-[66%]  flex-col max-[1399px]:w-[50%] max-md:mx-0 max-md:w-[98%]">
            <h1 className=" border-b-2 border-text pb-3 text-3xl text-text">
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
          <div className="mt-7 flex h-[370px] w-[30%] flex-col items-center rounded-lg  bg-primary text-text max-[1399px]:w-[35%] max-md:mb-24  max-md:w-[90%]   max-md:pt-0">
            <div className="checkout flex h-2/5 w-4/5 shrink-0 flex-col items-center text-center">
              <div className="mt-4 flex h-14 w-full  rounded-lg bg-secondary">
                <Link
                  href="/check"
                  className=" w-full self-center  bg-secondary text-xl"
                >
                  Go to checkout
                </Link>
              </div>
              <p className=" pt-2 text-left">
                The available delivery methods and time can be selected when
                placing an order
              </p>
            </div>
            <div className="divider my-2 h-1 w-full bg-background"></div>
            <div className=" flex h-1/2 w-4/5 flex-col items-start">
              <h1 className="text-xl">
                <strong> Your shopping cart</strong>
              </h1>
              <div className="flex w-full flex-row justify-between">
                <p className="pt-3"> Products ({cartProductsList.length})</p>
                <p className="justify-end self-end">{totalProductPrice}$</p>
              </div>
              <div className="flex w-full flex-row justify-between">
                <p className="pt-3"> Discount 10%</p>
                <p className="justify-end self-end text-[#b14949]">
                  - {totalProductDiscount}$
                </p>
              </div>

              <div className="divider my-2 h-1 w-full bg-background"></div>
              <div className="flex w-full flex-row justify-between">
                <h1 className="text-xl">
                  <strong>Total cost</strong>
                </h1>
                <p className="justify-end self-end">
                  {totalProductPrice - totalProductDiscount}$
                </p>
              </div>
            </div>
          </div>
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
