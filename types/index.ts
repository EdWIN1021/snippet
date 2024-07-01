import type { Post } from "@prisma/client";

export type PostWithAuthor = Post & {
  user: { name: string | null };
};
