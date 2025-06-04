import Link from "next/link";

export default function SocialNetworks() {
  return (
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
        <Link className="hover:underline" href="https://x.com/adrcuadchav97">
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
  );
}
