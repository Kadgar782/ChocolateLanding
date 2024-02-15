import ProductCarousel from "./components/carousel";
import { Review } from "./components/landing/mainReviews";
import { Bento } from "./components/landing/mainBento";
import { FirstLook } from "./components/landing/mainFirstLook";
import { Features } from "./components/landing/mainFeatures";
import { FAQ } from "./components/landing/mainFAQSection";
import { RegistrationCall } from "./components/landing/callToRegistration";

export default function Home() {
  return (
    //The first section with an image of the product, a brief description of it and a purchase button
    <main className=" flex min-h-screen w-full flex-col items-center justify-between bg-background pt-16 max-md:pb-16">
      <FirstLook />
      {/* The beginning of the second section with three blocks why is this product
      so great */}
      <h1 className="z-0  pb-20 text-5xl text-text max-md:pb-4 max-md:text-4xl">
        <strong> Why our products?</strong>
      </h1>
      {/* //div with background image */}

      <div className="absolute top-[43rem] z-10 h-3/4 w-full  bg-[url('/img/hazelnutReal.png')] bg-15% bg-left-top bg-no-repeat max-md:hidden "></div>

      <Features />
      {/* Carousel with display of available products */}
      <h1 className="flex  pt-32  text-5xl text-text max-lg:text-4xl max-md:pl-2">
        <strong>Take a look at our most popular products</strong>
      </h1>
      <section className="flex h-[32rem] w-full  items-center justify-center">
        <ProductCarousel />
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
