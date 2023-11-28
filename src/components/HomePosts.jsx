

function HomePosts() {
  return (
    <>
     
      <div className="w-full flex mt-8 space-x-4">
        {/* left */}
        <div className="w-[35%] h-[200px] flex justify-center items-center mt-5">
          <img
            className="w-full h-full object-cover rounded"
            src="https://th.bing.com/th?id=ORMS.c846a182b9606bb173d721a0d7050489&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0"
            alt=""
          />
        </div>

        {/* right */}
        <div className="w-[65%] flex flex-col mt-5">
          <h1 className="text-3xl font-bold md:mb-2 mb-1 md:text-2xl">
            New iquea 15 pro max|lounch.
          </h1>
          <div className="flex justify-between mb-2 text-sm font-semibold text-gray-500 space-x-4 md:mb-4">
            <p>@rajakumarsharma</p>
            <div className="flex space-x-2">
              <p>12-10-2000</p>
              <p>11:28 AM</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. nventore sint libero
            saepe, exercitationem blanditiis autem, nihil 
            volMinus aut accusantium cupiditate molestias
           oluptatibus reiciendis voluptatum
            soluta, fugiat obcaecati.
          </p>
        </div>
      </div>

    </>
  );
}

export default HomePosts;
