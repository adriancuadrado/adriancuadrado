// import { POSTS } from "@/utils";

export default async function Page() {
  //   {
  //   params,
  // }: {
  //   params: Promise<{ blogPost: string }>;
  // }
  // const { blogPost } = await params;
  // return POSTS[blogPost];
  return null;
}

export async function generateStaticParams() {
  // return Object.keys(POSTS);
  return "2025-05-25_19-48-01";
}

export const dynamicParams = false;
