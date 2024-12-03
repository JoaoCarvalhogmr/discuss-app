import TopicCreateForm from "@/components/topics/TopicCreateForm";


export default async function Home() {
  


  return (
    <main className="grid grid-cols-4 gap-4 p-4">
        <section className="col-span-3">
          <h1 className="text-xl m-2">
            Top Posts
          </h1>
        </section>
        <section>
          <TopicCreateForm />
        </section>
    </main>
  );
}
