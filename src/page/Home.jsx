import Footer from "../components/Footer"
import HomePosts from "../components/HomePosts"
import Navbar from "../components/Navbar"
import Swipertest from "./Swipertest"

function Home() {
  return (
    <>
    <Navbar/>
     <div className="px-8 md:px-[200px]">
      <HomePosts/> <HomePosts/> <HomePosts/> <HomePosts/> <HomePosts/> <HomePosts/> <HomePosts/><Swipertest/>
    </div>
    <Footer/>
    </>
   
  )
}

export default Home