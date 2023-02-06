import React from "react";
const Post = ({ post }) => {
  return (
    <div>
      {post &&
        post.map((item) => {
          return <p>{item.title}</p>;
        })}
    </div>
  );
};
export default Post;
