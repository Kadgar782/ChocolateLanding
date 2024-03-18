import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider, SignOutButton, currentUser } from "@clerk/nextjs";
import Link from "next/link";
import { ItemsInCartCount } from "./components/cart/cartCount";
import StoreProvider from "./storeProvider";
import { CustomSignIn } from "./components/authentication/customSignIn";
import { Home, KeyRound, ShoppingCart, Store } from "lucide-react";
import CustomPersistGate from "./persistedStoreProvider";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chocoto",
  description: "E-store selling sweets, not real",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <StoreProvider>
            <CustomPersistGate>
              <section className=" fixed z-30 flex  h-16 w-full flex-row content-center max-md:relative">
                <nav className="  flex grow flex-row items-center  bg-accent text-text max-md:flex-col">
                  <div className="Logo flex w-1/3 items-center justify-start  pl-7 pt-0 max-md:hidden">
                    <Link
                      href="/"
                      className=" flex flex-row items-center justify-center  self-center  "
                    >
                      <svg
                        id="logo-89"
                        width="64"
                        height="64"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="ccustom"
                          d="M39.9449 21.4998H32.8003C26.5594 21.4998 21.5003 26.559 21.5003 32.7998V39.9444C31.3502 39.214 39.2145 31.3497 39.9449 21.4998Z"
                          fill="#bca66e"
                        ></path>
                        <path
                          className="ccustom"
                          d="M18.5003 39.9444V32.7998C18.5003 26.559 13.4411 21.4998 7.20026 21.4998H0.0556641C0.785998 31.3497 8.65036 39.214 18.5003 39.9444Z"
                          fill="#bca66e"
                        ></path>
                        <path
                          className="ccustom"
                          d="M39.9449 18.4998C39.2145 8.64987 31.3502 0.78551 21.5003 0.0551758V7.19977C21.5003 13.4406 26.5594 18.4998 32.8003 18.4998H39.9449Z"
                          fill="#bca66e"
                        ></path>
                        <path
                          className="ccustom"
                          d="M18.5003 0.0551758C8.65036 0.78551 0.785998 8.64987 0.0556641 18.4998H7.20026C13.4411 18.4998 18.5003 13.4406 18.5003 7.19977V0.0551758Z"
                          fill="#bca66e"
                        ></path>
                        <path
                          className="ccustom"
                          d="M13.583 19.9998C16.3555 18.6145 18.615 16.355 20.0002 13.5825C21.3855 16.355 23.6449 18.6145 26.4175 19.9998C23.6449 21.385 21.3855 23.6445 20.0002 26.417C18.615 23.6445 16.3555 21.385 13.583 19.9998Z"
                          fill="#CA9352"
                        ></path>
                      </svg>
                      <h1 className=" flex items-center justify-center self-center pl-4 text-3xl text-text">
                        Chocoto
                      </h1>
                    </Link>
                  </div>
                  {/* it will be necessary to add redux */}
                  <div className="searchBar flex min-h-[40px] w-1/3 content-center justify-center self-center rounded-lg border-2 border-text bg-primary max-md:mb-2 max-md:mt-2 max-md:w-11/12">
                    <input
                      placeholder="Search"
                      className="w-full rounded-lg border-text  bg-primary pl-2 text-text"
                    />
                  </div>
                  <div
                    className="
                    button-group ml-14 flex w-1/3 items-center justify-center gap-8 bg-accent text-xl 
                    max-[1070px]:ml-3  max-[1070px]:gap-4 
                    max-md:fixed max-md:bottom-0 max-md:left-0 max-md:ml-0  max-md:w-full max-md:justify-center max-md:gap-4 max-md:self-center max-md:pb-2 max-md:pt-2"
                  >
                    <Link className="hidden pr-2 max-md:flex" href="/">
                      <div className=" relative flex flex-col items-center justify-center  pr-8  max-md:m-0 max-md:p-0 ">
                        <Home />
                        Home
                      </div>
                    </Link>

                    <Link className="pr-2" href="/shop">
                      <div className=" relative flex flex-col items-center justify-center   max-md:m-0 max-md:p-0 ">
                        <Store />
                        Shop
                      </div>
                    </Link>
                    {!user ? (
                      <div className="flex flex-col items-center justify-center pr-8">
                        <CustomSignIn />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center   pr-2  max-md:m-0 max-md:pt-0 ">
                        <SignOutButton>
                          <button className=" flex flex-col items-center justify-center ">
                            <KeyRound /> log out
                          </button>
                        </SignOutButton>
                      </div>
                    )}
                    {!user ? null : (
                      <Link className="pr-8 max-[1070px]:pr-0" href="/cart">
                        <div className=" relative mr-9 flex flex-col items-center justify-center  pr-8  max-[1070px]:pr-0 max-md:m-0 max-md:p-0">
                          <ItemsInCartCount />
                          <ShoppingCart className="  stroke-text" />
                          <p className=" text-text">Cart</p>
                        </div>
                      </Link>
                    )}
                  </div>
                </nav>
              </section>
              {children}
            </CustomPersistGate>
          </StoreProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
