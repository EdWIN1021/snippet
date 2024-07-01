import { fetchPost } from "@/actions";
import PostDetail from "@/components/post-detail";
import { notFound } from "next/navigation";

export default async function Post({ params }: { params: { postId: string } }) {
  const post = await fetchPost(params.postId);

  if (!post) return notFound();

  return <PostDetail post={post} />;
}
