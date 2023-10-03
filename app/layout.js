import React from 'react';
import { CartProvider } from "@/context/CartContext";
import "./globals.css";
import Topheader from "@/components/Topheader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Quicksand, Fraunces } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});
export const metadata = {
  title: "Bookstore",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${quicksand.variable} ${fraunces.variable}`}>
      <body suppressHydrationWarning={true} className="flex flex-col min-h-screen w-full bg-primary">
      <CartProvider>
      <Topheader />
       <Navbar />
        {children}
        <Footer/>
        </CartProvider>
      </body>
    </html>
  );
}
