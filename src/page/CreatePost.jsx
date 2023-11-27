import Navbar from "../components/Navbar";
import { ImCross } from "react-icons/im";
import { useState } from "react";

function CreatePost() {
    const [addCat, setAddCat] = useState('')
    const [cats, setCats] = useState([])
    const addCategory = ()=>{
        let updatedCats = [...cats]
        updatedCats.push(addCat)
        setAddCat('')
        setCats(updatedCats)
    }

    const deleteCategory = ()=>{
        let updatedCats = [...cats]
        updatedCats.pop()
        setCats(updatedCats)
    }
  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-[200px] mt-8">
        <h1 className="text-3xl font-bold items-center flex flex-col mb-3">
          Create Post
        </h1>

        <form
          action=""
          className="flex flex-col space-y-4 border-2 border-black p-8 rounded-lg hover:bg-green-100 mb-5"
        >
          <input
            type="text"
            placeholder="Title"
            className="w-full px-4 py-2 border-2 border-black outline-0  rounded-lg"
          />
          <input
            type="file"
            className="w-full px-4 py-2 border-2  border-black outline-0 rounded-lg"
          />
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              <input
                value={addCat} onChange={(e)=>setAddCat(e.target.value)}
                type="text"
                placeholder="Categories"
                className="w-full px-4 py-2 border-2 border-black outline-0 rounded-lg"
              />
              <div onClick={addCategory} className="  cursor-pointer px-4 py-2 bg-black text-white rounded-lg hover:bg-green-400 hover:text-black font-bold">
                Add
              </div>
            </div>
            {
                cats?.map((cat,index)=>{
                    <div key={index} className="flex justify-center items-center space-x-2 mr-4 mg-gray px-2 py-1 rounded-md">
              <p>{cat}</p>
              <p onClick={deleteCategory}   className="cursor-pointer text-sm font-extralight">
                <ImCross />
              </p>
            </div>
                })
            }
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Description"
              className="w-full px-4 py-2 border-2 border-black outline-0 rounded-lg"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
