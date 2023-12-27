"use client";

import { useState } from "react";
import {
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { useAppSelector } from "../../lib/hooks";
import { selectProducts } from "../../lib/features/productsSlice";

export default function Home() {
  const [filteredBy, setFilteredBy] = useState<string>("popularity");
  const [query, setQuery] = useState<string>("");

  const categories: string[] = ["blue", "violet", "brown"];

  const [categoryFilters, setCategoryFilters] = useState<string[]>([]);

  const products = useAppSelector(selectProducts);

  const handleCategoryFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const checked = event.target.checked;
    const category = event.target.name;

    setCategoryFilters(
      (prevFilters) =>
        checked
          ? [...prevFilters, category] // Add if checked
          : prevFilters.filter((filter) => filter !== category), // Remove if unchecked
    );
  };

  const productsList = products.products;

  const filteredProducts =
    categoryFilters.length > 0
      ? productsList.filter((product) =>
          categoryFilters.find((el) => el === product.categories),
        )
      : productsList;
  return (
    <section className="wholePage flex min-h-screen w-full justify-end bg-background">
      <aside className="mt-10 flex w-1/5 border p-5">
        <section className=" filters flex w-4/5 justify-start rounded-md border bg-primary">
          {/* categories to filter */}
          <h1 className="pl-5 pt-5 text-3xl text-text">Filters</h1>
          <Card>
            <List>
              {categories.map((elm, index) => {
                return (
                  <ListItem className="p-0" key={index}>
                    <label
                      htmlFor="vertical-list-react ${index}"
                      className="flex w-full cursor-pointer items-center px-3 py-2"
                    >
                      <ListItemPrefix className="mr-3">
                        <Checkbox
                          id="${index}"
                          ripple={false}
                          crossOrigin=""
                          name={elm}
                          className="hover:before:opacity-0"
                          onChange={handleCategoryFilterChange}
                          containerProps={{
                            className: "p-0",
                          }}
                        />
                      </ListItemPrefix>
                      <Typography color="blue-gray" className="font-medium">
                        {elm}
                      </Typography>
                    </label>
                  </ListItem>
                );
              })}
            </List>
          </Card>
        </section>
      </aside>
      <div className="flex w-3/4 flex-col items-center ">
        <section className="products ml-10 flex w-3/4 flex-row flex-wrap justify-center border pt-10">
          {filteredProducts.map(({ image, name, id }) => (
            <section
              className=" img-slider-card max-h-auto m-7 flex w-1/4  flex-col items-center rounded-md  bg-primary p-4 text-center "
              key={id}
            >
              <img
                key={id}
                src={image}
                alt={name}
                className="img-slider-img  flex h-auto max-h-[164px] max-w-full flex-shrink-0 flex-grow-0 hover:-translate-y-1 lg:max-h-[222px]"
              />
              <h1 className="img-slider-text text-text">{name}</h1>
            </section>
          ))}
        </section>
      </div>
    </section>
  );
}
