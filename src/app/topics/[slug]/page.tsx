import PostCreateForm from "@/components/posts/PostCreateForm";
import PostList from "@/components/posts/PostList";
import { fetchPostsByTopicSlug } from "@/db/queries/posts";
import { fetchTopicBySlug } from "@/db/queries/topics";
import { notFound } from "next/navigation";

interface TopicShowPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const SingleTopicPage = async({params}:TopicShowPageProps) => {
  const {slug} = await params;
  const topic = await fetchTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{topic.slug}</h1>
          <p className="text-muted-foreground">{topic.description}</p>
        </div>
        <PostList fetchData={() => fetchPostsByTopicSlug(slug)} />
      </div>
      <div>
        <PostCreateForm slug={slug}/>
      </div>
    </div>
  )
}

export default SingleTopicPage