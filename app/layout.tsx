import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import StoreProvider from "./storeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chocoto",
  description: "E-store selling sweets, not real",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <section className="flex h-14 flex-row content-center ">
            <nav className="flex grow flex-row bg-accent text-text ">
              <div className="Logo w-1/3"></div>
              {/* it will be necessary to add redux */}
              <div className="searchBar flex min-h-[40px] w-1/3 content-center justify-center self-center rounded-lg border-2 border-text bg-primary  ">
                <input
                  placeholder="Search"
                  className="w-full rounded-lg border-text  bg-primary pl-2 text-text"
                />
              </div>
              <div className=" button-group flex w-1/3  items-center justify-end">
                <Link className="pr-8" href="/">
                  HOME
                </Link>
                <Link className="pr-8" href="/shop">
                  SHOP
                </Link>
                <Link className="px-2 pr-8" href="/login">
                  LOGIN
                </Link>
              </div>
            </nav>
          </section>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
