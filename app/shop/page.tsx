"use client";

import { useState } from "react";
import { useAppSelector } from "../../lib/hooks";
import { selectProducts } from "../../lib/features/productsSlice";
import { ListOfParametrs } from "@/components/filterList";

export default function Home() {
  const [sortedBy, setSortedBy] = useState<string>("By popularity");
  const [query, setQuery] = useState<string>("");
  const [typeFilters, setTypeFilters] = useState<string[]>([]);
  const [colorFilters, setColorFilters] = useState<string[]>([]);

  const categories: string[] = ["blue", "violet", "brown"];
  const schocoladeType: string[] = ["dark", "white", "milk"];

  const products = useAppSelector(selectProducts);
  const productsList = products.products;
  // the part with handlers for each type of product
  const handleTypeFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const checked = event.target.checked;
    const category = event.target.name;
    setTypeFilters(
      (prevFilters) =>
        checked
          ? [...prevFilters, category] // Add if checked
          : prevFilters.filter((filter) => filter !== category), // Remove if unchecked
    );
  };

  const handleColorFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const checked = event.target.checked;
    const category = event.target.name;
    setColorFilters(
      (prevFilters) =>
        checked
          ? [...prevFilters, category] // Add if checked
          : prevFilters.filter((filter) => filter !== category), // Remove if unchecked
    );
  };

  // all filters applied together

  const filteredProducts = productsList.filter((product) => {
    // Check if the product's type matches any selected type filter
    const typeMatch =
      typeFilters.length === 0 ||
      typeFilters.some((filter) => filter === product.type);
    console.log(typeMatch);

    // Check if the product's color matches any selected color filter,
    // but only if there are active color filters
    const colorMatch =
      colorFilters.length === 0 ||
      colorFilters.some((filter) => filter === product.typeColor);
    console.log(colorMatch);

    return typeMatch && colorMatch;
  });

  // // the part with sorting

  const sortedProducts = filteredProducts.toSorted((a, b) => {
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
      <div className="flex w-4/5 ">
        <aside className="filters mt-7 flex w-1/6 flex-col justify-start rounded-md  border-2 border-text  bg-primary p-5 pl-0">
          {/* categories to filter */}
          <h1 className="pl-5 pt-5 text-3xl text-text">Filters</h1>

          <h2 className="pl-5 pt-5 text-2xl text-text">Color</h2>
          <ListOfParametrs
            categories={categories}
            handleCategoryFilterChange={handleColorFilterChange}
          />

          <h2 className="pl-5 pt-5 text-2xl text-text">Type</h2>
          <ListOfParametrs
            categories={schocoladeType}
            handleCategoryFilterChange={handleTypeFilterChange}
          />
        </aside>
        <div className="flex w-3/5 flex-col items-center">
          <div className="m-4 mt-7 flex w-11/12 justify-between self-start rounded-md border-2 border-text bg-primary p-2">
            <h1 className=" flex text-text">
              Result {filteredProducts.length}
            </h1>
            <select
              id="sort-select"
              value={sortedBy}
              className="flex w-1/6 justify-end bg-primary text-text"
              onChange={(e) => setSortedBy(e.target.value)}
            >
              <option value="By popularity"> By popularity </option>
              <option value="By price: low-high"> By price: low-high </option>
              <option value="By price: high-low"> By price: high-low </option>
            </select>
          </div>
          <section className="products flex w-full flex-row flex-wrap justify-start self-start pt-10">
            {sortedProducts.map(({ image, name, id, price, totalSold }) => (
              <section
                className=" img-slider-card max-h-auto m-7 flex w-1/4 flex-col items-center  rounded-md border-t-2 border-text  bg-primary p-4 text-center "
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
