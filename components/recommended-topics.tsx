import Link from "next/link";
import React from "react";

const RecommendedTopics = () => {
  return (
    <div>
      <h4 className="text-lg font-semibold">Recommended topics</h4>

      <div className="flex gap-3 flex-wrap my-8">
        <span className="rounded-full bg-[#F2F2F2] px-4 py-1 cursor-pointer">
          Java
        </span>
        <span className="rounded-full bg-[#F2F2F2] px-4 py-1 cursor-pointer">
          Java
        </span>
        <span className="rounded-full bg-[#F2F2F2] px-4 py-1 cursor-pointer">
          Java
        </span>
        <span className="rounded-full bg-[#F2F2F2] px-4 py-1 cursor-pointer">
          Java
        </span>
        <span className="rounded-full bg-[#F2F2F2] px-4 py-1 cursor-pointer">
          Java
        </span>
        <span className="rounded-full bg-[#F2F2F2] px-4 py-1 cursor-pointer">
          Java
        </span>
      </div>

      <Link className="text-[rgb(26,137,23)]" href={""}>
        See more topics
      </Link>
    </div>
  );
};

export default RecommendedTopics;
