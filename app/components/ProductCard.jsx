import Image from "next/image";
import Link from 'next/link';

const ProductCard = ({product}) => {
    return (
        <div>
            <Image width={180} height={270} src={product?.thumbnail} alt="" className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform" />
            <h2 class="text-sm lg:text-base mt-2">
                <Link class="text-base font-bold" href={`/products/${product?.id}`}>
                    {product?.title}
                </Link>
                <span class="text-[#919090]">
                    <a href="./category.html">({product?.category})</a>
                </span>
            </h2>
            <p class="text-[#919090] text-sm ">{product?.description}</p>

            <p class="text-rose-600 text-sm mt-4"><span class="text-[#919090] line-through">$205.00</span> $195.00</p>
        </div>
    )
}

export default ProductCard