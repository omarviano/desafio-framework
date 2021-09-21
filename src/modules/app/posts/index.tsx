import React, { useEffect, useState } from 'react';

import { Post } from './models/post';
import { PostsServices } from './services';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    PostsServices.list().then(({ data }) => setPosts(data));
  }, []);

  return (
    <div>
      <ul>
        {posts.map(post => (
          <li>
            {post.title}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
