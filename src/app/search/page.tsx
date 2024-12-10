import { redirect } from "next/navigation"
import { fetchPostsBySearchTerm } from "@/db/queries/posts"
import PostList from "@/components/posts/PostList"

interface SearchPageProps {
    searchParams: Promise<{
        term: string
    }>
}

const searchPage = async({searchParams}: SearchPageProps) => {
    const {term} = await searchParams;

    if(!term) {
        redirect("/")
    }

  return (
    <div>
        <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
    </div>
  )
}

export default searchPage