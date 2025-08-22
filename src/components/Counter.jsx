import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 3)}>+3</button>
            <button onClick={() => setCount(count - 3)}>-3</button>
        </div>
    );
}

export default Counter;
