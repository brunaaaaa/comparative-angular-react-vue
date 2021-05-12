import { useState } from "react";

function MyForm() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  return (
    <form>
      <label>
        Height in m
        <input
          type="number"
          autofocus
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <label>
        Weight in kg
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      Result: {(weight / height ** 2).toFixed(2)}
    </form>
  );
}

export default MyForm;
