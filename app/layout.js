import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex items-center justify-between w-11/12 py-5 mx-auto lg:w-10/12 max-w-7xl lg:py-6">
          <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
            <div className="flex items-center gap-2">
              <Image
                src={'/assets/svg/menu.svg'}
                alt="menu"
                width={20}
                height={20}
              />
              <a href="./index.html">
                <img src="./assets/lws-logo-black.svg" className="h-10" alt="" />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
            <Image
              src={'/assets/svg/avatar.svg'}
              alt="menu"
              width={40}
              height={40}
              classNameName="hidden lg:block w-[18px] h-[18px]"
            />

            <Image src={'/assets/svg/shopping-Cart.svg'} width={20} height={20} classNameName="block w-5 h-5" alt="shopping cart icon" />
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
