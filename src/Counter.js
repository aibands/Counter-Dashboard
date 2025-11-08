import { useState, useEffect } from "react"; 
// use effect for timestamp

export default function Counter({ index, value, onCountChange }) {
  const [UpdatedValue, setUpdatedValue] = useState(null);

  const countUp = () => {
    const newValue = value + 1;
    onCountChange(index, newValue);
    setUpdatedValue(new Date().toLocaleTimeString('en-US',{ hour: '2-digit', minute: '2-digit' })); //show just hour and minute only
  };

  const countDown = () => {
    const newValue = value - 1;
    onCountChange(index, newValue);
    setUpdatedValue(new Date().toLocaleTimeString('en-US',{ hour: '2-digit', minute: '2-digit' }));
  };

  // reset timestamp if counter reset
  useEffect(() => {
    if (value === 0) setUpdatedValue(null);
  }, [value]);

  return (
    <>
      <h1>Counter {index + 1}</h1>
      <h3>{value}</h3>

      <div>
        <button style={{padding: "0.5rem", width: "3rem", marginRight: "1rem"}} onClick={countDown}>-</button>
        <button style={{padding: "0.5rem", width: "3rem"}} onClick={countUp}>+</button>
      </div>

      {UpdatedValue && (
        <p> Last updated: {UpdatedValue}
        </p>
      )}
    </>
  );
}
