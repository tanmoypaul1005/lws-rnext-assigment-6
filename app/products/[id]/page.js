import productsData from '../../../data/product.json';
import Image from "next/image";

const ProductDetails = ({ params }) => {

    console.log("params", params?.id)

    const product_details = productsData?.products?.find((product) => product?.id === parseInt(params?.id));

    console.log("product_details", product_details)

    return (
        <div>
            <main className="h-screen">
                <section className="bg-[#fafaf2] h-full py-20">
                    <div className="flex flex-col items-center justify-between w-11/12 gap-12 mx-auto lg:w-8/12 max-w-7xl lg:flex-row">
                        <div className="w-full p-4 border lg:w-7/12 border-slate-500/20">
                            <Image src={product_details?.thumbnail} width={400} height={500} className="w-[400px] h-[500px] mx-auto object-cover" alt="" />

                            <div className="flex gap-4 mt-4">
                                {
                                    product_details?.images?.map((image, index) => (
                                        <Image key={index} src={image} width={100} height={100}  className="w-[100px] h-[100px] mx-auto border object-cover" alt="" />
                                    ))
                                }
                            </div>
                        </div>
                        <div className="w-full lg:w-5/12">
                            <h1 className="font-serif text-xl italic font-semibold lg:text-3xl">{product_details?.title}</h1>
                            <span className="text-[#919090] my-3">Smartphone</span>
                            <div className="flex items-center justify-start gap-1 mt-3">
                                {
                                    Array.from({ length: product_details?.rating }).map((_, index) => (
                                        <Image height={20} key={index} src="/assets/svg/star.svg" width={20} alt="" />
                                    ))
                                }

                            </div>
                            <hr className="my-5 bg-black" />

                            <div>
                                <p className="my-3">
                                    <span className="line-through text-rose-600 opacity-60">$205.00</span>
                                    <span className="text-2xl font-bold">$195.00</span>
                                </p>
                            </div>
                            <div>
                                <p className="leading-7">
                                    {product_details?.description}
                                </p>

                                <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                                    Add To Cart - $195
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default ProductDetails