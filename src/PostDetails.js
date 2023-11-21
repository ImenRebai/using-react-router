import{useParams} from "react-router-dom";
import {useContext} from "react";
import {postsContext} from "./contexts/PostesContexts"
export default  function PostDetails() {
   const posts = useContext(postsContext);
   const{postId}=useParams();
   const post = posts.find((p) =>{
    return (
       p.id == postId
    )
   }
   );

 if(post){
  return (

    <>
    <h2>Post Details page</h2>
    <h1>{post.title}</h1>  
    <p>{post.body}</p>
    </>
  )

 }
 else{
  return(
    <>
    <h1>The post with Id: {postId} is not exist</h1>
    </>
  )
 }
  
}

