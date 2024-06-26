import Image from "next/image";
import productsData from '../../../data/product.json';
import Link from 'next/link';

const CategoryList = ({ params }) => {

    const product_list = params?.categoryName === 'all' ? productsData?.products : productsData?.products?.filter((product) => product?.category === params?.categoryName);

    const all_category = ["all", "smartphones", "laptops", "fragrances", "skincare", "groceries"];

    return (
        <div>
                        <Image width={500} height={500} src={'/assets/header.webp'} alt="header" className="h-[500px] bg-center flex flex-col-reverse bg-cover w-full" />
            <main>
                <section className="items-start justify-between w-11/12 py-0 mx-auto lg:w-10/12 max-w-7xl lg:py-10 lg:flex">
                    <div className="flex items-center justify-between w-full my-10 lg:block lg:w-2/12 lg:my-0 lg:mt-4">
                        {
                            all_category?.map((category, index) => (
                                <button
                                    key={index}
                                    className={`${category === params?.categoryName ? "bg-blue-500 text-white p-2 rounded" : "bg-white text-black"} capitalize box-border block  mt-4 border-black hover:border-b`}
                                >
                                    <Link href={`/category/${category}`}>
                                        {category}
                                    </Link>
                                </button>
                            ))
                        }
                    </div>
                    {
                        product_list?.length > 0 ?
                            <div className="sticky top-0 right-0 grid w-full grid-cols-2 gap-4 my-4 lg:w-10/12 lg:grid-cols-3 lg:my-10">
                                {
                                    product_list?.map((product, index) => (
                                        <div key={index}>
                                            <Image width={180} height={270} src={product?.thumbnail} alt="" className="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform" />
                                            <h2 className="mt-2 text-sm lg:text-base">
                                                <a className="text-base font-bold" href="./productPage.html">

                                                    <Link href={`/products/${product?.id}`}>                                                    {product?.title}</Link>
                                                </a>
                                                <span className="text-[#919090]">
                                                    <Link href={`/category/${product?.category}`}>({product?.category})</Link>
                                                </span>
                                            </h2>
                                            <p className="text-[#919090] text-sm ">{product?.description}</p>
                                            <p className="mt-4 text-sm text-rose-600">
                                                <span className="text-[#919090] line-through">${product?.price}</span>
                                                ${parseInt(product?.price - (product?.price * (product?.discountPercentage / 100)))}
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                            :
                            <div className="flex items-center justify-center">No products</div>
                    }
                </section>
            </main>
        </div>
    )
}

export default CategoryList;
