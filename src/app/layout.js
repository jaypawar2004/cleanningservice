// app/layout.js
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Clino - Cleaning Services",
  description: "Feel your way for freshness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans bg-[#F0F4FC]`}>
        {/* <Navbar /> */}
        {children}
        <Footer />
        </body>
    </html>
  );
}