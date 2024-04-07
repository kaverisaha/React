import { useState } from "react";
// import reactLogo from './assets/react.svg'
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);
  // let counter = 5;
  const AddCounter = () => {
    setCounter(counter + 1);
    // setCounter((counter) => counter + 1);        **useState update in batches**

    console.log("clicked", counter);
  };
  const removeCounter = () => {
    setCounter(counter - 1);
    console.log("clicked", counter);
  };

  return (
    <>
      <h1>hello</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={AddCounter}>Add Value {counter}</button>
      <button onClick={removeCounter}>Remove Value {counter}</button>
    </>
  );
}

export default App;
