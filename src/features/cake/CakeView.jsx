import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const numOfCake = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes: {numOfCake} </h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(3))}>Restock Cakes</button>
    </div>
  );
};

export default CakeView;
