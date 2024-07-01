import { fetchPosts } from "@/actions";
import Post from "@/components/post";
import RecommendedTopics from "@/components/recommended-topics";
import WhoToFollow from "@/components/who-to-follow";

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <div className="flex">
      <div className="basis-3/5 px-10">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>

      <div className="border-l p-10 flex flex-col gap-16">
        <RecommendedTopics />
        <WhoToFollow />
        {/* <RecentlySaved /> */}
      </div>
    </div>
  );
}
