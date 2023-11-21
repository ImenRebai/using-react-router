import {Link}from "react-router-dom";
import { postsContext } from "./contexts/PostesContexts";
import { useContext } from "react";

function PostsList() {
    const posts=useContext(postsContext)
    let postsList = posts.map((post) => {
        return(<Link key={post.id} to={`/posts/${post.id}`}> 
        <div key={post.id} style={{background:"orange", padding:"20px", marginTop:"10px"}}>
            <h1>{post.title}</h1>
            </div>
            </Link>
        )
    })
  return (
   <>
   {postsList} 
    </> 
  )
}

export default PostsList
