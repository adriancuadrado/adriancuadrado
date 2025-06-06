import Link from "next/link";

export default function SocialNetworks() {
  return (
    <ul className="sticky top-[145px] flex flex-col gap-[23px]">
      <li>
        <Link
          className="hover:underline bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] block size-[37px] rounded-3xl"
          href="https://www.linkedin.com/in/adrian-cuadrado-chavarria/"
        />
      </li>
      <li>
        <Link
          className="hover:underline bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] block size-[37px] rounded-3xl"
          href="https://www.twitch.tv/adriancuad"
        />
      </li>
      <li>
        <Link
          className="hover:underline bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] block size-[37px] rounded-3xl"
          href="https://youtube.com/@adriancuad?si=EBtiurApBIvTkXN6"
        />
      </li>
      <li>
        <Link
          className="hover:underline bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] block size-[37px] rounded-3xl"
          href="https://x.com/adrcuadchav97"
        />
      </li>
      <li>
        <Link
          className="hover:underline bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] block size-[37px] rounded-3xl"
          href="https://bsky.app/profile/adriancuad.bsky.social"
        />
      </li>
      <li>
        <Link
          className="hover:underline bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] block size-[37px] rounded-3xl"
          href="https://www.reddit.com/user/AdrianCuad/"
        />
      </li>
      <li>
        <Link
          className="hover:underline bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] block size-[37px] rounded-3xl"
          href="https://github.com/adriancuadrado/"
        />
      </li>
    </ul>
  );
}
