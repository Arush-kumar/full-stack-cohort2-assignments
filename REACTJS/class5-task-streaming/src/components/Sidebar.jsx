
const Sidebar = (props) => {
  console.log(props.links);
  
  return (
    
      <div className="left w-1/4 h-full p-2">
        <div className="leftSidebar h-full w-full rounded-xl backdrop-blur-sm bg-gray-600/30 border border-amber-100">
          <div className="flex gap-1 items-center justify-between px-3 py-4 text-sm text-white">
            <div className="flex w-full  gap-4">
              <i className="ri-live-line font-extrabold text-2xl"></i>
            <h1 className="whitespace-nowrap text-xl font-bold text-white">
              Stream
            </h1>
            </div>
            <i className="ri-menu-fold-line"></i>
          </div>

          <div className="flex flex-col gap-2.5 px-4 pb-8">
            <div className="flex gap-2 text-sm font-thin text-white">
              <i className="ri-home-office-fill cursor-pointer"></i>
              <p>Home</p>
            </div>

            <div className="flex gap-2 text-sm font-thin text-white">
              <i className="ri-compass-3-line cursor-pointer"></i>
              <p>Explore</p>
            </div>
            <div className="flex gap-2 text-sm font-thin text-white">
              <i className="ri-database-2-line cursor-pointer"></i>
              <p>Genres</p>
            </div>
            <div className="flex gap-2 text-sm font-thin text-white">
              <i className="ri-bookmark-line cursor-pointer"></i>
              <p>Bookmarks</p>
            </div>
          </div>

          <div className="h-4 w-full px-4">
            <div className="underline w-full h-[0.008rem] bg-gray-300"></div>
          </div>

          <div className="flex flex-col gap-2.5 px-4 pt-4">
            <div className="flex gap-2 text-sm font-thin text-white">
              <i className="ri-home-office-fill cursor-pointer"></i>
              <p>Home</p>
            </div>

            <div className="flex gap-2 text-sm font-thin text-white">
              <i className="ri-compass-3-line cursor-pointer"></i>
              <p>Explore</p>
            </div>
            <div className="flex gap-2 text-sm font-thin text-white">
              <i className="ri-database-2-line cursor-pointer"></i>
              <p>Genres</p>
            </div>
            <div className="flex gap-2 text-sm font-thin text-white">
              <i className="ri-bookmark-line cursor-pointer"></i>
              <p>Bookmarks</p>
            </div>
          </div>

          <div className="h-4 w-full px-4 py-8">
            <div className="underline w-full h-[0.008rem] bg-gray-300"></div>
          </div>

          <div className="flex flex-col gap-14">
            <div className="flex px-4 gap-2 text-sm font-thin text-white">
              <i className="ri-settings-3-line cursor-pointer"></i>
              <p>Settings</p>
          </div>


          <div className=" flex px-4 gap-2 text-sm font-thin text-white">
              <i className="ri-logout-box-r-line cursor-pointer"></i>
              <p>Logout</p>
          </div>
          </div>

        </div>
      </div>

  )
}

export default Sidebar
