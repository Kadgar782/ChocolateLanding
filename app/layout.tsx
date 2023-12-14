import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

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
    <html lang="en">
      <body className={inter.className}>
        <section className="flex h-12 flex-row-reverse content-center">
          <nav className="flex grow flex-row-reverse  bg-accent text-text ">
            <Link className="self-center px-2 pr-4" href="/login">
              LOGIN
            </Link>
            <Link className="self-center pr-2" href="/">
              HOME
            </Link>
          </nav>
        </section>
        {children}
      </body>
    </html>
  );
}
