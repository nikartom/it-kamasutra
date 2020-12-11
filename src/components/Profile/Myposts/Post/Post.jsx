import React from "react";
import css from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={css.item}>
      <div>
        { props.message }
      </div>
    </div>
  );
};

export default Post;
