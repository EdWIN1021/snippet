"use server";

import { prisma } from "@/prisma/db";
import type { Post } from "@prisma/client";

export const fetchPost = async (postId: string): Promise<Post | null> => {
  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  return post;
};
