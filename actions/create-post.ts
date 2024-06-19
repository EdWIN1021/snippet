"use server";

import { prisma } from "@/prisma/db";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  code: z.string().min(10),
});

interface CreatePostFormState {
  errors: {};
}

export async function createPost(
  { userId, code }: { userId: string; code: string },
  formState: CreatePostFormState,
  formData: FormData
) {
  const result = schema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    code,
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  await prisma.post.create({
    data: {
      userId,
      title: result.data.title,
      description: result.data.description,
      code,
    },
  });

  return {
    errors: {},
  };
}
