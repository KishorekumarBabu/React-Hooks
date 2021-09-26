import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DataFectchingOne() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((res) => {
        setLoading(false);
        setPost(res.data);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setPost({});
        setError("Something went wrong!");
      });
  }, []);

  return (
    <div>
      {loading && "Loading..."}
      {error || post.title}
    </div>
  );
}
