import productsData from '../data/product.json';
import ProductCard from "./components/ProductCard";

export default function Home() {

  return (
    <>
      <body>
        <header
          className="h-[500px] bg-center flex flex-col-reverse bg-cover w-full"
          style={{ backgroundImage: "url('/assets/header.webp')" }}>
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
              {
                productsData?.products?.map((product, index) => (
                  <ProductCard key={product?.id} product={product} />
                ))
              }
            </div>
          </section>



          <section className="bg-[#ced3ca] py-5 lg:py-16">
            <div className="w-10/12 mx-auto lg:w-4/12">
              <h1 className="my-5 font-serif text-xl italic text-center lg:text-3xl">Get the inside scoop</h1>
              <p className="text-sm text-center lg:text-base">
                Sign up for new product drops, behind-the-scenes content, and monthly 5 Things Im Diggin emails
              </p>
              <form action="#" className="mb-5">
                <input type="text" className="w-full p-3 mt-10 border border-black focus:outline-none"
                  placeholder="Enter your email" />
                <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-2 mt-2 text-white">
                  See what wre doing
                </button>
              </form>
            </div>
          </section>
        </main>
      </body>

    </>
  );
}


