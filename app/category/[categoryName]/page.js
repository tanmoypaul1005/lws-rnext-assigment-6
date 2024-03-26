import Image from "next/image";
import productsData from '../../../data/product.json';

const Category = ({ params }) => {

    const product_list = productsData?.products?.filter((product) => product?.category === params?.categoryName);

    const all_category = ["all", "smartphones", "laptops", "fragrances", "skincare", "groceries"]

    return (
        <div>
            <main>
                <section className="items-start justify-between w-11/12 py-0 mx-auto lg:w-10/12 max-w-7xl lg:py-10 lg:flex">
                    <div className="flex items-center justify-between w-full my-10 lg:block lg:w-2/12 lg:my-0 lg:mt-4">
                        {
                            all_category?.map((category, index) => (
                                <button key={index} className={`${category === params?.categoryName ? "border-b" : ""} capitalize box-border block h-6 mt-4 border-black hover:border-b`}>{category}</button>
                            ))
                        }
                    </div>
                    <div className="sticky top-0 right-0 grid w-full grid-cols-2 gap-4 my-4 lg:w-10/12 lg:grid-cols-3 lg:my-10">

                        {
                            product_list?.map((product, index) => (
                                <div key={index}>
                                    <Image width={180} height={270} src={product?.thumbnail} alt="" className="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8]  bg-cover bg-center transition-all duration-3000 ease-in-out transform" />
                                    <h2 className="mt-2 text-sm lg:text-base">
                                        <a className="text-base font-bold" href="./productPage.html">
                                            {product?.title}
                                        </a>
                                        <span className="text-[#919090]">
                                            <a href="./category.html">(Smartphones)</a>
                                        </span>
                                    </h2>
                                    <p className="text-[#919090] text-sm ">{product?.description}</p>

                                    <p className="mt-4 text-sm text-rose-600"><span className="text-[#919090] line-through">$205.00</span> $195.00</p>
                                </div>
                            ))
                        }




                    </div>
                </section>
                {/* <!-- Product section start -->
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
                </section> */}
            </main>
        </div>
    )
}

export default Category