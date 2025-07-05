import { Oswald } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Metadata } from "next";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wendell Costa - Web Developer",
  description: "Wendell Costa's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden">
        <header className="mt-5 w-full md:w-[20%] lg:w-[12%] uppercase flex justify-center items-center">
          <h4
            className={`${oswald.className} font-oswald sm:text-3xl md:text-sm text-gray-100`}
          >
            <Link href="/">Wendell Costa</Link>
          </h4>
        </header>
        {children}
      </body>
    </html>
  );
}
