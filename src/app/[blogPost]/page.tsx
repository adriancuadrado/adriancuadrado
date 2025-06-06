import { POSTS } from "@/utils";

export default async function Page({
  params,
}: {
  params: Promise<{ blogPost: string }>;
}) {
  const { blogPost } = await params;
  const Post = POSTS[blogPost].default;
  return (
    <main className="flex flex-col w-3xl pt-[49px] pb-[49px] pl-[59px] pr-[59px] mt-[-85px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
      <Post
        components={{
          h1: ({ children }) => (
            <h1 className="text-4xl leading-[48px] mb-[51px]">{children}</h1>
          ),
        }}
      />
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(POSTS).map((p) => ({ blogPost: p }));
}

export const dynamicParams = false;
