import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";

const App = () => {
  const links = ["Home", "Explore", "Genres", "Movies", "TV Shows"]
  

  
  return (
    <div className="bg-[url(https://images.pexels.com/photos/6226813/pexels-photo-6226813.jpeg)] h-screen w-full p-2 flex bg-cover bg-center bg-no-repeat">
      <Sidebar links={links}/> 
      <Hero />
    </div>
  );
};

export default App;
