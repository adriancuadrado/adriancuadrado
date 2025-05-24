import { readdir } from "node:fs/promises";
import { join, parse } from "node:path";
import { cwd } from "node:process";

export async function getPosts() {
  const files = await readdir(join(cwd(), "src", "posts"));
  return files.map((f) => parse(f).name);
}
