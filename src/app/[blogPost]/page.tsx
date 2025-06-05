import { POSTS } from "@/utils";

export default async function Page({
  params,
}: {
  params: Promise<{ blogPost: string }>;
}) {
  const { blogPost } = await params;
  const Post = POSTS[blogPost].default;
  return (
    <main className="flex flex-col w-3xl">
      <Post />
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(POSTS).map((p) => ({ blogPost: p }));
}

export const dynamicParams = false;
