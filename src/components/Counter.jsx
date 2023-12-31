import { useState } from 'preact/hooks';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <span class="border px-4 py-2 text-xl text-yellow-300 ">{count}</span>
      <button class="border px-4 py-2 text-xl" onClick={() => setCount(count + 1)}>+</button>
      <button class="border px-4 py-2 text-xl" onClick={() => setCount(count - 1)}>-</button>
    </>
  )
}