import Link from "next/link";
import PostShow from "@/components/posts/PostShow";
import CommentList from "@/components/comments/CommentList";
import CommentCreateForm from "@/components/comments/CommentCreateForm";
import paths from "@/paths";
import { db } from "@/db";
import { fetchCommentsByPostId } from "@/db/queries/comment";

interface PostShowPageProps {
  params: Promise<{
    slug: string;
    postId: string;
  }>;
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = await params;

  const comments = db.comment.findMany({
    where: {
      postId: postId
    }
  })

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShowPath(slug)}>
        {"< "}Back to {slug}
      </Link>
       <PostShow postId={postId} /> 
       <CommentCreateForm postId={postId} startOpen /> 
      <CommentList fetchData={() => fetchCommentsByPostId(postId)} />
    </div>
  );
}
