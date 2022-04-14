import {useRouter} from 'next/router';

function bookDetails(){
    const router = useRouter();
    const bookId = router.query.bookId;
    return(
        <h4>book details for : {bookId}</h4>
    )
}
export default bookDetails;