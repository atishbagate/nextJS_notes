import { useRouter } from 'next/router'
import React from 'react' 
interface Props {}

function ProductId(props: Props) {
    const router = useRouter();
    const {} = props
    const productID = router.query.productId;
    return (
        <>
        <h2>This is Product page - {productID}</h2>
        </>
    )
}

export default ProductId
