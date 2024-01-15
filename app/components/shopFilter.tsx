import { ChangeEventHandler, useState } from "react";
import { SingleProduct } from "../../lib/features/productsSlice";
import { ListOfParametrs } from "./shopFilterList";

export const FilterShop = ({
  filteredProducts,
  selectedCategoriesColors,
  selectedCategoriesType,
  handleColorFilterChange,
  handleTypeFilterChange,
}: {
  filteredProducts: SingleProduct[];
  selectedCategoriesColors: string[];
  selectedCategoriesType: string[];
  handleColorFilterChange: ChangeEventHandler<HTMLInputElement>;
  handleTypeFilterChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  // types of categories
  const color: string[] = ["blue", "violet", "brown"];
  const schocoladeType: string[] = ["dark", "white", "milk"];

  //   functions and variables for price filtering
  const prices = filteredProducts.map((products) => products.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const [inputValueMin, setInputValueMin] = useState(minPrice);
  const [inputValueMax, setInputValueMax] = useState(maxPrice);

  const minPriceString = minPrice.toString();
  const maxPriceString = maxPrice.toString();

  //  must try to make it more universal and think over some possible points

  const handleMaxInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    if (newValue > maxPrice) {
      setInputValueMax(maxPrice);
    } else if (newValue < inputValueMin) {
      setInputValueMax(inputValueMin);
    } else {
      setInputValueMax(newValue);
    }
  };

  const handleMinInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    if (newValue < minPrice) {
      setInputValueMin(minPrice);
    } else if (newValue > inputValueMax) {
      setInputValueMin(inputValueMax);
    } else {
      setInputValueMin(newValue);
    }
  };

  return (
    <>
      <h1 className="pl-5 pt-5 text-3xl text-text">Filters</h1>

      <h2 className="pl-5 pt-5 text-2xl text-text"> Price</h2>

      <div className="flex w-full flex-row justify-between space-x-2 pl-2">
        <div className="flex w-1/2 items-center justify-between ">
          <input
            type="number"
            id="minPrice"
            min={minPrice}
            value={inputValueMin}
            onChange={handleMinInputChange}
            className="w-full  rounded-md border border-text bg-background px-3 py-2 text-text focus:outline-none sm:text-sm"
            placeholder={minPriceString}
          />
        </div>

        <div className="flex w-1/2 items-center justify-between">
          <input
            type="number"
            id="maxPrice"
            max={maxPrice}
            onChange={handleMaxInputChange}
            className=" w-full rounded-md  border border-text bg-background px-3 py-2 text-text focus:outline-none sm:text-sm"
            value={inputValueMax}
            placeholder={maxPriceString}
          />
        </div>
      </div>
      <h2 className="pl-5 pt-5 text-2xl text-text">Color</h2>
      <ListOfParametrs
        selectedCategories={selectedCategoriesColors}
        categories={color}
        handleCategoryFilterChange={handleColorFilterChange}
      />

      <h2 className="pl-5 pt-5 text-2xl text-text">Type</h2>
      <ListOfParametrs
        selectedCategories={selectedCategoriesType}
        categories={schocoladeType}
        handleCategoryFilterChange={handleTypeFilterChange}
      />
    </>
  );
};
