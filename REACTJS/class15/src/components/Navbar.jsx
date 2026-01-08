import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Navbar = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);

  // console.log(themeData);
  
  return (
    <div className="flex items-center justify-between">
      <h1>Navbar</h1>
      <h2>{theme}</h2>
      <button onClick={() => {
        if(theme === 'light') return setTheme('dark')
          setTheme('light')
      }}>change theme</button>
    </div>
  )
}

export default Navbar
