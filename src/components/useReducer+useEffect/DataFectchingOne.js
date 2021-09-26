import React, { useEffect, useReducer } from "react";
import axios from "axios";
const initialState = {
  loading: true,
  error: "",
  post: {}
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: "",
        post: action.value
      };

    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: "Something went wrong!",
        post: {}
      };

    default:
      return state;
  }
};

export default function DataFectchingOne() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, error, post } = state;

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicde.com/posts/1`)
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", value: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <div>
      {loading && "Loading..."}
      {error || post.title}
    </div>
  );
}
