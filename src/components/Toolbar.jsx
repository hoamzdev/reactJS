import { useContext } from "react";
import { ThemeContext } from "../ui/App";


export default function Toolbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return <>
    <p>{theme === 'light' ? "OK" : "Not OK"}</p>
    <button onClick={toggleTheme}>Toggle</button>
  </>
}