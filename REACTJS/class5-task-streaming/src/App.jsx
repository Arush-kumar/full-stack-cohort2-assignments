import "./App.css";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";

const App = () => {
  const links = ["Home", "Explore", "Genres", "Movies", "TV Shows"]
  
  const handleSidebar = () => {
    links.map((item) => console.log(item)); 
  };
  
  return (
    <div className="bg-[url(https://images.pexels.com/photos/7862595/pexels-photo-7862595.jpeg)] h-screen w-full p-2 flex bg-cover bg-center bg-no-repeat">
      <Sidebar links={links} onClick={handleSidebar}/> 
      <Hero />
    </div>
  );
};

export default App;
