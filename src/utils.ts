import { readdir } from "node:fs/promises";
import { join, parse } from "node:path";
import { cwd } from "node:process";

async function getPosts(): // : Promise<{
//   [key: string]: (args: MDXProps) => Element;
// }>
Promise<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}> {
  const files = await readdir(join(cwd(), "src", "posts"), {
    withFileTypes: true,
  });

  if (
    files.some(
      (file) =>
        file.isDirectory() || ["md", "mdx"].includes(parse(file.name).ext)
    )
  ) {
    throw new Error(
      "The `posts` folder should only have markdown files and nothing else."
    );
  }

  const fileNames = files.map((file) => parse(file.name).name);
  const uniqueFileNames = [...new Set(fileNames)];

  if (fileNames.length != uniqueFileNames.length) {
    throw new Error(
      `There are at least 2 posts with the same name:\n${uniqueFileNames
        .filter((fileName) => fileNames.filter((f) => f == fileName).length > 1)
        .join(
          ", "
        )}.\n\nThis can happen if you create 2 posts with the same name but with md and mdx extensions.`
    );
  }

  if (
    fileNames.some(
      (fileName) =>
        !/^[0-9]{4}(?:-[0-3][0-9]){2}_[[0-2][0-9](?:-[0-5][0-9]){2}$/.test(
          fileName
        )
    )
  ) {
    throw new Error(
      "There is a post whose filename doesn't have the correct YYYY-MM-DD_hh-mm-ss format."
    );
  }

  return Object.fromEntries(
    await Promise.all(
      fileNames.map(async (fileName) => [
        fileName,
        await import(`@/posts/${fileName}.md`).catch(
          () => import(`@/posts/${fileName}.mdx`)
        ),
      ])
    )
  );
}

export const POSTS = await getPosts();
