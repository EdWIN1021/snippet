"use server";

import { prisma } from "@/prisma/db";
import type { Post } from "@prisma/client";

export type PostWithAuthor = Post & {
  user: { name: string | null };
};

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
