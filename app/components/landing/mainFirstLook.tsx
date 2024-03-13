import Link from "next/link";
import Image from "next/image";

export const FirstLook = () => {
  return (
    <section className="flex flex-row  bg-[url('/img/beansReal.png')] bg-15% bg-right-top bg-no-repeat p-24 max-[1300px]:pr-0 max-lg:p-16 max-md:flex-col max-md:bg-none max-md:p-0">
      <div className="self-up relative flex flex-col  pl-56 pr-40 pt-20 max-[1300px]:pl-5 max-xl:pr-0 max-lg:pl-10 max-lg:pr-0 max-md:p-7">
        <h1 className="pb-8  text-5xl text-text ">
          <strong>Sweet Gastronomic Journey to the Center of Asia</strong>
        </h1>
        <p className=" pb-8  font-bold  text-text">
          Our chocolate is a magical combination of the natural beauty of
          Kazakhstan and unsurpassed taste. Each tile is a unique journey
          through the endless steppes and mountain peaks, permeated with gentle
          notes of local traditions.
        </p>
        <div className=" flex flex-row  items-center ">
          <Link
            className="flex h-16 items-center justify-center rounded-md bg-secondary  px-2 pl-2 pr-4  text-center text-text"
            href="/shop"
          >
            <strong>ORDER ONLINE</strong>
          </Link>
          <div className="flex pl-4 text-left text-text">
            <strong>
              More than 10,000 people have already ordered from us online!
            </strong>
          </div>
        </div>
      </div>
      <Image
        src="/img/mainProduct.png"
        className=" ml-0 mr-20 flex h-full min-h-[600px] w-full min-w-[500px] flex-row self-center max-xl:mr-0 max-xl:mt-10 max-xl:min-h-[400px] max-xl:min-w-[300px] max-lg:mr-0 max-md:hidden"
        alt="Chocolate Bar Logo"
        width={580}
        height={440}
      />
    </section>
  );
};
