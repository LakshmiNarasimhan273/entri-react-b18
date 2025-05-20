import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/action';
const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Counter</h2>
      <h3>{count}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button>{' '}
      <button onClick={() => dispatch(decrement())} disabled={count===0}>Decrement</button>
      <button onClick={() => dispatch(reset())} disabled={count===0}>Reset</button>
    </div>
  );
};

export default Counter;
