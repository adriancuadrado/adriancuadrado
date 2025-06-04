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
    <Link href={href}>
      BlogEntry. Title: {title}, Summary: {summary}
    </Link>
  );
}
