import React from "react";
import Post from "./Post";

const PostList = ({ posts }) => {
  return (
    <div>
        
      <ul>
        {
        posts.map(post => (
          <Post key={post.id} post={post} />
        ))
        }
      </ul>

    </div>
  );
};

export default PostList;
