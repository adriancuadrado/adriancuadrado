import { POSTS } from "@/utils";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <header>
        <h1 className="font-bold text-7xl">Adrian Cuadrado</h1>
      </header>
      <main className="flex flex-row">
        <section className="flex flex-col gap-2">
          <div className="flex flex-col border">
            <Link
              className="hover:underline"
              href="https://forms.gle/TgX92fPt3KQpbgnKA"
            >
              Newsletter
            </Link>
            <Link className="hover:underline" href="rss.xml">
              RSS feed
            </Link>
            {/* <Link className="hover:underline text-red-500" href="">
              Notifications
            </Link> */}
          </div>
        </section>
        <section className="grow flex flex-col items-center">
          {POSTS.map((post) => (
            <Link href={post} key={post}>
              <article>
                <h1 className="font-bold text-4xl">{post}</h1>
                <p>{post}</p>
              </article>
            </Link>
          ))}
        </section>
        <section className="flex flex-col gap-2">
          <div className="border flex flex-col">
            <h2 className="font-bold text-2xl">Social networks</h2>
            <ul>
              <li>
                <Link
                  className="hover:underline"
                  href="https://www.linkedin.com/in/adrian-cuadrado-chavarria/"
                >
                  Linkedin
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href="https://www.twitch.tv/adriancuad"
                >
                  Twitch
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href="https://youtube.com/@adriancuad?si=EBtiurApBIvTkXN6"
                >
                  YouTube
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href="https://x.com/adrcuadchav97"
                >
                  Twitter / X
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href="https://bsky.app/profile/adriancuad.bsky.social"
                >
                  Bluesky
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href="https://www.reddit.com/user/AdrianCuad/"
                >
                  Reddit
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href="https://github.com/adriancuadrado/"
                >
                  Github
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
