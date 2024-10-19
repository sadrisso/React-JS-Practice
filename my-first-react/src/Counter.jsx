import { useState } from "react"

export default function Counter()
{
    const [count, setCount] = useState(0);

    const handleCount = () => {
        let newCount = count + 1;
        setCount(newCount)
    }

    const handleReduce = () => {
        let reduceNumber = count -1;
        setCount(reduceNumber)
    }

    const counterStyle = {
        border: '2px solid tomato',
        borderRadius: "10px",
        padding: '10px',
        margin: '10px'
    }

    return (
        <div style={counterStyle}>
            <div>Counter: {count}</div>
            <button onClick={handleCount}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}