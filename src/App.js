import { useState } from "react";
import * as math from "mathjs";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const buttonColor = "#f2a33c";

  function addToText(val) {
    setText((text) => [...text, val + ""]);
  }

  function calculateResult() {
    const input = text.join("");
    setResult(math.evaluate(input));
  }

  function resetInput() {
    setText("");
    setResult("");
  }

  return (
    <div className="app">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="row">
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="/" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="*" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="." handleClick={addToText} />
          <Button symbol="=" handleClick={calculateResult} />
          <Button symbol="-" color={buttonColor} handleClick={addToText} />
        </div>
        <Button symbol="Clear" color={buttonColor} handleClick={resetInput} />
      </div>
    </div>
  );
}

export default App;
