import React, { useState } from 'react';

const Counter = () => {
  // Initialize counter state with useState
  const [count, setCount] = useState(0);

  // Functions to handle increment and decrement
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h1>Counter: {count}</h1>
      
      {/* Buttons for increment and decrement */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
