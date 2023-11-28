import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { saveAs } from 'file-saver'
import { IoCloudDownloadOutline } from "react-icons/io5";
function Swipertest() {
  const [tinyImg, setTinyImg] = React.useState([]);
  const downloadImage = (img_url,img_name) => {
    saveAs(img_url, img_name) // Put your image URL here.
  }
  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://pexelsdimasv1.p.rapidapi.com/v1/search?query=ocean&locale=en-US&per_page=150&page=1";
      const options = {
        method: "GET",
        headers: {
          Authorization:
            "Wt8XBcEOzEnm2nXbuSLe2LFxeisVWQ9XSxvTTveHMXJJ9ZWmBKDj7ggJ",
          "X-RapidAPI-Key":
            "7c75e56ea1msh3bec407f8858087p1a49a6jsn888dd58ac803",
          "X-RapidAPI-Host": "PexelsdimasV1.p.rapidapi.com",
        },
      };

      try {
        let response = await fetch(url, options);
        let result = await response.json();
        let tinyImg = [];
        for (let i = 0; i < result.photos.length; i++) {
          tinyImg.push(result.photos[i].src.tiny);
        }
        console.log(tinyImg);
        
        setTinyImg(tinyImg);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full h-ful">
        <h1 className="text-3xl text-black mb-2 mt-2">Walpaper | Slide me</h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          className="rounded-lg"
        >
         {
             tinyImg?.map((img,index)=>{
                 return (<SwiperSlide  key={index}><img className="rounded-xl" src={img} alt="{index}" download />
                 <button className="absolute top-0 right-0 mr-5 mt-2 text-3xl text-white-600" onClick={()=>downloadImage(img,index)}><IoCloudDownloadOutline /></button>
                 </SwiperSlide>);
             })
         }

        </Swiper>
      </div>
    </>
  );
}
export default Swipertest;
