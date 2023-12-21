import { useState } from "react";
import "./components/data.jsx";
import Button from "./components/Button.jsx";
import "./App.css";
import buttons from "./components/data.jsx";

function App() {
  let [output, setOutput] = useState(0);
  let [error, newError] = useState('');
  let items = buttons.map((button) => (
    <Button
      key={button.id}
      title={button.title}
      setClass={button.className}
      onClick={() => activateEvent(button.title)}
    ></Button>
  ));

  const activateEvent = (value) => {
    const lastChar = output.toString().slice(-1);

    const appendToOutput = (newValue) => {
      if (!newValue.includes('.') && newValue.replace(/[^0-9]/g, '').length > 20) {
        newValue.slice(0,-1)
        newError("You've gone the maximum number of characters!");
        setTimeout(() => {
          newError('');
        }, 3000);
      } else {
        setOutput(newValue);
      }
    };

    switch (value) {
      case "C":
        setOutput(0);
        break;
      case "0":
        setOutput(output === 0 ? 0 : output + "0");
        break;
      case ".":
        // Check if the last character is not a dot
        if (!lastChar.match(/[.]/)) {
          setOutput(output + ".");
        }
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        // Check if the last character is not an operator
        if (!lastChar.match(/[\+\-\*\/]/)) {
          setOutput(output + value);
        }
        break;
      case "=":
        setOutput(eval(output));
        break;
        default:
          if (typeof output === 'number') {
            setOutput(value);
          } else {
            const newOutput = output === 0 ? value : output + value;
            appendToOutput(newOutput);
          }
          break;
      }
    };
  

  return (
    <>
      <div className="container">
        <div className="display">
          <div className="error-message">{error}</div>
          <div className="output">{output}</div>
        </div>
        <div className="calculations">{items}</div>
      </div>
    </>
  );
}

export default App;
