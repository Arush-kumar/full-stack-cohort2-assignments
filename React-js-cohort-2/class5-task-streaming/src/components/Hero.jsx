const Hero = () => {
  return (
    <div className="rightContent w-full h-full rounded-xl backdrop-blur-xl bg-black/40 p-2">
      <div className="w-full flex items-center justify-between">
        <div className="left-nav relative w-fit h-fit">
          <input
            type="search"
            placeholder="Search for films directors and actors..."
            name="search"
            id="screen"
            className="w-80 h-8 rounded-lg outline-amber-100  outline-1 px-10 text-sm text-white font-thin"
          />
          <label htmlFor="search"></label>
          <i
            id="search"
            className="ri-search-line absolute top-1 left-4  text-gray-200 font-semibold cursor-pointer"
          ></i>
        </div>

        <div className="right-nav w-16 h-fit flex justify-between items-center gap-2 px-2.5">
          <i className="ri-notification-4-line text-white text-xl "></i>
          <img
            src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg"
            alt="profile"
            className="w-6 h-6 rounded-full"
          />
        </div>
      </div>

      <div className="h-60 w-full pt-2">
        <div className="bg-[url(https://images.pexels.com/photos/9811664/pexels-photo-9811664.jpeg)] h-full rounded-2xl border border-white w-full flex bg-cover bg-top bg-no-repeat px-6">
          <h1 className="text-6xl text-amber-500">hello</h1>
        </div>
      </div>

      <div className="h-screen/2 flex flex-col gap-2 pt-2 overflow-y-auto overflow-x-hidden scrollbar-hide">
        <div className="h-32 w-full bg-amber-800">

        </div>

        <div className="h-32 w-full bg-pink-900">

        </div>
        <div className="h-32 w-full bg-amber-800">

        </div>

        <div className="h-32 w-full bg-pink-900">

        </div>
      </div>

    </div>
  );
};

export default Hero;
