import ProductCarousel from "./components/carousel";
import { Products } from "./components/carousel";
import { Review } from "./components/mainReviews";
import { Bento } from "./components/mainBento";
import { FirstLook } from "./components/mainFirstLook";
import { Features } from "./components/features";
import { FAQ } from "./components/FAQSection";
import { RegistrationCall } from "./components/callToRegistration";
import "./page.css";

export default function Home() {
  const products: Products = [
    { image: "/img/brown.png", name: "Nullam vitae ", id: 1 },
    { image: "/img/violet.png", name: "Cras sed", id: 2 },
    { image: "/img/blue.png", name: "Pellentesque cursus", id: 3 },
    { image: "/img/brown.png", name: "Etiam pulvinar", id: 4 },
    { image: "/img/violet.png", name: "Sed auctor", id: 5 },
    { image: "/img/blue.png", name: "Aenean finibus", id: 6 },
    { image: "/img/brown.png", name: "Curabitur vestibulum", id: 7 },
    { image: "/img/violet.png", name: "Duis vestibulum", id: 8 },
    { image: "/img/blue.png", name: "Suspendisse", id: 9 },
    { image: "/img/brown.png", name: "Aliquam fermentum", id: 10 },
  ];

  return (
    //The first section with an image of the product, a brief description of it and a purchase button
    <main className=" flex min-h-screen w-full flex-col items-center justify-between bg-background ">
      <FirstLook />
      {/* The beginning of the second section with three blocks why is this product
      so great */}
      <h1 className="z-0  pb-20 text-5xl text-text max-md:pb-4 max-md:text-4xl">
        <strong> Why our products?</strong>
      </h1>
      {/* //div with background image */}

      <div className="absolute  top-[43rem] z-10 h-3/4 w-full bg-[url('/img/hazelnutReal.png')]  bg-15% bg-left-top bg-no-repeat max-md:hidden "></div>

      <Features />
      {/* Carousel with display of available products */}
      <h1 className="flex  pt-32  text-5xl text-text max-md:pl-2 max-md:text-4xl">
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
      {/* Frequently asked questions section */}
      <FAQ />

      {/* offer to register on the site for a discount on the first purchase */}
      <RegistrationCall />
    </main>
  );
}
