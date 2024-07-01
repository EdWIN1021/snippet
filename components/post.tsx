import { Separator } from "./ui/separator";
import { CircleUser, Bookmark } from "lucide-react";
import type { Post } from "@prisma/client";

interface PostProps {
  post: Post;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <>
      <div className="p-10">
        <div className="flex ">
          <div>
            <div className="flex gap-1">
              <CircleUser />

              <div className="text-sm">
                <span>Unbecoming</span>

                <span className="text-dark-gray"> &middot; Feb 16, 2022</span>
              </div>
            </div>
            <h2 className="py-1 text-xl font-bold">{post.title}</h2>
            <p>{post.description}</p>
          </div>
        </div>

        <div className="flex items-center mt-5 justify-between">
          <div className="flex gap-4">
            <span className="text-sm rounded-full bg-[#F2F2F2] px-2 py-1 cursor-pointer inline-block">
              {"Java"}
            </span>
          </div>

          <Bookmark />
        </div>
      </div>

      <Separator />
    </>
  );
};

export default Post;
