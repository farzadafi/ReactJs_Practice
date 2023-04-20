import {useState} from "react";

function App() {
    let [number, setNumber] = useState(0)
    return (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center'}}>
            <button onClick={() => { setNumber(--number) }}>-</button>
            <div>{number}</div>
            <button onClick={() => { setNumber(++number ) }}>+</button>
        </div>

    )
}

export default App
