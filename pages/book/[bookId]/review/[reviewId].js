import {useRouter} from 'next/router'

function review (){
    const router = useRouter();
    const {bookId, reviewId} = router.query;
    console.log(router)
    return(
        <>
            <h4>review  {reviewId} for book {bookId}</h4>
        </>
    )
}
export default review;