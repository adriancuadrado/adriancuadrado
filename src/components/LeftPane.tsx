import Link from "next/link";

export default function LeftPane() {
  return (
    <div className="flex flex-col p-[16px] gap-[14px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-2xl">
      <Link className="hover:underline" href="/">
        Home
      </Link>
      <hr className="text-[#BFBFBF]" />
      <Link
        className="hover:underline"
        href="https://forms.gle/TgX92fPt3KQpbgnKA"
      >
        Newsletter
      </Link>
      <Link className="hover:underline" href="rss.xml">
        RSS Feed
      </Link>
      {/* <Link className="hover:underline text-red-500" href="">
              Notifications
            </Link> */}
    </div>
  );
}
// x - 0px; y - 4px; blur - 4px; spread - 0; color: 25transparency
// 0px 4px 4px 0 #00000040