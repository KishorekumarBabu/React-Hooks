import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HookCounter() {
  // const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  return (
    <div>
      <ul>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        {/* {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))} */}
        <button onClick={() => setIdFromButtonClick(id)}>Fetch Post</button>
        <div>{post.title}</div>
      </ul>
    </div>
  );
}
