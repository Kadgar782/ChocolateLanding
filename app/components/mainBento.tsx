import Link from "next/link";

export const Bento = () => {
  return (
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
        <div className="col-span-3 flex max-h-[4rem] min-h-[2rem] flex-col place-content-center rounded  bg-text pb-20 pt-20 text-3xl font-bold text-background max-md:col-span-4 max-md:pl-3 max-md:text-xl">
          <h1 className="flex place-content-center">
            Delivery to almost anywhere in the world
          </h1>
          <Link
            target="_blank"
            className="link flex flex-col place-content-center items-center text-xl max-md:text-base"
            href="/"
          >
            Check if your county available
            <span className="bottom-0 left-0 flex min-h-[3px] w-2/5 origin-bottom-right transform place-self-center bg-background duration-100 ease-in-out hover:scale-y-150 max-md:w-4/5"></span>
          </Link>
        </div>
        <div className="col-span-3 flex max-h-[4rem] min-h-[2rem] flex-col place-content-center rounded bg-accent pb-20 pt-20 text-3xl font-bold  text-background max-md:col-span-4">
          <h1 className="flex place-content-center content-center">
            100 K+ reviews
          </h1>
          <Link
            href="/"
            target="_blank"
            className="link flex flex-col place-content-center items-center text-xl max-md:text-base"
          >
            You can leave your own or watch others
            <span className="bottom-0 left-0 flex min-h-[3px] w-3/5 origin-bottom-right transform place-self-center bg-background duration-100 ease-in-out hover:scale-y-150 max-md:w-4/5 max-md:text-base"></span>
          </Link>
        </div>
      </section>
    </section>
  );
};
