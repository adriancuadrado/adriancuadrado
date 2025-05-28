import { POSTS } from "@/utils";

export default async function Page() {
  return (
    <>
      <header>
        <h1 className="font-bold text-7xl">Adrian Cuadrado</h1>
      </header>
      <main className="flex flex-row">
        <section className="flex flex-col gap-2">
          <div className="flex flex-col border">
            <a className="hover:underline text-red-500" href="">
              Newsletter
            </a>
            <a className="hover:underline text-red-500" href="">
              RSS feed
            </a>
            <a className="hover:underline text-red-500" href="">
              Notifications
            </a>
          </div>
        </section>
        <section className="grow flex flex-col items-center">
          {POSTS.map((post) => (
            <article key={post}>
              <h1 className="font-bold text-4xl">{post}</h1>
              <p>{post}</p>
            </article>
          ))}
        </section>
        <section className="flex flex-col gap-2">
          <div className="border flex flex-col">
            <h2 className="font-bold text-2xl">Social networks</h2>
            <ul>
              <li>
                <a
                  className="hover:underline"
                  href="https://www.linkedin.com/in/adrian-cuadrado-chavarria/"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="https://www.twitch.tv/adriancuad"
                >
                  Twitch
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="https://youtube.com/@adriancuad?si=EBtiurApBIvTkXN6"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="https://x.com/adrcuadchav97"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="https://bsky.app/profile/adriancuad.bsky.social"
                >
                  Bluesky
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="https://www.reddit.com/user/AdrianCuad/"
                >
                  Reddit
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="https://github.com/adriancuadrado/"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
