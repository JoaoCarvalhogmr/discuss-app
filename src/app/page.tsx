import TopicCreateForm from "@/components/topics/TopicCreateForm";
import TopicList from "@/components/topics/TopicList";
import { Separator } from "@/components/ui/separator";
import PostList from "@/components/posts/PostList";
import { fetchTopPosts } from "@/db/queries/posts";


export default async function Home() {
  
  return (
    <main className="grid grid-cols-4 gap-4 p-4">
        <section className="col-span-3">
          <h1 className="text-xl m-2">
            Top Posts
          </h1>
          <PostList fetchData={fetchTopPosts} />
        </section>
        <section className="border shadow py-3 px-2">
          <TopicCreateForm />
          <Separator className="my-2" />
          <h3 className="text-lg">Topics</h3>
          <TopicList />
        </section>
    </main>
  );
}
