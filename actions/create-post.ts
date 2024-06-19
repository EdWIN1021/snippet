"use server";

import { prisma } from "@/prisma/db";

export async function createPost(
  userId: string,
  title: string,
  description: string,
  code: string
) {
  const post = await prisma.post.create({
    data: {
      userId,
      title,
      description,
      code,
    },
  });
  console.log(post);
}
