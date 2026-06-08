import { useState } from "react";

function StateDemo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>State Demo</h1>

      <div className="card">
        <h2>Counter Value: {count}</h2>

        <button onClick={() => setCount(count + 1)}>
          Increase
        </button>

        <button onClick={() => setCount(count - 1)}>
          Decrease
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default StateDemo;
