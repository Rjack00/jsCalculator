import { useState } from 'react'
import Display from "./components/Display"
import Keypad from './components/Keypad'
import { evaluateExpr } from './utils/calculatorLogic'
import './App.css'

function App() {
  const [input, setInput] = useState("0");

  function handleClick(e) {
    const char = e.target.innerText;
    const last = input.slice(-1);
    const lastTwo = input.slice(-2);

    if (/=/.test(input) && "+x-/".includes(char)) {
      setInput(input.slice(2) + char);
      return;
    }

    if ("+x/".includes(char) && (/^[0=]/.test(input) || /^[+x/]/.test(input))) {
      console.log("Input starts with 0 or =.")
      setInput("0");
      return;
    }

    if (char === "C") {
      return setInput("0");
    }

    if ("+x/".includes(char) && "+-x/".includes(last)) {
      if (/[+x/]-/.test(lastTwo)) {
        setInput(input.slice(0, -2) + char);
        return;
      }
      setInput(input.slice(0, -1) + char);
      return;
    }

    if(char === "-" && /\-\-$/.test(lastTwo)) {
      console.log("Char: ", char);
      console.log("lastTwo: ", lastTwo);
      return;
    };
    if(char === "-"&& /[+x/]-$/.test(lastTwo)) return;

    if (char === ".") {
      const operands = input.split(/[+\-x/]/g);
      console.log("operands: ",operands)
      if(operands[operands.length -1].includes(".") || (!/[+\-x/]/.test(input) && input.includes("."))) {
        console.log('"!"+-x/".includes(input): ', "TEST");
        return;
      };
    }
    
    setInput(input === "0" || /=/.test(input) ? char : input + char);
  }

  function handleEqualsClick (e) {
    if (e.target.innerText === "=") {
      try { 
        const result = evaluateExpr(input);
        setInput(result);
      } catch {
        setInput("Error");
      }
    }
  }

  return (
    <div className="container">
      <Display input={input} />
      <Keypad onInput={handleClick} onEquals={handleEqualsClick} />
    </div>
  )
}

export default App
