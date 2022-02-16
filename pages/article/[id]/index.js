import {useRouter} from 'next/router';
import {server} from '../../../config';

import Link from "next/link"
const article = ({article}) =>{
    const router = useRouter();
    const {id} = router.query;
    return (
        <>
         <h1> This is an article {article.title}</h1>
         <p> This is an article {article.body}</p>
         <br />
         <Link href='/'>Go Back</Link>
        </>
    )
}

export const getStaticProps = async (context) =>{
   const res = await fetch(`${server}/posts/${context.params.id}`); 

   const article = await res.json();

   return {
       props: {article}
   }
}
// export const getStaticProps = async (context) =>{
//    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`); 

//    const article = await res.json();

//    return {
//        props: {article}
//    }
// }
export const getStaticPaths = async () =>{
   const res = await fetch(`${server}/posts`); 

   const articles = await res.json();

   const ids = articles.map(article => article.id);

   const paths = ids.map(id => ({params: {id: id.toString()}}));

   return {
       paths,
       fallback: false
   }
}

// export const getStaticPaths = async () =>{
//    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`); 

//    const articles = await res.json();

//    const ids = articles.map(article => article.id);

//    const paths = ids.map(id => ({params: {id: id.toString()}}));

//    return {
//        paths,
//        fallback: false
//    }
// }



export default article;