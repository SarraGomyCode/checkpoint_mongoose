import React from "react";
import { useDispatch } from "react-redux";
import { toggleAdd } from "../JS/actions/edit";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/add">
        {" "}
        <button onClick={() => dispatch(toggleAdd)}>Add</button>{" "}
      </Link>
      <Link path="/">
        <button>ContactList</button>
      </Link>
    </div>
  );
};

export default Home;
