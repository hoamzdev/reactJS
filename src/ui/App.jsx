
import { createContext, useEffect, useState } from 'react';
import '../styles/app.css';
import Toolbar from '../components/Toolbar';

export const ThemeContext = createContext();


export default function App() {

  const [count, setCount] = useState(0);
  const [color, setColor] = useState('');

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  useEffect(() => {
    if (count % 2 == 0) {
      setColor(
        'blue'
      )
    }
    else {
      setColor(
        'red'
      )
    }
    return () => {
      console.log('clean up');
    }
  }, [count]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app">
        <p>{count}</p>

        <div style={{ backgroundColor: color, width: '80px', height: '80px' }}></div>
        <Toolbar />
      </div>
    </ThemeContext.Provider>
  )
}
