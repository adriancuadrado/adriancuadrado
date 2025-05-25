import { posts } from "@/utils";

export default async function Page({
  params,
}: {
  params: Promise<{ blogPost: string }>;
}) {
  const { blogPost } = await params;
  const { default: Post } = await import(`@/posts/${blogPost}.md`).catch(
    () => import(`@/posts/${blogPost}.mdx`)
  );
  return <Post />;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ blogPost: p }));
}

export const dynamicParams = false;
