"use client";

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { increment, decrement, reset } from "@/lib/redux/slices/counterSlice";

export function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">Counter: {count}</h2>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Reset
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Increment
        </button>
      </div>
    </div>
  );
}
