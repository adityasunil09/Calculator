import { useState } from "react";

import * as math from "mathjs";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

const App= () => { 
  const [text, setText]= useState("");
  const [result, setResult]= useState("");
  
  const addToText = (val) => {
    setText((text)=> [...text, val + " "])
  };

 
 const calculateResult = () => {
  const input = text.join(""); 
  // result
setResult(math.evaluate(input)); 
 };
 
  const resetInput = (val) => {
    setText("");
    setResult("");
  };

 const ButtonColor ="#f2a33c";

  return (
    <div className="App">
      <div className="calc-wrapper">
       <Input text={text} result={result} />
        <div className="row">
      <Button symbol="7" handleClick={addToText} />
      <Button symbol="8" handleClick={addToText} />
      <Button symbol="9" handleClick={addToText} />
      <Button symbol="/" color={ButtonColor} handleClick={addToText} />
    </div>
    <div className="row">
      <Button symbol="4" handleClick={addToText}/>
      <Button symbol="5" handleClick={addToText}/>
      <Button symbol="6" handleClick={addToText}/>
      <Button symbol="*"color={ButtonColor} handleClick={addToText}/>
    </div>
    <div className="row">
      <Button symbol="1" handleClick={addToText}/>
      <Button symbol="2" handleClick={addToText}/>
      <Button symbol="3" handleClick={addToText}/>
      <Button symbol="+"color={ButtonColor} handleClick={addToText}/>
    </div>
    <div className="row">
      <Button symbol="0" handleClick={addToText}/>
      <Button symbol="." handleClick={addToText}/>
      <Button symbol="=" handleClick={calculateResult}/>
      <Button symbol="-"color={ButtonColor} handleClick={addToText}/>
    </div>
    <Button symbol="Clear"color="red" handleClick={resetInput} />
  </div>
</div>
  );
};

export default App;   
