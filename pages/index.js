import Link from 'next/link'
import {useRouter} from 'next/router'

function Home(){
    const router = useRouter();
    const handleClick =()=>{
        router.push('/product')
    }
    return (
    <div>
        <h1>This is Home Page</h1>
        <Link href='/blog'>
        <a>Blog</a>
        </Link>
        <br />
        <Link href='/product'>
        <a>product</a>
        </Link>
        <br />
        <button onClick={handleClick}>place order</button>
    </div>
    
    
    )

}
export default Home;