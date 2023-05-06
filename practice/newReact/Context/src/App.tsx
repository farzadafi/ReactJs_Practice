import React, {createContext, useContext, useState} from "react";

function Counter() {
  const {counter, handleClick} = useCounter()
  return (
    <div>
      <h1>I'm counter Component</h1>
      {counter}
      <button onClick={handleClick}>increment</button>
    </div>
  );
}

function Child() {
  return (
    <div>
      <h1>I'm Child Component</h1>
      <Counter/>
    </div>
  );
}

function Parent() {
  return (
    <div>
      <h1>I'm Parent Component</h1>
      <Child/>
    </div>
  );
}

type CounterContextType = {
  counter: number;
  handleClick: () => void
}

const CounterContext = createContext<null | CounterContextType>(null);
const useCounter = () => {
  return useContext(CounterContext)
}

const CounterProvider = ({children}: { children: React.ReactNode }) => {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(prev => prev + 1);
  }

  return (
    <CounterContext.Provider value={{counter, handleClick}}>
      {children}
    </CounterContext.Provider>
  );
};

function App() {


  return (
    <CounterProvider>
      <div>
        <h1>I'm Root Component</h1>
        <Parent/>
      </div>
    </CounterProvider>
  )
    ;
}

export default App;
