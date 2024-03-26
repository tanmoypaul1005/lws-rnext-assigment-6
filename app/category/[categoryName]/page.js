import Image from "next/image";

const Category = () => {
    return (
        <div>
            <main>
               
                <section class="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
                    <div class="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
                        <button class="hover:border-b border-black block h-6 box-border mt-4">All</button>
                        <button class="hover:border-b border-black block h-6 box-border mt-5">Smartphones</button>
                        <button class="hover:border-b border-black block h-6 box-border mt-5">Laptops</button>
                        <button class="hover:border-b border-black block h-6 box-border mt-5">Fragrances</button>
                        <button class="hover:border-b border-black block h-6 box-border mt-5">Skincare</button>
                        <button class="hover:border-b border-black block h-6 box-border mt-5">Groceries</button>
                    </div>
                    <div class="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
                       
                        <div>
                            
                            <Image width={180} height={270} src={"/assets/products/iphone.jpg"} alt="" className="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8]  bg-cover bg-center transition-all duration-3000 ease-in-out transform" />
                            <h2 class="text-sm lg:text-base mt-2">
                                <a class="text-base font-bold" href="./productPage.html">
                                    iPhone 9
                                </a>
                                <span class="text-[#919090]">
                                    <a href="./category.html">(Smartphones)</a>
                                </span>
                            </h2>
                            <p class="text-[#919090] text-sm ">An apple mobile which is nothing like apple</p>

                            <p class="text-rose-600 text-sm mt-4"><span class="text-[#919090] line-through">$205.00</span> $195.00</p>
                        </div>
                        

                       
                    </div>
                </section>
                {/* <!-- Product section start -->
                <section class="bg-[#ced3ca] py-5 lg:py-16">
                    <div class="w-10/12 lg:w-4/12 mx-auto">
                        <h1 class="italic text-xl lg:text-3xl font-serif my-5 text-center">Get the inside scoop</h1>
                        <p class="text-center text-sm lg:text-base">
                            Sign up for new product drops, behind-the-scenes content, and monthly "5 Things I'm Digging" emails
                        </p>
                        <form action="#" class="mb-5">
                            <input type="text" class="p-3 mt-10 border border-black focus:outline-none w-full"
                                placeholder="Enter your email" />
                            <button class="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-2 mt-2 text-white">
                                See what we're doing
                            </button>
                        </form>
                    </div>
                </section> */}
            </main>
        </div>
    )
}

export default Category