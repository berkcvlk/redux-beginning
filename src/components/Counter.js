import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const showCounter = useSelector((state) => state.counter.show);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseByHandler = (number) => {
    dispatch(counterActions.increase(number));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{showCounter && counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseByHandler.bind(null, 5)}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
