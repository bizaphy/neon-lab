import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex gap-6 border-b border-zinc-200 px-6 py-4">
      <Link href="/" className="neon-link">
        ...
      </Link>
      <Link href="/blog" className="neon-link">
        Blog
      </Link>
      <Link href="/lab" className="neon-link">
        Lab
      </Link>
      <Link href="/projects" className="neon-link">
        Projects
      </Link>
    </nav>
  );
}
