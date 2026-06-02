import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Footer = () => {
    const [theme, setTheme] = useContext(ThemeDataContext);
    console.log(theme);
    
  return (
    <div>
      <h1>Footer</h1>
      <p>{theme}</p>
      <button onClick={() => {
        if(theme === 'light') return setTheme('dark')
          setTheme('light')
      }}>change theme</button>
    </div>
  )
}

export default Footer
