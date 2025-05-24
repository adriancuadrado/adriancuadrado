import { getPosts } from "@/utils";

export default async function Page({
  params,
}: {
  params: Promise<{ blogPost: string }>;
}) {
  const { blogPost } = await params;
  const { default: Post } = await import(`@/posts/${blogPost}.md`);
  return <Post />;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ blogPost: p }));
}

export const dynamicParams = false;
