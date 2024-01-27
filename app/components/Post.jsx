import React from "react";

const Post = ({post}) => {
  return (
    <li className="p-3 my-5 bg-slate-200 text-black" key={post.id}>
        <h1 className="text-exl font-bold">{post.title}</h1>
        <p>{post.description}</p>
    </li>
  )  
};

export default Post;
