"use client";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../lib/hooks";
import {
  SingleProduct,
  selectProducts,
} from "../../../lib/features/productsSlice";
import Link from "next/link";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<SingleProduct[]>([]);

  const products = useAppSelector(selectProducts);

  const productsList = products.products;

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchTerm(event.target.value.toLowerCase()); // Make search case-insensitive
  };

  const handleBlur = () => {
    // without a timeout, clicking on the link does not work
    setTimeout(() => setShowResults(false), 200);
  };

  const filterProducts = () => {
    if (searchTerm) {
      // Only filter if search term has a value
      const results = productsList.filter((product) =>
        product.name.toLowerCase().includes(searchTerm),
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]); // Set filteredProducts to empty array if no search term
    }
  };
  const changeShowResults = () => {
    setShowResults(!showResults);
  };

  useEffect(() => {
    filterProducts(); // Perform initial filtering on component mount
  }, [searchTerm]); // Re-filter whenever searchTerm changes

  return (
    <div className="searchBar relative flex min-h-[40px] w-1/3 flex-col content-center justify-center self-center rounded-lg border-2 border-text bg-primary max-md:mb-2 max-md:mt-2 max-md:w-11/12">
      <input
        type="text"
        placeholder="Search"
        className="h-full w-full rounded-lg border-text  bg-primary pl-2 text-text outline-none"
        value={searchTerm}
        onChange={handleSearchChange}
        onFocus={changeShowResults}
        onBlur={handleBlur}
      />

      <ul
        className={`search-results ${
          showResults ? "flex" : "hidden"
        } absolute top-full   max-h-64  w-full list-none flex-col overflow-y-auto rounded-lg border-2 border-text bg-background p-2`}
      >
        {filteredProducts.length !== 0 ? (
          filteredProducts.map((product) => (
            <Link
              key={product.id}
              className="flex w-full"
              href={`/product/${product.id}`}
            >
              <li className="flex w-full" key={product.id}>
                {product.name}
              </li>
            </Link>
          ))
        ) : (
          <li className="flex p-1"> No such products</li>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
