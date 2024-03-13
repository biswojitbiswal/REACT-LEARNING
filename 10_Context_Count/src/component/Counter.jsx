import React, { useContext } from 'react';
import { CountContext } from '../context/CountContext';

function Counter() {
    const { count, setCount } = useContext(CountContext);
    return (
        <>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            
        </>
    );
}

export default Counter;