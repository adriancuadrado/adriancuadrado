import BlogEntry from "@/components/BlogEntry";
import { POSTS } from "@/utils";

export default async function Page() {
  return (
    <main className="flex flex-col w-md gap-[62px]">
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
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan quam felis, pulvinar mollis massa congue laoreet. Maecenas at justo eget tortor posuere feugiat in eget nibh. Sed aliquam risus sed sagittis varius. Suspendisse ut urna a mauris vulputate molestie in sed quam. Etiam sit amet mauris et libero porta porta non eget magna. Praesent ac accumsan velit. Orci varius natoque penatibus et..."
            />
          );
        }
      )}
    </main>
  );
}
