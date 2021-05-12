import { useState } from 'react';

function MyForm() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  return (
    <form>
      <label>
        Height in m
        <input
          type='number'
          autofocus
          value={height}
          onChange={e => setHeight(e.target.value)}
          required
          placeholder='e.g. 1,60'
        />
      </label>
      <br />
      <br />
      <label>
        Weight in kg
        <input
          type='number'
          value={weight}
          onChange={e => setWeight(e.target.value)}
          required
          placeholder='e.g. 70'
        />
      </label>
      <p class='flow-text'>Result: {(weight / height ** 2).toFixed(2)}</p>
    </form>
  );
}

export default MyForm;
