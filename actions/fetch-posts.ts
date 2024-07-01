"use server";

import { prisma } from "@/prisma/db";
import { PostWithAuthor } from "@/types";

export const fetchPosts = async (): Promise<PostWithAuthor[]> => {
  const posts = await prisma.post.findMany({
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
  });

  return posts;
};
