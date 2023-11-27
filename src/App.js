
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import HomePosts from "./components/HomePosts";
import PostDetails from "./page/PostDetails";
import { Routes, Route } from "react-router-dom";
import CreatePost from "./page/CreatePost";
import Swipertest from "./page/Swipertest";
function App() {
  return (
    <>
   
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/posts" element={<HomePosts />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />      
      <Route path="/createPost" element={<CreatePost />} />      
      <Route path="/post/post/:id" element={<PostDetails />} />
      <Route path="/swiper" element={<Swipertest/>}/>
    </Routes>
    
    </>
  );
}

export default App;
