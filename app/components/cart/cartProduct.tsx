import { Trash2, Minus, Plus } from "lucide-react";
import { useAppDispatch } from "../../../lib/hooks";
import {
  increaseQuantity,
  removeFromCart,
  decreaseQuantity,
  selectProductInCart,
} from "../../../lib/features/productsInCartSlice";
import { CartUpdateParametrs } from "../../../lib/features/productsInCartSlice";
import { CartItem } from "../../../lib/features/productsInCartSlice";

export const ProductInCart: React.FC<{
  product: CartItem;
}> = ({ product }) => {
  const dispatch = useAppDispatch();
  const actionQuantity: CartUpdateParametrs = {
    id: product.id,
    quantityInCart: product.quantityInCart,
  };

  //cart actions
  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };
  const handleIncrease = () => {
    dispatch(increaseQuantity(actionQuantity));
  };
  const handleDecrease = () => {
    dispatch(decreaseQuantity(actionQuantity));
  };
  const handleSelect = () => {
    dispatch(selectProductInCart(product.id));
  };

  return (
    <div
      key={product.id}
      className="flex h-[140px] w-full border-2 border-t-0 border-text p-2 pt-3 text-text "
    >
      <label className="flex items-center pl-4">
        <input
          type="checkbox"
          name="checkbox-product"
          checked={product.isSelected}
          onChange={() => handleSelect()}
        />
      </label>
      <div className="flex h-24 w-24 items-center justify-center self-center px-4">
        <img className="flex h-full " src={product.image}></img>
      </div>
      <div className=" flex w-full max-w-[444px] flex-col">
        <h1>{product.name}</h1>
        <Trash2
          onClick={() => handleRemoveFromCart(product.id)}
          className="mt-5 flex w-[10%] cursor-pointer justify-start self-start text-text"
        />
      </div>
      <p className="flex px-3">{product.price}$</p>
      <div className="quantity flex max-h-6 w-[12%] items-center justify-center">
        <Minus
          className="w-{32px}  h-{32px} flex cursor-pointer"
          onClick={() => handleDecrease()}
        />
        <input
          className=" mx-4 flex w-11 items-center rounded-md border-2 border-text bg-background text-center"
          type="number"
          min="1"
          max="10"
          value={product.quantityInCart}
        />
        <Plus
          className="w-{32px} h-{32px} flex cursor-pointer "
          onClick={() => handleIncrease()}
        />
      </div>
    </div>
  );
};
