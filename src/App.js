import React, { useState, useRef } from "react";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ]);

  const [post, setPost] = useState({ title: "", body: "" });
  const [body, setBody] = useState("");

  // const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();

    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", body: "" });
  };

  return (
    <div className="App">
      <form>
        {/*Controlled Component */}
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Post Name"
        />

        {/* Uncontrolled Component */}
        <MyInput
          // ref={bodyInputRef}
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Post Description"
        />
        <MyButton onClick={addNewPost}>Create Post</MyButton>
      </form>
      <PostList posts={posts} title="Index of JS Posts" />
    </div>
  );
}

export default App;
