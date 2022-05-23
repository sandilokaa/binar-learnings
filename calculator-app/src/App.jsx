import logo from './logo.svg';
import './App.css';

import { useRef, useState } from "react";
import Button from './components/Button';
import {ACTIONS} from './libs/const';

function App() {

  const [ result, setResult] = useState(0);

  const valueOne = useRef();
  const valueTwo = useRef();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Simple Calculator </p>
        <div>
          <h1>{result}</h1>
          <div>
            <form>
              <label> Value 1 </label>
              <input type="number" ref={valueOne}/>
              
              <br />
              
              <label> Value 2 </label>
              <input type="number" ref={valueTwo}/>
            </form>
          </div>
          <div>
            <Button
            valueOne={valueOne}
            valueTwo={valueTwo}
            setResult={setResult}
            action={ACTIONS.SUM}
            text="Sum"
            />
            <Button
            valueOne={valueOne}
            valueTwo={valueTwo}
            setResult={setResult}
            action={ACTIONS.MIN}
            text="Min"
            />
            <Button
            valueOne={valueOne}
            valueTwo={valueTwo}
            setResult={setResult}
            action={ACTIONS.MULTIPLY}
            text="Multiply"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
