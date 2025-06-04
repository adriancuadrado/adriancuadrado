import BlogEntry from "@/components/BlogEntry";
import { POSTS } from "@/utils";

export default async function Page() {
  return (
    <>
      <main className="flex flex-row">
        <section className="grow flex flex-col items-center">
          {Object.entries(POSTS).map(
            ([
              post,
              {
                meta: { title },
              },
            ]) => {
              return (
                <BlogEntry
                  key={post}
                  href={post}
                  title={title}
                  summary="TODO"
                />
              );
            }
          )}
        </section>
      </main>
    </>
  );
}
