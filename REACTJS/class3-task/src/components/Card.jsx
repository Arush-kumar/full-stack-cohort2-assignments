const Card = (props) => {
  // console.log(props); // URL check karne ke liye

  return (
    <div className="card sm:flex-col sm:px-1 sm:mx-0 rounded-3xl flex flex-row justify-center h-fit items-center ">
      
      <div
        className="group border-8 shadow-gray-500 h-[340px] w-[270px] bg-cover bg-center rounded-3xl flex justify-between flex-col pb-2 px-2 overflow-hidden"
        style={{ backgroundImage: `url(${props.profile})` }}
        >

      {/* Top Bar Animate */}
        <div className="group border-b border-amber-400 backdrop-blur-xs flex flex-row justify-between items-center text-xl font-bold text-white bg-black/50 w-full text-center py-2 px-4 mt-2 rounded-3xl  transform md:translate-y-6 md:opacity-0
          transition-all duration-500 ease-out group-hover:translate-0 group-hover:opacity-100">  
          <img className="h-[30px] w-[30px] rounded-full border-gray-300 border object-cover" src={props.profile} alt="img" />
          
            <h2 className="text-sm font-semibold text-amber-400">{props.fullname}</h2>
            {/* Social Icons (Animate) */}
          <div className="text-gray-200 font-light flex flex-row justify-center items-center gap-1  transform sm:translate-y-6 sm:opacity-0
          transition-all duration-500 ease-out group-hover:translate-0 group-hover:opacity-100">
            <i className="ri-telegram-2-line"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-threads-line"></i>
          </div>

        </div>

        {/* Bottom Heros & Icon  */}
        <div className="border-b border-amber-400 backdrop-blur-xs flex flex-col justify-between gap-6 text-xl font-bold text-white bg-black/50 w-full text-center py-3 px-4 rounded-3xl transform sm:translate-y-6 sm:opacity-0
          transition-all duration-500 ease-out group-hover:translate-0 group-hover:opacity-100">  
          <div className="transform sm:translate-y-6 sm:opacity-0
          transition-all duration-500 ease-out group-hover:translate-0 group-hover:opacity-100">
            <h2 className="text-xl pb-3 font-bold text-amber-500">{props.fullname}</h2>
            <div className="text-sm font-thin">
              <i className="border rounded-full text-amber-100 mx-2 p-[4px] ri-threads-line"></i>
              <i className="border rounded-full text-amber-100 mx-2 p-[4px] ri-instagram-line"></i>
              <i className="border rounded-full text-amber-100 mx-2 p-[4px] ri-telegram-2-line"></i>
            </div>
            <p className="text-xs text-gray-200 font-light pt-2">{props.description}</p>
          </div>
          <div className="font-thin flex flex-row justify-center items-center gap-2">
            <div className="flex flex-col px-4">
              <h3 className="text-sm font-bold text-amber-400">{props.likeCount}</h3>
              <p className="text-xs">Like</p>
            </div>
            
            <div className="flex flex-col px-4">
              <h3 className="text-sm font-bold text-amber-400">{props.postCount}</h3>
              <p className="text-xs">Post</p>
            </div>
            <div className="flex flex-col px-4">
              <h3 className="text-sm font-bold text-amber-400">{props.viewCount}</h3>
              <p className="text-xs">Views</p>
            </div>

            

          </div>

        </div>

      </div>

    </div>
  );
};

export default Card;
