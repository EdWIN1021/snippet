import type { Post } from "@prisma/client";
import React from "react";

interface PostDetailProps {
  post: Post;
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold text-center">{post.title}</h2>
      <div>{post.description}</div>
      <div>{post.code}</div>
    </div>
  );
};

export default PostDetail;
