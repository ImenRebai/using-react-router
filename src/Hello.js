
import {Link} from "react-router-dom"
function Hello() {
  return (
    <>
     <h1>Hello Word !</h1> 
     <h2>Welcome To React Router</h2>
     <Link to="/home">
     <div style={{background:"orange" , padding:"10px", borderRadius:"10px"}}>
       <h1>Go to Home page</h1>
     </div>
     </Link>
     
    </>
  )
}

export default Hello
