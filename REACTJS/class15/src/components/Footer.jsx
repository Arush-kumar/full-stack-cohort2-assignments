import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Footer = () => {
    const [theme, setTheme] = useContext(ThemeDataContext);
    console.log(theme);
    
  return (
    <div>
      <h1>Footer</h1>
      <p>{theme}</p>
    </div>
  )
}

export default Footer
