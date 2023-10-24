import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    //The first section with an image of the product, a brief description of it and a purchase button
    <main className="  flex min-h-screen flex-col items-center justify-between bg-background">
      <section className="flex flex-row  bg-[url('/img/beansReal.png')] bg-15% bg-right-top bg-no-repeat   p-24">
        <div className="self-up relative flex flex-col  pl-56 pr-40 pt-20 ">
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
          className="relative ml-0 mr-20 flex flex-row self-center "
          alt="Chocolate Bar Logo"
          width={580}
          height={440}
        />
      </section>

      {/* The beginning of the second section with three blocks why is this product
      so great */}

      <h1 className="flextext-5xl pb-20  text-5xl text-text">
        <strong> Why our products?</strong>
      </h1>
      <section className="flex h-96 flex-row justify-center gap-32 bg-background  pb-6   text-citrine">
        <section className="bg-bacgroundCard flex w-1/5 flex-col items-center rounded-md p-4 text-center">
          <img src="/svg/recipes.svg" className="h-24 w-24"></img>
          <h2 className="pb-5 pt-5 text-5xl">Originality</h2>
          <p className="leading-loose">
            We use unique recipes, combining tradition and innovation to create
            chocolate that provides a unique gastronomic experience.
          </p>
        </section>
        <section className="bg-bacgroundCard flex w-1/5 flex-col  items-center rounded-md  p-4  text-center">
          <img src="/svg/chocolate-bar.svg" className="h-24 w-24"></img>
          <h2 className="pb-5 pt-5 text-5xl">Variety</h2>
          <p className="leading-loose">
            Our assortment offers a wide range of flavor compositions, from
            classic combinations to bold experiments, satisfying the needs of
            the most refined chocolate connoisseurs.
          </p>
        </section>
        <section className="bg-bacgroundCard flex w-1/5   flex-col items-center rounded-md p-4 text-center">
          <img src="/svg/leaf-nature-plant.svg" className="h-24 w-24"></img>
          <h2 className="pb-5 pt-5 text-5xl">Natural</h2>
          <p className="leading-loose">
            We are proud that our chocolate contains only natural ingredients
            without artificial additives, which provides not only taste, but
            also care for the health of our consumers.
          </p>
        </section>
      </section>
    </main>
  );
}
