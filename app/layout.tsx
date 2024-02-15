import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider, SignOutButton, currentUser } from "@clerk/nextjs";
import Link from "next/link";
import { ItemsInCartCount } from "./components/cart/cartCount";
import StoreProvider from "./storeProvider";
import { CustomSignIn } from "./components/authentication/customSignIn";
import { KeyRound, ShoppingCart } from "lucide-react";
import { useAppSelector } from "../lib/hooks";

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
    <ClerkProvider>
      <StoreProvider>
        <html lang="en">
          <body className={inter.className}>
            <section className=" fixed z-10 flex  h-16 w-full flex-row content-center max-md:relative">
              <nav className="  flex grow flex-row bg-accent text-text max-md:flex-col">
                <div className="Logo w-1/3 max-md:w-0"></div>
                {/* it will be necessary to add redux */}
                <div className="searchBar flex min-h-[40px] w-1/3 content-center justify-center self-center rounded-lg border-2 border-text bg-primary max-md:mb-2 max-md:mt-2 max-md:w-11/12">
                  <input
                    placeholder="Search"
                    className="w-full rounded-lg border-text  bg-primary pl-2 text-text"
                  />
                </div>
                <div className=" button-group ml-14 flex  w-1/3 items-center justify-end bg-accent max-md:fixed max-md:bottom-0 max-md:left-0 max-md:ml-0 max-md:w-full  max-md:justify-center max-md:gap-2 max-md:self-center max-md:pb-2 max-md:pt-2">
                  <Link className="pr-8" href="/">
                    HOME
                  </Link>
                  <Link className="pr-6" href="/shop">
                    SHOP
                  </Link>
                  {!user ? (
                    <div className="flex flex-col items-center justify-center pr-8">
                      <CustomSignIn />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center   pr-8 pt-5 max-md:m-0 max-md:pr-6 max-md:pt-0 ">
                      <SignOutButton>
                        <button className=" flex flex-col items-center justify-center text-sm ">
                          <KeyRound /> log out
                        </button>
                      </SignOutButton>
                    </div>
                  )}
                  {!user ? null : (
                    <Link className="pr-8 max-md:pr-0" href="/cart">
                      <div className=" relative mr-9 flex flex-col items-center justify-center pb-5  pr-8 pt-5 max-md:m-0 max-md:p-0 ">
                        <ItemsInCartCount />
                        <ShoppingCart className="  stroke-text" />
                        <p className="text-sm text-text">Cart</p>
                      </div>
                    </Link>
                  )}
                </div>
              </nav>
            </section>
            {children}
          </body>
        </html>
      </StoreProvider>
    </ClerkProvider>
  );
}
