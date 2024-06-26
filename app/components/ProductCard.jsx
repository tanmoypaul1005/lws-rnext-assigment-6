import Image from "next/image";
import Link from 'next/link';

const ProductCard = ({ product }) => {

    return (
        <div>
            <Image width={180} height={270} src={product?.thumbnail} alt="" className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform" />
            <h2 className="mt-2 text-sm lg:text-base">
                <Link className="text-base font-bold" href={`/products/${product?.id}`}>
                    {product?.title}
                </Link>
                <span className="text-[#919090]">
                    <Link href={`/category/${product?.category}`}>({product?.category})</Link>
                </span>
            </h2>
            <p className="text-[#919090] text-sm ">{product?.description}</p>

            <p className="mt-4 text-sm text-rose-600">
                <sspan className="text-[#919090] line-through">${product?.price}</sspan>
                ${parseInt(product?.price - (product?.price * (product?.discountPercentage / 100)))}
            </p>
        </div>
    )
}

export default ProductCard