"use client";

import { SetStateAction, useState } from "react";
import { Dialog, DialogBody, IconButton } from "@material-tailwind/react";
import { useAppSelector } from "../../lib/hooks";
import { selectProducts } from "../../lib/features/productsSlice";
import { ArrowDownUp, SlidersHorizontal } from "lucide-react";
import { Dispatch, ChangeEventHandler } from "react";
import { SingleProduct } from "../../lib/features/productsSlice";
import { FilterShop } from "@/components/shopFilter";

export interface propsFilters {
  filteredProducts: SingleProduct[];
  selectedCategoriesColors: string[];
  selectedCategoriesType: string[];
  inputValueMin: number;
  inputValueMax: number;
  minPrice: number;
  maxPrice: number;
  setInputValueMin: Dispatch<SetStateAction<number>>;
  setInputValueMax: Dispatch<SetStateAction<number>>;
  handleColorFilterChange: ChangeEventHandler<HTMLInputElement>;
  handleTypeFilterChange: ChangeEventHandler<HTMLInputElement>;
}

export default function Home() {
  const [sortedBy, setSortedBy] = useState<string>("By popularity");
  const [query, setQuery] = useState<string>("");
  const [selectedCategoriesColors, setSelectedColors] = useState<string[]>([]);
  const [selectedCategoriesType, setSelectedType] = useState<string[]>([]);
  const [dialogFilterIsOpen, setFilterDialogIsOpen] = useState<boolean>(false);
  const [dialogSortIsOpen, setSortDialogIsOpen] = useState<boolean>(false);

  const products = useAppSelector(selectProducts);
  const productsList = products.products;

  // the part with handlers for each type of product
  const handleTypeFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const checked = event.target.checked;
    const category = event.target.name;
    setSelectedType(
      (prevCategories) =>
        checked
          ? [...prevCategories, category] // Add if checked
          : prevCategories.filter((filter) => filter !== category), // Remove if unchecked
    );
  };

  const handleColorFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const checked = event.target.checked;
    const color = event.target.name;
    setSelectedColors(
      (prevFilters) =>
        checked
          ? [...prevFilters, color] // Add if checked
          : prevFilters.filter((filter) => filter !== color), // Remove if unchecked
    );
  };
  //open Dialog
  const handleFilterDialogOpen = () =>
    setFilterDialogIsOpen(!dialogFilterIsOpen);

  const handleSortDialogOpen = () => setSortDialogIsOpen(!dialogSortIsOpen);

  const handleSortChange = (filter: string) => {
    setSortedBy(filter);
    setSortDialogIsOpen(!dialogSortIsOpen);
  };

  // all filters applied together

  const filteredProducts = productsList.filter((product) => {
    // Check if the product's type matches any selected type filter
    const typeMatch =
      selectedCategoriesType.length === 0 ||
      selectedCategoriesType.some((filter) => filter === product.type);

    // Check if the product's color matches any selected color filter,
    // but only if there are active color filters
    const colorMatch =
      selectedCategoriesColors.length === 0 ||
      selectedCategoriesColors.some((filter) => filter === product.typeColor);

    return typeMatch && colorMatch;
  });

  const prices = filteredProducts.map((products) => products.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const [inputValueMin, setInputValueMin] = useState(minPrice);
  const [inputValueMax, setInputValueMax] = useState(maxPrice);

  const priceRange = () => {
    const values: number[] = [];
    for (let i = inputValueMin; i <= inputValueMax; i++) {
      values.push(i);
    }
    return values;
  };

  const priceValue = priceRange();
  const filteredProductsWithPrices = filteredProducts.filter((product) =>
    priceValue.includes(product.price),
  );

  const propsForFilter = {
    filteredProducts,
    selectedCategoriesColors,
    selectedCategoriesType,
    inputValueMin,
    inputValueMax,
    minPrice,
    maxPrice,
    setInputValueMin,
    setInputValueMax,
    handleColorFilterChange,
    handleTypeFilterChange,
  };

  // // the part with sorting

  const sortedProducts = filteredProductsWithPrices.toSorted((a, b) => {
    switch (sortedBy) {
      case "By popularity":
        return b.totalSold - a.totalSold; // Descending popularity
      case "By price: low-high":
        return a.price - b.price; // Ascending price
      case "By price: high-low":
        return b.price - a.price; // Descending price
      default:
        return 0; // No sorting
    }
  });
  return (
    <section className="wholePage flex min-h-screen w-full  justify-end bg-background">
      <div className="flex w-4/5 max-[1399px]:w-full ">
        <aside className="filters mt-7 flex w-1/6 flex-col justify-start rounded-md  border-2 border-text  bg-primary p-5 pl-0 max-[1399px]:ml-10 max-lg:hidden">
          {/* categories to filter */}
          <FilterShop props={propsForFilter} />
        </aside>
        <div className="flex w-3/5 flex-col items-center max-[1399px]:w-4/5 max-lg:w-full">
          <div className=" m-4 mt-7 flex w-11/12 justify-between self-start rounded-md border-2 border-text bg-primary p-2">
            <h1 className=" flex self-center text-text">
              Result {filteredProductsWithPrices.length}
            </h1>
            <div className="flex w-2/5 items-end justify-end">
              <select
                id="sort-select"
                value={sortedBy}
                className=" flex min-w-[130px] justify-end  bg-primary  text-text  max-lg:hidden"
                onChange={(e) => setSortedBy(e.target.value)}
              >
                <option className="flex shrink" value="By popularity">
                  By popularity
                </option>
                <option className="flex" value="By price: low-high">
                  By price: low-high
                </option>
                <option className="flex" value="By price: high-low">
                  By price: high-low
                </option>
              </select>
              {/* Dialog with sort */}
              <IconButton
                onClick={handleSortDialogOpen}
                className=" mr-4 hidden w-1/6 items-center self-center  max-lg:flex"
              >
                <ArrowDownUp className="flex text-text" />
              </IconButton>
              <Dialog open={dialogSortIsOpen} handler={handleSortDialogOpen}>
                <DialogBody className="sort flex h-full w-11/12 flex-col items-start justify-start rounded-md  border-2 border-text  bg-primary p-2">
                  <button
                    className="flex  bg-primary p-2 text-text"
                    onClick={() => handleSortChange("By popularity")}
                  >
                    By popularity
                  </button>
                  <button
                    className="flex  bg-primary p-2 text-text"
                    onClick={() => handleSortChange("By price: low-high")}
                  >
                    By price: low-high
                  </button>
                  <button
                    className="flex  bg-primary p-2 text-text"
                    onClick={() => handleSortChange("By price: high-low")}
                  >
                    By price: high-low
                  </button>
                </DialogBody>
              </Dialog>
              {/* Dialog with Filter */}
              <IconButton
                onClick={handleFilterDialogOpen}
                className=" mr-4 hidden w-1/6 items-center self-center max-lg:flex"
              >
                <SlidersHorizontal className="flex text-text" />
              </IconButton>

              <Dialog
                open={dialogFilterIsOpen}
                handler={handleFilterDialogOpen}
              >
                <DialogBody className="filters flex h-full w-11/12 flex-col justify-start rounded-md  border-2 border-text  bg-primary p-2">
                  <FilterShop props={propsForFilter} />
                  <button
                    className="flex self-end bg-primary p-2 text-text"
                    onClick={handleFilterDialogOpen}
                  >
                    Cancel
                  </button>
                </DialogBody>
              </Dialog>
            </div>
          </div>
          <section className="products flex w-full flex-row flex-wrap justify-start self-start pt-10 max-[660px]:justify-center ">
            {sortedProducts.map(({ image, name, id, price, totalSold }) => (
              <section
                className=" img-slider-card max-h-auto m-7 flex w-1/4 flex-col items-center  rounded-md border-t-2 border-text  bg-primary p-4 text-center  max-[660px]:w-1/3"
                key={id}
              >
                <img
                  key={id}
                  src={image}
                  alt={name}
                  className="img-slider-img  flex h-auto max-h-[164px] max-w-full flex-shrink-0 flex-grow-0 hover:-translate-y-1 lg:max-h-[222px]"
                />
                <h1 className="img-slider-text text-text">{price}$</h1>
                <h1 className="img-slider-text text-text">{totalSold} sold</h1>
                <h2 className="img-slider-text text-text">{name}</h2>
              </section>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
}
