import Link from "next/link";

export const Bento = () => {
  return (
    <section className="bento  w-4/5">
      <section className="grid grid-flow-row-dense  grid-cols-6 content-center justify-center gap-4   max-xl:grid-cols-1 max-xl:grid-rows-1 ">
        <div className="col-span-4  flex min-h-[20rem] flex-col place-content-center rounded bg-bento pb-20 pt-20 text-5xl font-bold text-background max-xl:pl-12">
          <h1 className=" flex place-content-center max-[1380px]:text-4xl">
            More than 200K sales annually
          </h1>
          <h2 className=" flex place-content-center text-2xl max-xl:pr-12 max-xl:pt-5">
            and counting...
          </h2>
        </div>
        <div className="col-span-2 flex min-h-[20rem] flex-col place-content-center rounded bg-secondary pb-20 pt-20 text-4xl font-bold text-text max-xl:col-span-4  max-xl:pl-12 ">
          <h1 className="flex place-content-center content-center max-[1760px]:text-3xl max-[1480px]:text-2xl max-lg:text-4xl">
            100% Natural Ingredients!
          </h1>
          <h2 className=" flex place-content-center text-xl  max-xl:pr-7  max-xl:pt-5">
            we care about your health
          </h2>
        </div>
        <div className="col-span-3 flex max-h-[4rem] min-h-[2rem] flex-col place-content-center rounded  bg-text pb-20 pt-20 text-3xl font-bold text-background max-xl:col-span-4 max-xl:pl-3 max-xl:text-xl">
          <h1 className="flex place-content-center max-[1550px]:text-2xl">
            Delivery to almost anywhere in the world
          </h1>
          <Link
            target="_blank"
            className="link flex flex-col place-content-center items-center text-xl max-xl:text-base"
            href="/"
          >
            Check if your county available
            <span className="bottom-0 left-0 flex min-h-[3px] w-2/5 origin-bottom-right transform place-self-center bg-background duration-100 ease-in-out hover:scale-y-150 max-xl:w-4/5"></span>
          </Link>
        </div>
        <div className="col-span-3 flex max-h-[4rem] min-h-[2rem] flex-col place-content-center rounded bg-primary pb-20 pt-20 text-3xl font-bold  text-text max-xl:col-span-4">
          <h1 className="flex place-content-center content-center">
            100 K+ reviews
          </h1>
          <Link
            href="/"
            target="_blank"
            className="link flex flex-col place-content-center items-center text-xl max-xl:text-base"
          >
            You can leave your own or watch others
            <span className="bottom-0 left-0 flex min-h-[3px] w-3/5 origin-bottom-right transform place-self-center bg-text duration-100 ease-in-out hover:scale-y-150 max-xl:w-4/5 max-xl:text-base"></span>
          </Link>
        </div>
      </section>
    </section>
  );
};
