import Image from "next/image";
import Link from "next/link";
import ProductCarousel from "./components/carousel";
import { Products } from "./components/carousel";
import { Review } from "./components/mainReviews";
import { Bento } from "./components/mainBento";
import { FirstLook } from "./components/mainFirstLook";
import { Features } from "./components/features";
import "./page.css";

export default function Home() {
  const products: Products = [
    { image: "/img/chocolate3.png", name: "Product 1", id: 1 },
    { image: "/img/chocolate3.png", name: "Product 2", id: 2 },
    { image: "/img/chocolate3.png", name: "Product 3", id: 3 },
    { image: "/img/chocolate3.png", name: "Product 4", id: 4 },
    { image: "/img/chocolate3.png", name: "Product 5", id: 5 },
    { image: "/img/chocolate3.png", name: "Product 6", id: 6 },
    { image: "/img/chocolate3.png", name: "Product 7", id: 7 },
    { image: "/img/chocolate3.png", name: "Product 8", id: 8 },
    { image: "/img/chocolate3.png", name: "Product 9", id: 9 },
    { image: "/img/chocolate3.png", name: "Product 10", id: 10 },
  ];

  return (
    //The first section with an image of the product, a brief description of it and a purchase button
    <main className=" flex min-h-screen w-full flex-col items-center justify-between bg-background ">
      <FirstLook />

      {/* The beginning of the second section with three blocks why is this product
      so great */}

      <h1 className="flex pb-20  text-5xl text-text max-md:pb-4 max-md:text-4xl">
        <strong> Why our products?</strong>
      </h1>
      <Features />

      {/* Carousel with display of available products */}
      <h1 className="flex  pt-32  text-5xl text-text max-md:text-4xl">
        <strong>Take a look at our most popular products</strong>
      </h1>
      <section className="flex h-[32rem] w-full  items-center justify-center">
        <ProductCarousel products={products} />
      </section>

      {/* Blocks with statistics and brand history*/}
      <Bento />

      {/* section with customer reviews */}
      <section className="flex w-4/5 flex-col items-center">
        <h1 className="flex  pt-32  text-5xl text-text max-md:text-4xl">
          <strong>Testimonials</strong>
        </h1>
        <h2 className="flex  pb-5 pt-8 text-2xl font-normal text-text max-md:text-xl">
          What people are saying about this product.
        </h2>
        <Review />
      </section>
    </main>
  );
}
