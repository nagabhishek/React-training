import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PostsFunctional() {
  let [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setAllPosts(response.data));
  }, []);

  return (
    <div>
      <h2>All Posts</h2>

      <ul className="list-group">
        {allPosts.map((post) => (
          <li className="list-group-item" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
