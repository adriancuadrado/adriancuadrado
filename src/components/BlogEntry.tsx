import Link from "next/link";

export default function BlogEntry({
  href,
  title,
  summary,
}: {
  href: string;
  title: string;
  summary: string;
}) {
  return (
    <Link
      href={href}
      className="flex flex-col bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] pt-[17px] pb-[17px] pl-[24px] pr-[24px] gap-[14px]"
    >
      <div className="text-2xl leading-[29px]">{title}</div>
      <div>{summary}</div>
    </Link>
  );
}
