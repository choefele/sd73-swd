import { useState } from "react";

function Component({ text, number }: { text: string; number?: number }) {
  const [counter, setCounter] = useState(number || 0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>Component</h1>
      <p>Test text {text}</p>
      {number && (
        <p>
          Number {"<"}
          {counter}
          {">"}
        </p>
      )}
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default Component;
