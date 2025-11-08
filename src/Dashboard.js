import { useState } from "react";
import Counter from "./Counter.js";

export default function Dashboard() {
  const [counts, setCounts] = useState([0, 0]); // need to use array because two counter values

  const handleCount = (index, newValue) => {
    const newCounts = [...counts];
    newCounts[index] = newValue;
    setCounts(newCounts);
  };

// reset to 0
  const handleReset = () => {
    setCounts([0, 0]);
  };

  const total = counts.reduce((sum, val) => sum + val, 0);

  return (
    <>
      <div className="counter">
        <Counter index={0} value={counts[0]} onCountChange={handleCount}/>
        <Counter index={1} value={counts[1]} onCountChange={handleCount} /> 
      </div>

      <h2>Total Count: {total}</h2>

      <button onClick={handleReset}
        style={{
            padding: "0.5rem",
            backgroundColor: "black",
            border: "1rem",
            color: "white"
            }}> 
        Reset
      </button>
    </>
  );
}
