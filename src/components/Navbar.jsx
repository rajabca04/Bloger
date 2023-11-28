import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function Navbar() {
  const {
    transcript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const user = false;
  return (
    <div className="flex items-center justify-between px-6 text-xl md:px-[200px] py-4  ">
      <h1 className="text-3xl text-black ">
        <Link to="/">Blog Marcket</Link>
      </h1>
      <div className="flex justify-center items-center space-x-0 border rounded-3xl border-gray-300">
        <p  className=" ms-1 text-gray-400 cursor-pointer text-2xl">
          <IoSearchSharp />
        </p>
     
        {/* <p>{listening ? 'on' : 'off'}</p> */}
      {/* <button onClick={SpeechRecognition.stopListening}>Stop</button> */}
      {/* <button onClick={resetTranscript}>Reset</button> */}
      {/* <p>{transcript}</p> */}
        <input
          type="search"
          placeholder="Search Blogs..."
          className="outline-none px-3 py-1"
          value={transcript}
        />
      <button  className=" text-gray-400 cursor-pointer text-xl " onClick={SpeechRecognition.startListening}><FaMicrophone /></button>
 
      </div>
      <div className=" flex items-center justify-center space-x-2 md:space-x-4">
        {user ? (
          <h3 className="text-blue-700">
            <Link to="/create-blog">Create-blog</Link>
          </h3>
        ) : (
          <h3 className="text-black">
            <Link to="/login">Login</Link>
          </h3>
        )}

        {user ? (
          <h3 className="text-green-700">
            <Link to="/profile">Profile</Link>
          </h3>
        ) : (
          <h3 className="text-black">
            <Link to="/register">Register</Link>
          </h3>
        )}
      </div>
    </div>
  );
}

export default Navbar;
