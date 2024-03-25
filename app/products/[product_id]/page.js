import productsData from '../../../data/product.json';

const ProductDetails = ({params}) => {

    console.log("params",params?.product_id)

    const product_details=productsData?.products?.find((product)=>product.id===parseInt(params?.product_id));

    console.log("product_details",product_details)

    return (
        <div>
            
        </div>
    )
}

export default ProductDetails