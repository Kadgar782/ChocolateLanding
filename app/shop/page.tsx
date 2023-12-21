"use client";

import { Products } from "@/components/carousel";
import { useState } from "react";
import type { InputProps } from "@material-tailwind/react";

export default function Home() {
  const products: Products = [
    { image: "/img/Brown.png", name: "Nullam vitae ", id: 1 },
    { image: "/img/Violet.png", name: "Cras sed", id: 2 },
    { image: "/img/Blue.png", name: "Pellentesque cursus", id: 3 },
    { image: "/img/Brown.png", name: "Etiam pulvinar", id: 4 },
    { image: "/img/Violet.png", name: "Sed auctor", id: 5 },
    { image: "/img/Blue.png", name: "Aenean finibus", id: 6 },
    { image: "/img/Brown.png", name: "Curabitur vestibulum", id: 7 },
    { image: "/img/Violet.png", name: "Duis vestibulum", id: 8 },
    { image: "/img/Blue.png", name: "Suspendisse", id: 9 },
    { image: "/img/Brown.png", name: "Aliquam fermentum", id: 10 },
  ];

  const filteredProducts: Products = [];
  const [query, setQuery] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [filteredBy, setFilteredBy] = useState<string>("popularity");

  return (
    <section className="wholePage flex min-h-screen w-full justify-end bg-background">
      <aside className="mt-10 flex w-1/5 border p-5">
        <section className=" filters flex w-4/5 justify-start rounded-md border bg-primary">
          <h1 className="pl-5 pt-5 text-3xl text-text">Filters</h1>
        </section>
      </aside>
      <div className="flex flex-col items-center justify-center">
        <section className="products ml-10 flex w-3/4 flex-row flex-wrap justify-center border pt-10">
          {/* In the future there will be filtered products here */}
          {products.map(({ image, name, id }) => (
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
