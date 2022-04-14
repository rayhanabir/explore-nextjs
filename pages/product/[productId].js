import {useRouter} from 'next/router';

function productDetails(){
    const router = useRouter();
    const productId = router.query.productId;

    return <h2>product details for {productId}</h2>
}
export default productDetails;