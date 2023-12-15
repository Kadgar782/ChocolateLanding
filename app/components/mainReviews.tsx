import { StarIcon } from "./star";

export const Review = () => {
  return (
    <section className="flex h-96 flex-row justify-center gap-32  bg-background   pb-6 text-text max-lg:h-full max-lg:flex-col  max-lg:items-center max-lg:gap-16 max-md:gap-3 ">
      <section className="flex w-1/3 flex-col items-center rounded-md bg-primary p-4 text-center max-lg:w-1/2 max-md:w-4/5">
        <div className="reviever flex w-full flex-row items-center gap-5 p-5 pb-1 ">
          <div className="h-20 w-20 rounded-full border-2 border-citrine bg-primary"></div>
          <div>
            <h2 className=" text-xl">Original User</h2>
            <span className=" opacity-50">Product Owner</span>
          </div>
        </div>
        <div className="flex-start flex self-start pl-4">
          <StarIcon rewriteClass={"h-10 w-full fill-accent stroke-accent"} />
          <StarIcon rewriteClass={"h-10 w-full fill-accent stroke-accent"} />
          <StarIcon rewriteClass={"h-10 w-full fill-accent stroke-accent"} />
          <StarIcon rewriteClass={"h-10 w-full fill-accent stroke-accent"} />
          <StarIcon rewriteClass={"h-10 w-full fill-accent stroke-accent"} />
        </div>

        <p className="leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
          scelerisque urna. Duis in ligula.
        </p>
      </section>
      <section className="flex w-1/3 flex-col items-center rounded-md bg-primary p-4 text-center max-lg:w-1/2  max-md:w-4/5">
        <div className="reviever flex w-full flex-row items-center gap-5 p-5 pb-1 ">
          <div className="h-20 w-20 rounded-full border-2 border-citrine bg-primary"></div>
          <div>
            <h2 className=" text-xl">Not Original User</h2>
            <span className=" opacity-50">Product Owner</span>
          </div>
        </div>
        <div className="flex-start flex self-start pl-4">
          <StarIcon rewriteClass={"h-10 w-full fill-accent stroke-accent"} />
          <StarIcon rewriteClass={"h-10 w-full fill-accent stroke-accent"} />
          <StarIcon rewriteClass={"h-10 w-full fill-accent stroke-accent"} />
          <StarIcon rewriteClass={"h-10 w-full fill-accent stroke-accent"} />
          <StarIcon rewriteClass={"h-10 w-full fill-accent stroke-accent"} />
        </div>

        <p className="leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
          scelerisque urna. Duis in ligula.
        </p>
      </section>
      <section className="flex w-1/3 flex-col items-center rounded-md bg-primary p-4 text-center max-lg:w-1/2  max-md:w-4/5">
        <div className="reviever flex w-full flex-row items-center gap-5 p-5 pb-1 ">
          <div className="h-20 w-20 rounded-full border-2 border-citrine bg-accent"></div>
          <div>
            <h2 className=" text-xl">Least Original User</h2>
            <span className=" opacity-50">Product Owner</span>
          </div>
        </div>
        <div className="flex-start flex self-start pl-4">
          <StarIcon rewriteClass={"h-10 w-full fill-accent stroke-accent"} />
          <StarIcon rewriteClass={"h-10 w-full fill-accent stroke-accent"} />
          <StarIcon rewriteClass={"h-10 w-full fill-accent stroke-accent"} />
          <StarIcon rewriteClass={"h-10 w-full fill-accent stroke-accent"} />
          <StarIcon rewriteClass={"h-10 w-full fill-accent stroke-accent"} />
        </div>

        <p className="leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
          scelerisque urna. Duis in ligula.
        </p>
      </section>
    </section>
  );
};
