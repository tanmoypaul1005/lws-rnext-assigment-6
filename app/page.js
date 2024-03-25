import Image from "next/image";
import productsData from '../data/product.json';

export default function Home() {

  // console.log("productsData", productsData)
  return (
    <>

      <body>
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

        <header
          classNameName="h-[500px] bg-center flex flex-col-reverse bg-cover w-full"
          style={{ backgroundImage: "url('/assets/header.webp')" }}
        >
          <div className="w-10/12 mx-auto mb-5 text-white max-w-7xl">
            <h1 className="font-serif text-2xl lg:text-3xl">Introducing LWS Shop Center</h1>
            <p>Your whole week at a glance</p>
            <button
              className="bg-[#ffd160] hover:bg-[#e4be60] border border-black w-60 mt-2 py-3 rounded-full text-center text-black">
              Get the Weekly Kit
            </button>
          </div>
        </header>

        <main>
          <section className="w-11/12 py-10 mx-auto lg:w-10/12 max-w-7xl">
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
            {
              productsData?.products?.map((product, index) => (
                <div key={index}>
                <Image width={180} height={270} src={product?.thumbnail} alt="" className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform" />
                <h2 class="text-sm lg:text-base mt-2">
                  <a class="text-base font-bold" href="./productPage.html">
                    {product?.title}
                  </a>
                  <span class="text-[#919090]">
                    <a href="./category.html">({product?.category})</a>
                  </span>
                </h2>
                <p class="text-[#919090] text-sm ">{product?.description}</p>
      
                <p class="text-rose-600 text-sm mt-4"><span class="text-[#919090] line-through">$205.00</span> $195.00</p>
              </div>
              ))
            }
            </div>
          </section>



          <section className="bg-[#ced3ca] py-5 lg:py-16">
            <div className="w-10/12 mx-auto lg:w-4/12">
              <h1 className="my-5 font-serif text-xl italic text-center lg:text-3xl">Get the inside scoop</h1>
              <p className="text-sm text-center lg:text-base">
                Sign up for new product drops, behind-the-scenes content, and monthly "5 Things I'm Digging" emails
              </p>
              <form action="#" className="mb-5">
                <input type="text" className="w-full p-3 mt-10 border border-black focus:outline-none"
                  placeholder="Enter your email" />
                <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-2 mt-2 text-white">
                  See what we're doing
                </button>
              </form>
            </div>
          </section>
        </main>
      </body>

    </>
  );
}


{/* <Image width={270} height={270} src={"/assets/products/iphone.jpg"} alt="" className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform" /> */}