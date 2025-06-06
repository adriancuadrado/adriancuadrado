import Image from "next/image";
import Link from "next/link";

import BlueskyLogo from "@/logos/bluesky.svg";
import GithubLogo from "@/logos/github.svg";
import LinkedinLogo from "@/logos/linkedin.svg";
import RedditLogo from "@/logos/reddit.svg";
import TwitchLogo from "@/logos/twitch.svg";
import XLogo from "@/logos/x.svg";
import YoutubeLogo from "@/logos/youtube.svg";

export default function SocialNetworks() {
  return (
    <div className="sticky top-[145px] flex flex-col gap-[23px]">
      <Link
        className="hover:underline flex justify-center bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] size-[37px] rounded-3xl"
        href="https://www.linkedin.com/in/adrian-cuadrado-chavarria/"
      >
        <Image
          src={LinkedinLogo}
          alt=""
          className="transform-[scale(0.7)_translate(0,3px)]"
        />
      </Link>

      <Link
        className="hover:underline flex justify-center bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] size-[37px] rounded-3xl"
        href="https://www.twitch.tv/adriancuad"
      >
        <Image src={TwitchLogo} alt="" />
      </Link>

      <Link
        className="hover:underline flex justify-center bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] size-[37px] rounded-3xl"
        href="https://youtube.com/@adriancuad?si=EBtiurApBIvTkXN6"
      >
        <Image src={YoutubeLogo} alt="" />
      </Link>

      <Link
        className="hover:underline flex justify-center bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] size-[37px] rounded-3xl"
        href="https://x.com/adrcuadchav97"
      >
        <Image src={XLogo} alt="" />
      </Link>

      <Link
        className="hover:underline flex justify-center bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] size-[37px] rounded-3xl"
        href="https://bsky.app/profile/adriancuad.bsky.social"
      >
        <Image
          src={BlueskyLogo}
          alt=""
          className="transform-[scale(0.6)_translate(1px,3px)]"
        />
      </Link>

      <Link
        className="hover:underline flex justify-center bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] size-[37px] rounded-3xl"
        href="https://www.reddit.com/user/AdrianCuad/"
      >
        <Image src={RedditLogo} alt="" className="transform-[scale(0.6)]" />
      </Link>

      <Link
        className="hover:underline flex justify-center bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] size-[37px] rounded-3xl"
        href="https://github.com/adriancuadrado/"
      >
        <Image src={GithubLogo} alt="" />
      </Link>
    </div>
  );
}
