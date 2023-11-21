import {Link} from "react-router-dom"

function NotFound() {
  return (
    <>
     <h1> 404 (not found)</h1> 
     <h3> the URL you visited is not defined</h3>
    <Link to ="/home"><button> Return Back to the home page</button></Link>
    
     </>
  )
}

export default NotFound
