import type { Post } from "@prisma/client";

type PostWithAuthor = Post & {
  user: { name: string | null };
};
