import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
function PostDetails() {
  return (
    <>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2-xl font-bold text-black md:text-3xl">
            New iquea 15 pro max|lounch.
          </h1>
          <div className="flex space-x-2">
            <p className="text-green-500 mb-2">
              <BiEdit />
            </p>
            <p className="text-red-500">
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex justify-between mb-2 text-sm font-semibold text-gray-400 space-x-4 md:mb-4">
          <p>@rajakumarsharma</p>
          <div className="flex space-x-2">
            <p>12-10-2000</p>
            <p>11:28 AM</p>
          </div>
        </div>
        <img
          className="w-full h-[300px] object-cover rounded"
          src="https://th.bing.com/th?id=ORMS.c846a182b9606bb173d721a0d7050489&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0"
          alt=""
        />
        <p className="text-gray-600 text-sm md:text-lg mt-8 font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. nventore
          sint libero saepe, exercitationem blanditiis autem, nihil volMinus aut
          accusantium cupiditate molestias oluptatibus reiciendis volupt Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. nventore sint
          libero saepe, exercitationem blanditiis autem, nihil volMinus aut
          accusantium cupiditate molestias oluptatibus reiciendis volupt Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. nventore sint
          libero saepe, exercitationem blanditiis autem, nihil volMinus aut
          accusantium cupiditate molestias oluptatibus reiciendis volupt Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. nventore sint
          libero saepe, exercitationem blanditiis autem, nihil volMinus aut
          accusantium cupiditate molestias oluptatibus reiciendis volupt Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. nventore sint
          libero saepe, exercitationem blanditiis autem, nihil volMinus aut
          accusantium cupiditate molestias oluptatibus reiciendis volupt Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. nventore sint
          libero saepe, exercitationem blanditiis autem, nihil volMinus aut
          accusantium cupiditate molestias oluptatibus reiciendis volupt Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. nventore sint
          libero saepe, exercitationem blanditiis autem, nihil volMinus aut
          accusantium cupiditate molestias oluptatibus reiciendis volupt Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. nventore sint
          libero saepe, exercitationem blanditiis autem, nihil volMinus aut
          accusantium cupiditate molestias oluptatibus reiciendis voluptatum
          soluta, fugiat obcaecati.
        </p>
        <div className="flex item-center justify-center mt-8 space-x-2">
          <div className="bg-gray-200 rounded px-3 py-1">Tech</div>
          <div className="bg-gray-200 rounded px-3 py-1">AI</div>
         
          <div className="bg-gray-200 rounded px-3 py-1">Mobile</div>
          <div className="bg-gray-200 rounded px-3 py-1">Laptop</div>
          <div className="bg-gray-200 rounded px-3 py-1">Cmputer</div>
          <div className="bg-gray-200 rounded px-3 py-1">Camera</div>
        </div>

        <div className="flex flex-col mt-4">
            {/* commants */}
            Commants:
          <div className="px-2 py-2 bg-gray-100 rounded-lg mt-1">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-gray-600">@rajakumarsharma</h3>
              <div className="flex space-x-2">
              <div className="flex items-center justify-center space-x-2">
                <p className="text-gray-500 text-sm">12-10-2000</p>
                <p className="text-gray-500 text-sm"> 11:28</p>
              </div>
                <p className="text-green-500 mt-1 cursor-pointer">
                  <BiEdit />
                </p>
                <p className="text-red-500 mt-1 cursor-pointer">
                  <MdDelete />
                </p>
              </div>
            </div>
            <div className="ms-3 ">
                <p className="text-gray-900 text-sm"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="px-2 py-2 bg-gray-100 rounded-lg mt-1">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-gray-600">@rajakumarsharma</h3>
              <div className="flex space-x-2">
              <div className="flex items-center justify-center space-x-2">
                <p className="text-gray-500 text-sm">12-10-2000</p>
                <p className="text-gray-500 text-sm"> 11:28</p>
              </div>
                <p className="text-green-500 mt-1 cursor-pointer">
                  <BiEdit />
                </p>
                <p className="text-red-500 mt-1 cursor-pointer">
                  <MdDelete />
                </p>
              </div>
            </div>
            <div className="ms-3 ">
                <p className="text-gray-900 text-sm"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="px-2 py-2 bg-gray-100 rounded-lg mt-1">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-gray-600">@rajakumarsharma</h3>
              <div className="flex space-x-2">
              <div className="flex items-center justify-center space-x-2">
                <p className="text-gray-500 text-sm">12-10-2000</p>
                <p className="text-gray-500 text-sm"> 11:28</p>
              </div>
                <p className="text-green-500 mt-1 cursor-pointer">
                  <BiEdit />
                </p>
                <p className="text-red-500 mt-1 cursor-pointer">
                  <MdDelete />
                </p>
              </div>
            </div>
            <div className="ms-3 ">
                <p className="text-gray-900 text-sm"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="px-2 py-2 bg-gray-100 rounded-lg mt-1">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-gray-600">@rajakumarsharma</h3>
              <div className="flex space-x-2">
              <div className="flex items-center justify-center space-x-2">
                <p className="text-gray-500 text-sm">12-10-2000</p>
                <p className="text-gray-500 text-sm"> 11:28</p>
              </div>
                <p className="text-green-500 mt-1 cursor-pointer">
                  <BiEdit />
                </p>
                <p className="text-red-500 mt-1 cursor-pointer">
                  <MdDelete />
                </p>
              </div>
            </div>
            <div className="ms-3 ">
                <p className="text-gray-900 text-sm"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="px-2 py-2 bg-gray-100 rounded-lg mt-1">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-gray-600">@rajakumarsharma</h3>
              <div className="flex space-x-2">
              <div className="flex items-center justify-center space-x-2">
                <p className="text-gray-500 text-sm">12-10-2000</p>
                <p className="text-gray-500 text-sm"> 11:28</p>
              </div>
                <p className="text-green-500 mt-1 cursor-pointer">
                  <BiEdit />
                </p>
                <p className="text-red-500 mt-1 cursor-pointer">
                  <MdDelete />
                </p>
              </div>
            </div>
            <div className="ms-3 ">
                <p className="text-gray-900 text-sm"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
            {/* post commants  */}
          <div className="flex flex-col mt-4 md:flex-row">
            <input required type="text" placeholder="Write a comment" className="w-full px-3 py-2 border border-gray-300 rounded"/>
            <button className="bg-black hover:bg-green-300 hover:text-black px-3 py-2 text-white font-bold rounded">Post</button>
          </div>
          
          
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PostDetails;
