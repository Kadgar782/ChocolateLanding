export const Features = () => {
  return (
    <section className="flex h-96 flex-row justify-center gap-32  bg-background   pb-6 text-citrine max-md:h-full max-md:flex-col  max-md:items-center max-md:gap-3 ">
      <section className="bg-backgroundCard flex w-1/5 flex-col items-center rounded-md p-4 text-center max-md:w-4/5">
        <img src="/svg/recipes.svg" className="h-24 w-24"></img>
        <h2 className="pb-5 pt-5 text-5xl">Originality</h2>
        <p className="leading-loose">
          We use unique recipes, combining tradition and innovation to create
          chocolate that provides a unique gastronomic experience.
        </p>
      </section>
      <section className="bg-backgroundCard flex w-1/5 flex-col  items-center rounded-md  p-4  text-center max-md:w-4/5">
        <img src="/svg/chocolate-bar.svg" className="h-24 w-24"></img>
        <h2 className="pb-5 pt-5 text-5xl">Variety</h2>
        <p className="leading-loose">
          Our assortment offers a wide range of flavor compositions, from
          classic combinations to bold experiments, satisfying the needs of the
          most refined chocolate connoisseurs.
        </p>
      </section>
      <section className="bg-backgroundCard flex w-1/5 flex-col items-center rounded-md p-4 text-center max-md:w-4/5">
        <img src="/svg/leaf-nature-plant.svg" className="h-24 w-24"></img>
        <h2 className="pb-5 pt-5 text-5xl">Natural</h2>
        <p className="leading-loose">
          We are proud that our chocolate contains only natural ingredients
          without artificial additives, which provides not only taste, but also
          care for the health of our consumers.
        </p>
      </section>
    </section>
  );
};