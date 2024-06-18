import Link from "next/link";
import React from "react";

const brand = () => {
  return (
    <Link
      className="bg-black text-xl font-bold text-white whitespace-nowrap text-center px-2 py-1"
      href={"/"}
    >
      Snippet
    </Link>
  );
};

export default brand;
