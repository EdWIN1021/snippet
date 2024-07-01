import { Separator } from "./ui/separator";
import { CircleUser, Bookmark } from "lucide-react";
import type { Post } from "@prisma/client";
import { PostWithAuthor } from "@/types";
import Link from "next/link";

interface PostProps {
  post: PostWithAuthor;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <>
      <Link href={`/posts/${post.id}`} className="p-10">
        <div className="flex ">
          <div>
            <div className="flex gap-1">
              <CircleUser />

              <div className="text-sm">
                <span>{post.user.name}</span>

                <span className="text-dark-gray">
                  &middot; {post.createdAt.toLocaleDateString()}
                </span>
              </div>
            </div>
            <h2 className="py-1 text-xl font-bold">{post.title}</h2>
            <p>{post.description}</p>
          </div>
        </div>

        <div className="flex items-center mt-5 justify-between">
          <div className="flex gap-4">
            <span className="text-sm rounded-full bg-[#F2F2F2] px-2 py-1 cursor-pointer inline-block">
              {post.language}
            </span>
          </div>

          <Bookmark />
        </div>
      </Link>

      <Separator />
    </>
  );
};

export default Post;
