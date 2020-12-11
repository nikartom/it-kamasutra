import React from "react";
import css from "./Myposts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={css.posts}>
      <div>
        <Post message='Hi, how are you?'/>
        <Post message='Its my first post'/>
      </div>
    </div>
  );
};

export default MyPosts;
