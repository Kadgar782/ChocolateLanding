import Link from "next/link";
export const RegistrationCall = () => {
  return (
    <section className="m-20 flex min-h-[300px] w-2/4 flex-col items-center justify-center rounded bg-primary max-md:w-3/4">
      <h1 className="text-5xl text-text max-[1030px]:text-4xl max-md:pl-5">
        <strong>But that not ALL!</strong>
      </h1>
      <h2 className="pb-10 pt-3 text-3xl text-text  max-[1650px]:pl-5 max-[1650px]:pr-5 max-2xl:text-2xl max-lg:pl-5">
        Register now and get a&nbsp;
        <span className="text-accent">
          <strong>10%</strong>
        </span>
        &nbsp;discount on your first order!
      </h2>
      <Link
        className="flex h-16 items-center rounded-md bg-secondary  px-2 pl-2 pr-4  text-right text-text"
        target="_blank"
        href="/registration"
      >
        <strong>Registration</strong>
      </Link>
    </section>
  );
};
