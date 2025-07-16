import { useState } from 'react'
import Display from "./components/Display"
import Keypad from './components/Keypad'
import './App.css'

function App() {
  const [input, setInput] = useState(0);

  function handleClick(e) {
    const char = e.target.label;
    const last = input.slice(-1);
    const lastTwo = input.slice(-2);

    if (char === "C") {
      return setInput(0);
    }

    if ("+-x/".includes(char) && "+-x/".includes(last)) {
      if (/[+x/]-/.test(lastTwo)) {
        setInput(input.slice(0, -2) + char);
        return;
      }
      setInput(input.slice(0, -1) + char);
      return;
    }

    if(char === "-" && /--$/.test(lastTwo)) return;
    if(char === "-"&& /[+x/]-$/.test(lastTwo)) return;

    
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
