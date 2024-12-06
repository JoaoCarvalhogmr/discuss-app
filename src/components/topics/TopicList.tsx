import Link from "next/link"
import { db } from "@/db"
import paths from "@/paths"
import { Badge } from "../ui/badge";

const TopicList = async() => {
    const topics = await db.topic.findMany();

    const renderedTopics = topics.map((topic) => {
        return (
            <div key={topic.id}>
                <Link href={paths.topicShowPath(topic.slug)}>
                    <Badge variant={"secondary"} className="bg-orange-500 hover:bg-orange p-2">
                        {topic.slug}
                    </Badge>
                </Link>
            </div>
        )
    })
  return (
    <section className="flex flex-row flex-wrap gap-2 mt-2">
        {renderedTopics}
    </section>
  )
}

export default TopicList