import Link from "next/link";

function product({productId =100}){
    return (
        <>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href='/product/1'>
        <a><h1>product one</h1></a>
        </Link>
        <h1>
            <Link href='/product/2'>
            <a>product two</a>
            </Link>
        </h1>
        <h1>
            <Link href='/product/3' replace>
                <a>product three</a>
            </Link>
        </h1>
       
        <h2>
            <Link href={`/product/${productId}`}>
            <a>product {productId}</a>
            </Link>
        </h2>
        </>
    )
    
}
export default product;