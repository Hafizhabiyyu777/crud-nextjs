import React from "react";
import AddPost from "../components/AddPost";
import PostList from "../components/PostList";

async function getData() {
    const res = await fetch("http://localhost:3000/api/posts")

    if(!res.ok) {
        throw new Error("Failde to fetch data")
    }
    return res.json();
}

const Crud = async () => {

    const posts = await getData();



  return (
    <div className="max-w-4xl mx-auto mt-4">
     <div className="my-5 flex flex-col gap-4">
        <h1 className="text-3xl font-bold"> TodoList App</h1>
        <AddPost />
    </div>

    <PostList posts={posts} />
    </div>
  )  
};

export default Crud;
