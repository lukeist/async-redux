import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Search = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <input type="text" />
      <h1>SEARCH {counter}</h1>
    </div>
  );
};

export default Search;
