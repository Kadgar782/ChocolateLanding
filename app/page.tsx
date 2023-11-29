import Image from "next/image";
import Link from "next/link";
import ProductCarousel from "./components/carousel";
import { Products } from "./components/carousel";
import { StarIcon } from "./components/star";
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
      <section className="flex flex-row  bg-[url('/img/beansReal.png')] bg-15% bg-right-top bg-no-repeat p-24 max-md:flex-col max-md:bg-none max-md:p-0">
        <div className="self-up relative flex flex-col  pl-56 pr-40 pt-20 max-md:p-10">
          <h1 className="pb-8  text-5xl text-text ">
            <strong>Sweet Gastronomic Journey to the Center of Asia</strong>
          </h1>
          <p className=" pb-8  font-bold  text-text">
            Our chocolate is a magical combination of the natural beauty of
            Kazakhstan and unsurpassed taste. Each tile is a unique journey
            through the endless steppes and mountain peaks, permeated with
            gentle notes of local traditions.
          </p>
          <div className=" flex flex-row  items-center ">
            <Link
              className="flex h-16 items-center rounded-md bg-accent  px-2 pl-2 pr-4  text-right text-text"
              target="_blank"
              href="/shop"
            >
              <strong>ORDER ONLINE</strong>
            </Link>
            <div className="flex pl-4 text-right text-text">
              <strong>
                More than 10,000 people have already ordered from us online!
              </strong>
            </div>
          </div>
        </div>
        <Image
          src="/singleUpscale.png"
          className="relative ml-0 mr-20 flex flex-row self-center max-md:hidden"
          alt="Chocolate Bar Logo"
          width={580}
          height={440}
        />
      </section>

      {/* The beginning of the second section with three blocks why is this product
      so great */}

      <h1 className="flex pb-20  text-5xl text-text max-md:pb-4 max-md:text-4xl">
        <strong> Why our products?</strong>
      </h1>
      <section className="flex h-96 flex-row justify-center gap-32  bg-background   pb-6 text-citrine max-md:h-full max-md:flex-col  max-md:items-center max-md:gap-3 ">
        <section className="flex w-1/5 flex-col items-center rounded-md bg-bacgroundCard p-4 text-center max-md:w-4/5">
          <img src="/svg/recipes.svg" className="h-24 w-24"></img>
          <h2 className="pb-5 pt-5 text-5xl">Originality</h2>
          <p className="leading-loose">
            We use unique recipes, combining tradition and innovation to create
            chocolate that provides a unique gastronomic experience.
          </p>
        </section>
        <section className="flex w-1/5 flex-col items-center  rounded-md bg-bacgroundCard  p-4  text-center max-md:w-4/5">
          <img src="/svg/chocolate-bar.svg" className="h-24 w-24"></img>
          <h2 className="pb-5 pt-5 text-5xl">Variety</h2>
          <p className="leading-loose">
            Our assortment offers a wide range of flavor compositions, from
            classic combinations to bold experiments, satisfying the needs of
            the most refined chocolate connoisseurs.
          </p>
        </section>
        <section className="flex w-1/5 flex-col items-center rounded-md bg-bacgroundCard p-4 text-center max-md:w-4/5">
          <img src="/svg/leaf-nature-plant.svg" className="h-24 w-24"></img>
          <h2 className="pb-5 pt-5 text-5xl">Natural</h2>
          <p className="leading-loose">
            We are proud that our chocolate contains only natural ingredients
            without artificial additives, which provides not only taste, but
            also care for the health of our consumers.
          </p>
        </section>
      </section>

      {/* Carousel with display of available products */}
      <h1 className="flex  pt-32  text-5xl text-text max-md:text-4xl">
        <strong>Take a look at our most popular products</strong>
      </h1>
      <section className="flex h-[32rem] w-full  items-center justify-center">
        <ProductCarousel products={products} />
      </section>

      {/* Blocks with statistics and brand history*/}

      <section className="bento  w-4/5">
        <section className="grid grid-flow-row-dense  grid-cols-6 content-center justify-center gap-4   max-md:grid-cols-1 max-md:grid-rows-1 ">
          <div className="col-span-4  flex min-h-[20rem] flex-col place-content-center rounded bg-primary pb-20 pt-20 text-5xl font-bold text-background max-md:pl-12">
            <h1 className=" flex place-content-center">
              More than 200K sales annually
            </h1>
            <h2 className=" flex place-content-center text-2xl max-md:pr-12 max-md:pt-5">
              and counting...
            </h2>
          </div>
          <div className="col-span-2 flex min-h-[20rem] flex-col place-content-center rounded bg-secondary pb-20 pt-20 text-4xl font-bold text-text max-md:col-span-4  max-md:pl-12 ">
            <h1 className="flex place-content-center content-center">
              100% Natural Ingredients!
            </h1>
            <h2 className=" flex place-content-center text-xl  max-md:pr-7  max-md:pt-5">
              we care about your health
            </h2>
          </div>
          <div className="col-span-3 flex max-h-[4rem] min-h-[2rem] flex-col place-content-center rounded  bg-text pb-20 pt-20 text-3xl font-bold text-background max-md:col-span-4">
            <h1 className="flex place-content-center">
              Delivery to almost anywhere in the world
            </h1>
            <Link
              target="_blank"
              className="link flex place-content-center text-xl"
              href="/"
            >
              Check if your county available
            </Link>
          </div>
          <div className="col-span-3 flex max-h-[4rem] min-h-[2rem] flex-col place-content-center rounded bg-accent pb-20 pt-20 text-3xl font-bold  text-background max-md:col-span-4">
            <h1 className="flex place-content-center content-center">
              100 K+ reviews
            </h1>
            <Link
              href="/"
              target="_blank"
              className="link flex place-content-center text-xl"
            >
              You can leave your own or watch others
            </Link>
          </div>
        </section>
      </section>
      {/* section with customer reviews */}

      <section className="flex w-4/5 flex-col items-center">
        <h1 className="flex  pt-32  text-5xl text-text max-md:text-4xl">
          <strong>Testimonials</strong>
        </h1>
        <h2 className="flex  pb-5 pt-8 text-2xl font-normal text-text max-md:text-xl">
          What people are saying about this product.
        </h2>

        {/* it is necessary to make a component out of this */}

        <section className="flex h-96 flex-row justify-center gap-32  bg-background   pb-6 text-citrine max-md:h-full max-md:flex-col  max-md:items-center max-md:gap-3 ">
          <section className="flex w-1/3 flex-col items-center rounded-md bg-bacgroundCard p-4 text-center max-md:w-4/5">
            <div className="reviever flex w-full flex-row items-center gap-5 p-5 pb-1 ">
              <div className="h-20 w-20 rounded-full border-2 border-citrine bg-primary"></div>
              <div>
                <h2 className=" text-xl">Original User</h2>
                <span className=" opacity-50">Product Owner</span>
              </div>
            </div>
            <div className="flex-start flex self-start pl-4">
              <StarIcon
                rewriteClass={"h-10 w-full fill-accent stroke-accent"}
              />
              <StarIcon
                rewriteClass={"h-10 w-full fill-accent stroke-accent"}
              />
              <StarIcon
                rewriteClass={"h-10 w-full fill-accent stroke-accent"}
              />
              <StarIcon
                rewriteClass={"h-10 w-full fill-accent stroke-accent"}
              />
              <StarIcon
                rewriteClass={"h-10 w-full fill-accent stroke-accent"}
              />
            </div>

            <p className="leading-loose">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vitae scelerisque urna. Duis in ligula.
            </p>
          </section>
          <section className="flex w-1/3 flex-col items-center rounded-md bg-bacgroundCard p-4 text-center max-md:w-4/5">
            <div className="reviever flex w-full flex-row items-center gap-5 p-5 pb-1 ">
              <div className="h-20 w-20 rounded-full border-2 border-citrine bg-secondary"></div>
              <div>
                <h2 className=" text-xl">Not Original User</h2>
                <span className=" opacity-50">Product Owner</span>
              </div>
            </div>
            <div className="flex-start flex self-start pl-4">
              <StarIcon
                rewriteClass={"h-10 w-full fill-accent stroke-accent"}
              />
              <StarIcon
                rewriteClass={"h-10 w-full fill-accent stroke-accent"}
              />
              <StarIcon
                rewriteClass={"h-10 w-full fill-accent stroke-accent"}
              />
              <StarIcon
                rewriteClass={"h-10 w-full fill-accent stroke-accent"}
              />
              <StarIcon
                rewriteClass={"h-10 w-full fill-accent stroke-accent"}
              />
            </div>

            <p className="leading-loose">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vitae scelerisque urna. Duis in ligula.
            </p>
          </section>
          <section className="flex w-1/3 flex-col items-center rounded-md bg-bacgroundCard p-4 text-center max-md:w-4/5">
            <div className="reviever flex w-full flex-row items-center gap-5 p-5 pb-1 ">
              <div className="h-20 w-20 rounded-full border-2 border-citrine bg-accent"></div>
              <div>
                <h2 className=" text-xl">Least Original User</h2>
                <span className=" opacity-50">Product Owner</span>
              </div>
            </div>
            <div className="flex-start flex self-start pl-4">
              <StarIcon
                rewriteClass={"h-10 w-full fill-accent stroke-accent"}
              />
              <StarIcon
                rewriteClass={"h-10 w-full fill-accent stroke-accent"}
              />
              <StarIcon
                rewriteClass={"h-10 w-full fill-accent stroke-accent"}
              />
              <StarIcon
                rewriteClass={"h-10 w-full fill-accent stroke-accent"}
              />
              <StarIcon
                rewriteClass={"h-10 w-full fill-accent stroke-accent"}
              />
            </div>

            <p className="leading-loose">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vitae scelerisque urna. Duis in ligula.
            </p>
          </section>
        </section>
      </section>
    </main>
  );
}
