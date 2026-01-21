import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex gap-6 border-b border-zinc-200 px-6 py-4">
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/lab">Lab</Link>
      <Link href="/projects">Projects</Link>
    </nav>
  );
}
