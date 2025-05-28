import { POSTS } from "@/utils";
import RSS from "rss";

export async function GET() {
  if (!process.env.ROOT_URL) {
    throw new Error("ROOT_URL env variable is not set");
  }

  const feed = new RSS({
    title: "Adrian Cuad's journey",
    feed_url: `${process.env.ROOT_URL}/rss.xml`,
    site_url: process.env.ROOT_URL,
  });

  POSTS.forEach((post) => {
    const [date, time] = post.split("_");
    feed.item({
      title: post,
      description: post,
      url: `${process.env.ROOT_URL}/${post}`,
      date: new Date(`${date}T${time.replace("-", ":")}Z`),
    });
  });
  return new Response(
    feed.xml({
      indent: process.env.NODE_ENV != "production",
    }),
    {
      headers: {
        "Content-Type": "text/xml; charset=utf-8",
      },
    }
  );
}

export const dynamic = "force-static";
