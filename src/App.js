
import Material from "./Material";
// import {Route , Routes, Link}from "react-router-dom";
// import Hello from './Hello';
// import Home from './Home';
// import PostsList from './PostsList';
// import PostDetails from './PostDetails';
// import { postsContext } from './contexts/PostesContexts';
// import NotFound from "./NotFound";
// import NewPost from "./NewPost";
// import DeletePost from "./DeletePost";
// import PostLayout from "./PostLayout";
// function App() {
//   let postsData = [{
//     id: 1,
//     title: "  First Post",
//     body: "Lorem ipsum qddfflkglgkbkf,zerrfznxconf"
// },
// {
//     id: 2,
//     title: "Second Post",
//     body: "Lorem ipsum qddfflkglgkbkf,zerrfznxconf"
// },
// {
//     id: 3,
//     title: " Third Post",
//     body: "Lorem ipsum qddfflkglgkbkf,zerrfznxconf"


// ];
import { createTheme, ThemeProvider } from "@mui/material";
import { green, orange, purple } from "@mui/material/colors";

const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    primary: {
      main: purple[100],
      
    },
    secondary: {
      main: green[200],
      
  }}
});

function App(){
  return (

    <ThemeProvider theme={theme}>
      <div className="App" style={{marginTop: "200px" , marginLeft: "500px"}}>
      <Material />
     </div>
    </ThemeProvider>
   
     
    
//   <postsContext.Provider value = {postsData}>
//  <div className="App">
//      {/* Routes */}
// <div style={{fontSize: "30px"}}>
//       <Link to ="/">
//       <button style={{fontSize: "30px"}}> Home </button>
//       </Link>
//       <Link to ="/hello">
//       <button style={{fontSize: "30px"}}> Hello </button>
//       </Link>
      
//       <Link to="/posts">
//       <button style={{fontSize: "30px"}}> Posts </button>
//       </Link>
      
      
//      </div>

//       <Routes>
//         <Route  path="/hello" element={<Hello />} />
//         <Route path="posts" element={<PostLayout/>}>
//         <Route  index element={<PostsList />} />
//         <Route path=":postId" element={<PostDetails />} />
//         <Route  path="new" element={<NewPost />} />
//         <Route  path="delete" element={<DeletePost />} />
//          </Route>
       
       
//         <Route  path="/" element={<Home />} />
//         <Route  path="/home" element={<Home />} />
//         <Route  path="*" element={<NotFound />} />
//       </Routes>

//     </div>
//     </postsContext.Provider>
    
   
  );
}

export default App;
