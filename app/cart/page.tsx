"use client";

import { IconButton } from "@material-tailwind/react";
import {
  selectCartProducts,
  removeFromCart,
  updateQuantity,
} from "../../lib/features/productsInCartSlice";
import { SingleProduct } from "../../lib/features/productsSlice";
import { ProductInCart } from "@/components/cart/cartProduct";
import { useAppSelector, useAppDispatch } from "../../lib/hooks";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

interface CartSingleItem {
  id: number;
  quantityInCart: number;
}
interface CartUpdateParametrs {
  cart: CartSingleItem[];
}

export default function Cart() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const products = useAppSelector(selectCartProducts);
  const dispatch = useAppDispatch();
  const cartProductsList = products.cart;
  const {} = cartProductsList;
  const baseApi = "http://localhost:3000/";

  const handleCheckboxChange = (id: number) => {
    // Toggle the selection of the item with the given id
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(id)) {
        return prevSelectedItems.filter((item) => item !== id);
      } else {
        return [...prevSelectedItems, id];
      }
    });
  };

  const handleUpdateQuantity = (id: number, quantityInCart: number) => {
    // Update the quantity of a specific product in the cart
    dispatch(
      updateQuantity({
        id,
        quantityInCart,
      }),
    );
  };

  if (cartProductsList.length !== 0) {
    return (
      <section className="wholePage flex min-h-screen w-full  justify-center bg-background">
        <div className="flex w-[75%] flex-col pt-20 max-[1399px]:w-full  ">
          <h1 className=" border-b-2 border-text pb-3 text-lg text-text">
            My Cart
          </h1>
          {cartProductsList.map((product) => (
            <ProductInCart
              key={product.id}
              product={product}
              selectedItems={selectedItems}
              handleCheckboxChange={handleCheckboxChange}
            />
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
