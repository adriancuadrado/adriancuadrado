import Link from "next/link";

export default function LeftPane() {
  return (
    <div className="flex flex-col">
      <Link className="hover:underline" href="/">
        Home
      </Link>
      <hr />
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
