"use client";

import Modal from "./Modal";
import { useState } from "react";

const AddPost = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputs, setInputs] = useState({})
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(prevState => ({...prevState, [name]: value}));
  }

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-700 text-white p-3 cursor-pointer"
      >
        Add New Post
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form className="w-full" onSubmit={handleSubmit}>
          <h1 className="text-2xl pb-3">Add New Post</h1>

          <input
            type="text"
            name="title"
            placeholder="Title"
            className="w-full p-2"
            value={inputs.title || ""}
            onChange={handleChange}
          />

          <input
            type="text"
            name="Description"
            placeholder="description"
            className="w-full p-2 my-5"
            value={inputs.description || ""}
            onChange={handleChange}
          />

          <button type="submit" className="bg-blue-700 text-white px-5 py-3">Submit</button>
        </form>
      </Modal>
    </div>
  );
};

export default AddPost;
